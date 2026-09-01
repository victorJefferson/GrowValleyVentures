export const siteConfig = {
  name: "AFAQ Partners",
  url: "https://afaqpartners.com",
  /** Maintenance is ON if Production is NOT online */
  maintenanceMode: process.env.NEXT_PUBLIC_PRODUCTION_ONLINE !== "true",
};
