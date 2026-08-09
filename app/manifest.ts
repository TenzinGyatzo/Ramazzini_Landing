import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ramazzini — Software de Exámenes Médicos Laborales",
    short_name: "Ramazzini",
    description:
      "Software web especializado en salud ocupacional para realizar exámenes médicos laborales, organizar expedientes y generar informes PDF profesionales.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#070f1f",
    theme_color: "#0b1326",
    lang: "es-MX",
    categories: ["business", "health", "medical", "productivity"],
    icons: [
      {
        src: "/brand/ramazzini-brand.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
