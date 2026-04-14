export const siteConfig = {
  name: "GrowValley",
  description: "Institutional-grade investment platform for family offices and qualified investors.",
  url: "https://gv.ventures",
  maintenanceMode: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true", // Read from environment variable
};

export type SiteConfig = typeof siteConfig;
