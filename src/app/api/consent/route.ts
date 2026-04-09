import { NextResponse } from "next/server";
import { adminClient } from "@/lib/sanityAdmin";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { timestamp, consent, userAgent, url } = body;

    // Redact IP for privacy compliance (supports IPv4 and IPv6)
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    let anonymizedIp = "unknown";
    
    if (ip.includes(".")) {
      // IPv4: 192.168.1.1 -> 192.168.1.xxx
      anonymizedIp = ip.split(".").slice(0, 3).join(".") + ".xxx";
    } else if (ip.includes(":")) {
      // IPv6: ::1 or a full address
      // For localhost ::1, just keep it as is + .xxx or redact it
      const parts = ip.split(":");
      anonymizedIp = parts.slice(0, Math.max(1, parts.length - 1)).join(":") + ":xxxx";
    }

    // Only skip if no token is configured
    if (!process.env.SANITY_WRITE_TOKEN) {
      console.log("TrustGuard [STUB]: Audit log recorded (no token):", {
        timestamp,
        anonymizedIp,
        consent,
      });
      return NextResponse.json({ status: "recorded_stub" });
    }

    await adminClient.create({
      _type: "consentLog",
      timestamp,
      anonymizedIp,
      consent: {
          necessary: consent.necessary || false,
          preferences: consent.preferences || false,
          statistics: consent.statistics || false,
          marketing: consent.marketing || false,
      },
      userAgent,
      url,
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("TrustGuard: API Error", error);
    return NextResponse.json({ error: "Failed to log consent" }, { status: 500 });
  }
}
