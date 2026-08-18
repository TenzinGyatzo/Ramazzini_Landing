import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get.ramazzini.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
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
      url: `${siteUrl}/software-salud-ocupacional/`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          "es-MX": `${siteUrl}/software-salud-ocupacional/`,
          es: `${siteUrl}/software-salud-ocupacional/`,
        },
      },
    },
    {
      url: `${siteUrl}/expediente-medico-laboral/`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          "es-MX": `${siteUrl}/expediente-medico-laboral/`,
          es: `${siteUrl}/expediente-medico-laboral/`,
        },
      },
    },
    {
      url: `${siteUrl}/terminos-y-condiciones/`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          "es-MX": `${siteUrl}/terminos-y-condiciones/`,
          es: `${siteUrl}/terminos-y-condiciones/`,
        },
      },
    },
  ];
}
