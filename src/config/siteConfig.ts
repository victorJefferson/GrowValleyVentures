export const siteConfig = {
  name: "AFAQ Partners",
  url: "https://afaqpartners.com",
  /**
   * Maintenance gate for production only.
   * Preview deployments and local/dev always show the live site so branch QA works.
   * Production stays behind NEXT_PUBLIC_PRODUCTION_ONLINE=true until launch.
   */
  maintenanceMode:
    process.env.VERCEL_ENV !== "preview" &&
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_PRODUCTION_ONLINE !== "true",
};
