import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { legalPageBySlugQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Regulatory Disclosures | AFAQ Partners",
  description: "Regulatory disclosures for AFAQ Partners.",
};

const fallbackSections = [
  {
    headline: "We operate under regulatory frameworks that hold us accountable.",
    body: "AFAQ Partners operates across multiple jurisdictions. Each entity within our group is licensed, registered, and regulated by the relevant authority in its market. For any queries related to our regulatory standing, contact legal@afaqpartners.com.",
  },
  {
    headline: "Our regulated entities.",
    body: "AFAQ Partners operates through a network of entities across multiple jurisdictions. Details of licensing, regulatory approvals, and permitted activities will be disclosed here as they are formally established and confirmed.",
  },
  {
    headline: "Who our services are designed for.",
    body: "AFAQ Partners' investment services are directed at accredited, professional, or institutional investors as defined by the relevant regulatory framework in each jurisdiction.",
  },
  {
    headline: "Suitability is not optional. It's the starting point.",
    body: "Before providing any investment service, AFAQ Partners conducts a suitability assessment for each client.",
  },
];

export default async function RegulatoryDisclosuresPage() {
  let page: any = null;
  try {
    page = await client.fetch(legalPageBySlugQuery, { slug: "regulatory-disclosures" });
  } catch (e) {
    console.error(e);
  }

  const sections = page?.sections?.length ? page.sections : fallbackSections;

  return (
    <main className="section-padding">
      <div className="container" style={{ maxWidth: 720 }}>
        <h1>{page?.headline || "Regulatory Disclosures"}</h1>
        {sections.map((s: { headline?: string; body?: string }, i: number) => (
          <section key={i} style={{ marginTop: "2.5rem" }}>
            {s.headline && <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{s.headline}</h2>}
            {s.body && <p style={{ lineHeight: 1.7, color: "var(--color-text-muted)" }}>{s.body}</p>}
          </section>
        ))}
        <p style={{ marginTop: "3rem" }}>
          <Link href="/contact">Contact</Link> · <Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/disclaimer">Disclaimer</Link>
        </p>
      </div>
    </main>
  );
}
