import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://resonanceops.ltd/sitemap.xml",
  };
}

export const dynamic = "force-static";
