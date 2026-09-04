#!/usr/bin/env node
/**
 * Seed AFAQ Partners content into Sanity (stage dataset by default).
 * Idempotent: uses createOrReplace with stable _id values.
 *
 * Usage:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=... NEXT_PUBLIC_SANITY_DATASET=stage SANITY_WRITE_TOKEN=... npm run seed:sanity
 */

import { createClient } from "@sanity/client";
import { allSeedDocuments } from "./seed-data";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "stage";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_WRITE_TOKEN. Cannot seed."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-03-01",
  token,
  useCdn: false,
});

async function seed() {
  const docs = allSeedDocuments();
  console.log(`Seeding ${docs.length} documents to dataset "${dataset}"...`);

  let ok = 0;
  let fail = 0;

  for (const doc of docs) {
    try {
      // Preserve existing hero/site images when reseeding text — createOrReplace
      // without an image field was wiping the green home hero on stage.
      if (doc._type === "hero" || doc._type === "teamMember") {
        const existing = await client.getDocument(doc._id).catch(() => null);
        if (existing?.image && !(doc as { image?: unknown }).image) {
          (doc as { image?: unknown }).image = existing.image;
        }
      }
      await client.createOrReplace(doc as Record<string, unknown>);
      console.log(`  ✓ ${doc._id}`);
      ok++;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  ✗ ${doc._id}: ${message}`);
      fail++;
    }
  }

  // Patch existing insights: rebrand GrowValley references in title/excerpt if present
  try {
    const insights = await client.fetch<
      { _id: string; title?: string; excerpt?: string }[]
    >(`*[_type == "insight"]{ _id, title, excerpt }`);
    for (const insight of insights) {
      const patch: Record<string, string> = {};
      if (insight.title?.includes("GrowValley")) {
        patch.title = insight.title.replace(/GrowValley/g, "AFAQ Partners");
      }
      if (insight.excerpt?.includes("GrowValley")) {
        patch.excerpt = insight.excerpt.replace(/GrowValley/g, "AFAQ Partners");
      }
      if (Object.keys(patch).length > 0) {
        await client.patch(insight._id).set(patch).commit();
        console.log(`  ✓ patched insight ${insight._id}`);
      }
    }
  } catch (e) {
    console.warn("  (skipped insight patch)", e);
  }

  console.log(`\nDone: ${ok} succeeded, ${fail} failed.`);
  if (fail > 0) process.exit(1);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
