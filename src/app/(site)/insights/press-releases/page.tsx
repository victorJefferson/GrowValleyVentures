import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { pressReleasesQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Press Releases | AFAQ Partners",
  description: "Official announcements from AFAQ Partners.",
};

export default async function PressReleasesPage() {
  let releases: any[] = [];
  try {
    releases = await client.fetch(pressReleasesQuery);
  } catch (e) {
    console.error(e);
  }

  return (
    <main className="section-padding">
      <div className="container" style={{ maxWidth: 800 }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: "2rem", fontSize: "0.875rem" }}>
          <Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / Press Releases
        </nav>
        <h1>Official announcements from AFAQ Partners.</h1>
        <p style={{ marginTop: "1rem", lineHeight: 1.7 }}>
          This page contains formal announcements from AFAQ Partners — new offices, partnerships, regulatory milestones, product launches, and key appointments.
        </p>
        <p style={{ marginTop: "1rem" }}>
          Media Contact: <a href="mailto:media@afaqpartners.com">media@afaqpartners.com</a>
        </p>

        {releases.length === 0 ? (
          <p style={{ marginTop: "3rem", color: "var(--color-text-muted)" }}>
            Press releases will be published here. [Comms team to populate]
          </p>
        ) : (
          <ul style={{ marginTop: "3rem", listStyle: "none", padding: 0 }}>
            {releases.map((pr) => (
              <li key={pr._id} style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid #eee" }}>
                <h3>{pr.title}</h3>
                {pr.summary && <p>{pr.summary}</p>}
              </li>
            ))}
          </ul>
        )}

        <section style={{ marginTop: "4rem" }}>
          <h2>Working on a story? We&apos;re straightforward to deal with.</h2>
          <p style={{ marginTop: "1rem", lineHeight: 1.7 }}>
            If you&apos;re a journalist, researcher, or media professional looking for comment, data, or a spokesperson, reach out directly.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Contact: <a href="mailto:media@afaqpartners.com">media@afaqpartners.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
