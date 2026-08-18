import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
  display: "swap",
});

const defaultSiteUrl = "https://get.ramazzini.app";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;
const siteUrl = URL.canParse(rawSiteUrl) ? rawSiteUrl : defaultSiteUrl;
const title = "Ramazzini | Software de Salud Ocupacional para Equipos Médicos";
const description =
  "Realiza exámenes médicos laborales, organiza expedientes por empresa y trabajador, y genera informes PDF profesionales. Agenda una demo o prueba gratis 15 días.";
const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-NEN3KECKWT";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-MPW2CTVB";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Ramazzini",
  },
  description,
  applicationName: "Ramazzini",
  authors: [{ name: "Ramazzini", url: siteUrl }],
  creator: "Ramazzini",
  publisher: "Ramazzini",
  category: "HealthApplication",
  classification: "Business Software",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/brand/ramazzini-brand.svg", type: "image/svg+xml" }],
    shortcut: "/brand/ramazzini-brand.svg",
    apple: [{ url: "/brand/ramazzini-brand.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
      es: "/",
    },
  },
  keywords: [
    "software de examenes medicos laborales",
    "software salud ocupacional Mexico",
    "software salud ocupacional Latinoamerica",
    "historias clinicas laborales",
    "aptitud al puesto",
    "medicina del trabajo",
    "expedientes medicos laborales",
    "informes PDF salud ocupacional",
    "examen medico laboral",
    "examenes de ingreso",
    "examenes periodicos",
    "examenes de retiro",
    "audiometria ocupacional",
    "espirometria ocupacional",
    "visiometria ocupacional",
    "antidoping laboral",
    "NOM-035",
    "NOM-019",
    "STPS Mexico",
    "IMSS digital",
    "medico ocupacional software",
    "plataforma salud ocupacional",
    "Ramazzini software",
    "software para medicos del trabajo",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: ["es_ES", "es"],
    url: siteUrl,
    siteName: "Ramazzini",
    title,
    description,
    images: [
      {
        url: "/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Pantalla del sistema Ramazzini para salud ocupacional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/social-preview.jpg"],
    creator: "@ramazzini_mx",
    site: "@ramazzini_mx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "MX",
    "geo.placename": "México y Latinoamérica",
    distribution: "global",
    rating: "general",
    "revisit-after": "7 days",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1326",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={kanit.variable} suppressHydrationWarning>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body suppressHydrationWarning>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        {!gtmId && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        {children}
      </body>
    </html>
  );
}
