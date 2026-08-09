import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get.ramazzini.app";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/social-preview.jpg`],
      alternates: {
        languages: {
          "es-MX": siteUrl,
          es: siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/terminos-y-condiciones`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          "es-MX": `${siteUrl}/terminos-y-condiciones`,
          es: `${siteUrl}/terminos-y-condiciones`,
        },
      },
    },
  ];
}
