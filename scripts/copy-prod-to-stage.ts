#!/usr/bin/env node
/**
 * Copy production Sanity dataset to stage (requires Sanity CLI auth or project admin).
 * Run manually before seed if stage should mirror production first.
 *
 * Usage: npm run sanity:copy-prod-to-stage
 */

import { execSync } from "child_process";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "eioth5w1";

console.log(`Copying production → stage for project ${projectId}...`);
console.warn("This OVERWRITES all data in the stage dataset.");

try {
  execSync(
    `npx sanity dataset copy production stage --project ${projectId} --skip-history --yes`,
    { stdio: "inherit", env: process.env }
  );
  console.log("Dataset copy complete.");
} catch {
  console.error(
    "Dataset copy failed. You may need to run manually with Sanity CLI login:\n" +
      `  npx sanity dataset copy production stage --project ${projectId}`
  );
  process.exit(1);
}
