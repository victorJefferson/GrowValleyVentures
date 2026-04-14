export const siteConfig = {
  name: "GrowValley",
  description: "Institutional-grade investment platform for family offices and qualified investors.",
  url: "https://gv.ventures",
  maintenanceMode: process.env.NEXT_PUBLIC_PRODUCTION_ONLINE !== "true", // Maintenance is ON if Production is NOT online
};

export type SiteConfig = typeof siteConfig;
