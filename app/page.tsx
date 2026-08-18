import Image from "next/image";
import type { ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  DatabaseZap,
  FileCheck2,
  FileText,
  FolderSearch,
  HeartPulse,
  LockKeyhole,
  Quote,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { IsoMark } from "./components/IsoMark";
import { ScreensShowcase } from "./components/ScreensShowcase";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get.ramazzini.app";
const appUrl =
  process.env.NEXT_PUBLIC_APP_URL || "https://ramazzini.app/auth/onboarding";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "526681702850";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "soporte@ramazzini.app";
const supportEmail =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "soporte@ramazzini.app";
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";
const logoUrl = `${siteUrl}/RamazziniLogoClaroNoBg.png`;
const screenshotUrl = `${siteUrl}/social-preview.jpg`;

const benefits = [
  {
    icon: DatabaseZap,
    title: "Captura inteligente",
    text: "Formularios que reutilizan datos, calculan indicadores y reducen errores durante la evaluación.",
  },
  {
    icon: FolderSearch,
    title: "Expedientes ordenados",
    text: "Organiza documentos por empresa, centro, trabajador y año. Todo disponible desde un solo lugar. Sin carpetas dispersas, USB ni búsquedas de último minuto.",
  },
  {
    icon: FileCheck2,
    title: "Informes profesionales",
    text: "Genera PDF con la imagen de tu organización, previsualízalos y combina varios documentos en un solo archivo.",
  },
  {
    icon: BarChart3,
    title: "Estadísticas accionables",
    text: "Filtra grupos de riesgo, genera tablas y gráficas, y presenta hallazgos respaldados por datos.",
  },
  {
    icon: Activity,
    title: "Riesgos de trabajo",
    text: "Registra y da seguimiento a cada caso, y analiza incidencias por tipo, trabajador y centro de trabajo.",
  },
];

const screenCaptures = [
  {
    src: "/capturas/Inicio-Oscuro.jpg",
    alt: "Inicio del sistema Ramazzini en modo oscuro",
  },
  {
    src: "/capturas/Expediente-Oscuro.jpg",
    alt: "Expediente de trabajador en Ramazzini",
  },
  {
    src: "/capturas/Empresas-Clara.jpg",
    alt: "Empresas en Ramazzini en modo claro",
  },
  {
    src: "/capturas/Inicio-Claro.jpg",
    alt: "Inicio del sistema Ramazzini en modo claro",
  },
  {
    src: "/capturas/Historia-Clara.jpg",
    alt: "Historia clínica en Ramazzini",
  },
  {
    src: "/capturas/Centros-Clara.jpg",
    alt: "Centros de trabajo en Ramazzini",
  },
  {
    src: "/capturas/Centros-Oscura.jpg",
    alt: "Centros de trabajo en modo oscuro dentro de Ramazzini",
  },
  {
    src: "/capturas/Dashboard-Claro.jpg",
    alt: "Dashboard de salud ocupacional en Ramazzini",
  },
  {
    src: "/capturas/Expediente-Claro.jpg",
    alt: "Expediente en modo claro dentro de Ramazzini",
  },
  {
    src: "/capturas/dashboard-oscuro.jpg",
    alt: "Indicadores de salud ocupacional en modo oscuro",
  },
  {
    src: "/capturas/AudiometrÃ_a-Clara.jpg",
    alt: "Audiometría en modo claro dentro de Ramazzini",
  },
  {
    src: "/capturas/AudiometrÃ_a Oscura.jpg",
    alt: "Audiometría en modo oscuro dentro de Ramazzini",
  },
];

const brandLogos = [
  {
    name: "PREVENSA",
    src: "/marcas-testimonio/prevensa-logo.png",
    width: 500,
    height: 500,
    scale: 1.32,
    testimonialScale: 1.9,
  },
  {
    name: "Médica Ocupacional Caborca",
    src: "/marcas-testimonio/moc-caborca-logo.png",
    width: 745,
    height: 745,
    scale: 1.32,
    testimonialScale: 1.7,
  },
  {
    name: "Asesoría Médico Empresarial de Sinaloa",
    src: "/marcas-testimonio/asesoria-medico-empresarial-de-sinaloa-logo.png",
    width: 500,
    height: 500,
    scale: 1.12,
    testimonialScale: 1.16,
  },
  {
    name: "Servicios de Medicina del Trabajo Dra. Rebeca Melamed",
    src: "/marcas-testimonio/dra-rebeca-melamed-servicios-de-medicina-del-trabajo-logo.png",
    width: 900,
    height: 281,
    scale: 1.22,
    testimonialScale: 1.15,
  },
  {
    name: "Centro de Diagnóstico CEDIP",
    src: "/marcas-testimonio/centro-de-diagnostico-cedip-sa-logo.png",
    width: 500,
    height: 500,
    scale: 1.32,
    testimonialScale: 1.3,
  },
  {
    name: "Consultorio Dr. González",
    src: "/marcas-testimonio/consultorio-dr-gonzalez-logo.png",
    width: 500,
    height: 500,
    scale: 1.32,
    testimonialScale: 1.16,
  },
  {
    name: "Dr. Senén Cabrera Sampayo",
    src: "/marcas-testimonio/dr-senen-cabrera-sampayo-logo.jpg",
    width: 500,
    height: 500,
    scale: 1.5,
    testimonialScale: 1.16,
  },
  {
    name: "Neuromedical SA",
    src: "/marcas-testimonio/neuromedical-sa-logo.jpeg",
    width: 500,
    height: 500,
    scale: 1.12,
    testimonialScale: 1.16,
  },
];

const differentiators = [
  {
    icon: HeartPulse,
    title: "Especializado desde el origen",
    text: "Creado desde la medicina laboral, no adaptado desde otro sector. Cada función responde a necesidades reales de la práctica ocupacional.",
  },
  {
    icon: Activity,
    title: "La operación médica es el centro",
    text: "La operación médica ocupa el centro del sistema, con la profundidad necesaria para evaluar trabajadores y documentar cada resultado.",
  },
  {
    icon: ClipboardCheck,
    title: "Flujos que siguen la práctica",
    text: "La captura sigue el orden natural de una evaluación médica laboral, sin pasos innecesarios ni procesos administrativos que estorben.",
  },
  {
    icon: FileText,
    title: "Formatos con criterio clínico",
    text: "Historias clínicas, exploraciones y dictámenes incluyen la estructura y el nivel de detalle que exige la salud ocupacional.",
  },
  {
    icon: DatabaseZap,
    title: "Ayudas que realmente aportan",
    text: "Cálculos, interpretaciones y redacciones automáticas facilitan el trabajo clínico y reducen omisiones sin sustituir tu criterio.",
  },
  {
    icon: FileCheck2,
    title: "Documentos listos para entregar",
    text: "Los documentos finales conservan orden, claridad y una presentación profesional, sin depender de plantillas improvisadas o genéricas.",
  },
];

const testimonials = [
  {
    quote:
      "Ramazzini está muy bien estructurado y pensado para la medicina laboral. Nos permite ahorrar tiempo, generar documentos de muy buena calidad y obtener información en minutos sin buscar en todos los expedientes.",
    name: "Dr. Mario Iván García Alonso",
    role: "Director General",
    organization: "Médica Ocupacional Caborca",
    location: "Sonora, México",
    logo: brandLogos[1],
  },
  {
    quote:
      "Ramazzini me ha resuelto la vida. Puedo organizar y consultar fácilmente la información clínica, acceder a los expedientes desde cualquier lugar y obtener el informe final sin tener que elaborar cuadros o tablas adicionales.",
    name: "Dra. Rebeca J. Melamed Arrocha",
    role: "Médico especialista en Medicina del Trabajo",
    organization: "Servicios de Medicina del Trabajo",
    location: "Panamá",
    logo: brandLogos[3],
  },
  {
    quote:
      "Ramazzini procesa y agrupa los datos a la par de la captura, lo que facilita mucho nuestro trabajo, ahorra tiempo y disminuye dramáticamente el margen de error. Francamente, es una gran herramienta a un costo accesible.",
    name: "Lic. Raúl Rodríguez García",
    role: "Administración",
    organization: "PREVENSA",
    location: "Chihuahua, México",
    logo: brandLogos[0],
  },
  {
    quote:
      "Ramazzini me permite acceder a los archivos desde cualquier lugar y mantener la información organizada, con formatos limpios e informes visuales de los centros de trabajo. Es un excelente sistema de gestión y control para medicina laboral.",
    name: "Dr. Heleodoro Rodríguez",
    role: "Médico Encargado",
    organization: "Médica Ocupacional Caborca",
    location: "Sonora, México",
    logo: brandLogos[1],
  },
  {
    quote:
      "Recomiendo Ramazzini al cien por ciento. Es fácil de usar y de entender, agiliza el registro de los exámenes médicos y realmente está hecho para facilitar el trabajo.",
    name: "Enf. Nidia Daniela Aguirre López",
    role: "Enfermera Laboral",
    organization: "Asesoría Médico Empresarial de Sinaloa",
    location: "México",
    logo: brandLogos[2],
  },
  {
    quote:
      "Ramazzini nos permite ahorrar tiempo, mantener todo organizado en una misma ubicación y trabajar con mayor facilidad. Es un excelente programa que hace más ágil nuestra forma de trabajo.",
    name: "Ana María Chicax Benito",
    role: "Optómetra",
    organization: "Centro de Diagnóstico CEDIP",
    location: "Guatemala",
    logo: brandLogos[4],
  },
];

const faqs = [
  [
    "¿Qué es Ramazzini y para quién es?",
    "Ramazzini es una plataforma web para profesionales de la salud ocupacional, servicios médicos internos y proveedores de salud ocupacional. Agiliza y estructura la captura de datos médicos, organiza expedientes por empresa, centro de trabajo y trabajador, y genera informes profesionales en PDF.",
  ],
  [
    "¿Qué documentos puedo generar?",
    "Puedes generar historias clínicas, exploraciones físicas, exámenes de la vista, audiometrías, antidopings, certificados, notas médicas, aptitudes al puesto y otros documentos. Además, puedes anexar estudios externos, como espirometrías, análisis clínicos y radiografías, al expediente de cada trabajador.",
  ],
  [
    "¿Me ayuda con el cumplimiento ante la STPS, el IMSS y otras autoridades?",
    "Ramazzini no sustituye la responsabilidad médica ni legal, pero facilita la elaboración, organización y consulta de la documentación necesaria para atender auditorías, requerimientos internos y reportes de salud laboral.",
  ],
  [
    "¿Me sirve para auditorías y requerimientos de autoridad?",
    "Sí. Los expedientes quedan fechados y organizados por empresa, centro de trabajo, trabajador y año. Además, puedes generar informes, reportes y estadísticas que facilitan la atención de auditorías, requerimientos internos y solicitudes de autoridades laborales.",
  ],
  [
    "¿Ramazzini cuenta con la certificación conforme a la NOM-024-SSA3-2012?",
    "Ramazzini estará certificado pronto. La plataforma ya cumple con los requisitos aplicables y actualmente se encuentra en proceso formal de verificación. Una vez obtenida la certificación, lo anunciaremos a través de esta página y de los medios oficiales de Ramazzini.",
  ],
  [
    "¿Cómo protegen la información?",
    "Protegemos la información mediante varias capas de seguridad: conexiones cifradas, contraseñas almacenadas de forma segura, accesos controlados y sesiones que expiran automáticamente. Los expedientes se alojan en infraestructura protegida, sin acceso público directo, y realizamos respaldos automáticos diarios para facilitar su recuperación ante incidentes. Además, contamos con un Sistema de Gestión de Seguridad de la Información, con políticas y procedimientos para controlar accesos, gestionar cambios y responder ante incidentes.",
  ],
  [
    "¿Es difícil de usar?",
    "No. Ramazzini está diseñado para profesionales de la salud y personal administrativo sin perfil técnico. Los formularios guían la captura paso a paso y la mayoría de los usuarios puede generar su primer informe desde el primer día.",
  ],
  [
    "¿Cuánto tiempo toma comenzar?",
    "Puedes crear tu cuenta y comenzar en minutos. También puedes importar trabajadores desde Excel y recibir acompañamiento inicial para preparar tu información, configurar la imagen de tus informes y comenzar a trabajar con el flujo de Ramazzini.",
  ],
  [
    "¿Puedo importar trabajadores desde Excel?",
    "Sí. Puedes importar de forma masiva desde Excel los datos generales de tus trabajadores para comenzar sin capturarlos uno por uno. Los documentos y antecedentes clínicos no se importan; las nuevas evaluaciones se realizan directamente en Ramazzini.",
  ],
  [
    "¿Puedo personalizar la imagen de mis informes?",
    "Sí. Se puede configurar el logotipo, los colores, los datos del prestador del servicio, la información de la organización y la firma que aparecerán en tus informes. Ramazzini utiliza formatos clínicos preestablecidos, diseñados específicamente para documentar evaluaciones de salud ocupacional.",
  ],
  [
    "¿Cómo funciona la prueba gratuita?",
    "Tienes 15 días para utilizar Ramazzini, sin tarjeta ni permanencia, y puedes gestionar hasta 25 expedientes.",
  ],
  [
    "¿Qué pasa con mis datos si cancelo?",
    "Tu información te pertenece. Si decides cancelar, podrás descargar y exportar tus informes antes de que concluya el servicio. La cancelación no tiene penalización ni plazo forzoso.",
  ],
];

const occupationalResources = [
  {
    href: "/software-salud-ocupacional/",
    title: "Software de salud ocupacional",
    text: "Qué debe tener una plataforma especializada.",
  },
  {
    href: "/expediente-medico-laboral/",
    title: "Expediente médico laboral",
    text: "Cómo organizar el historial del trabajador.",
  },
  {
    href: "/aptitud-medica-laboral/",
    title: "Aptitud médica laboral",
    text: "Cómo se determina la conclusión sobre el puesto.",
  },
  {
    href: "/examen-medico-laboral/",
    title: "Examen médico laboral",
    text: "Qué evalúa y cómo documentarlo.",
  },
  {
    href: "/vigilancia-de-la-salud-de-los-trabajadores/",
    title: "Vigilancia de la salud de los trabajadores",
    text: "Seguimiento de la población trabajadora.",
  },
  {
    href: "/certificacion-nom-024-ssa3-2012/",
    title: "Certificación NOM-024-SSA3-2012",
    text: "Qué implica la norma y su evaluación.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Ramazzini",
      legalName: "Ramazzini",
      url: siteUrl,
      logo: logoUrl,
      image: logoUrl,
      description:
        "Software web especializado en salud ocupacional para realizar exámenes médicos laborales, organizar expedientes y generar informes PDF profesionales.",
      foundingDate: "2024",
      areaServed: [
        { "@type": "Country", name: "Mexico" },
        { "@type": "AdministrativeArea", name: "Latinoamérica" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          areaServed: ["MX", "Latin America"],
          availableLanguage: ["Spanish"],
          email: contactEmail,
          ...(contactPhone ? { telephone: contactPhone } : {}),
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          areaServed: ["MX", "Latin America"],
          availableLanguage: ["Spanish"],
          email: supportEmail,
        },
      ],
      knowsAbout: [
        "Salud ocupacional",
        "Medicina del trabajo",
        "Examen médico laboral",
        "Aptitud al puesto",
        "NOM-035",
        "NOM-019",
        "STPS",
        "IMSS",
        "Audiometría ocupacional",
        "Espirometría ocupacional",
        "Visiometría ocupacional",
        "Antidoping laboral",
        "Historia clínica laboral",
        "Informes PDF salud ocupacional",
      ],
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}#occupational-health-service`,
      name: "Software de salud ocupacional Ramazzini",
      serviceType: "Software de gestión para medicina del trabajo",
      url: siteUrl,
      description:
        "Plataforma tecnológica para profesionales de salud ocupacional. Gestiona historias clínicas laborales, aptitudes al puesto, estudios complementarios e informes de salud ocupacional.",
      areaServed: [
        { "@type": "Country", name: "Mexico" },
        { "@type": "AdministrativeArea", name: "Latinoamérica" },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "Médicos ocupacionales, servicios médicos internos y proveedores de salud ocupacional",
      },
      provider: { "@id": `${siteUrl}#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Ramazzini",
      inLanguage: "es-MX",
      publisher: { "@id": `${siteUrl}#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}#software`,
      name: "Ramazzini",
      applicationCategory: "HealthApplication",
      applicationSubCategory: "Occupational Health Management",
      operatingSystem: "Web (todos los navegadores modernos)",
      url: siteUrl,
      description:
        "Software para realizar exámenes médicos laborales, organizar expedientes por empresa y trabajador, y generar informes PDF de salud ocupacional.",
      softwareVersion: "2026.1",
      datePublished: "2024-01-15",
      dateModified: "2026-08-05",
      inLanguage: "es-MX",
      countryOfOrigin: "MX",
      downloadUrl: siteUrl,
      screenshot: screenshotUrl,
      featureList: [
        "Captura inteligente con formularios progresivos",
        "Expedientes organizados por empresa, centro y año",
        "Generación de informes PDF con logotipo personalizado",
        "Estadísticas y gráficos de salud ocupacional",
        "Registro de riesgos de trabajo",
        "Importación de trabajadores desde Excel",
        "Acompañamiento inicial incluido",
        "Soporte personalizado por WhatsApp",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Básico",
          price: "999",
          priceCurrency: "MXN",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}#precios`,
          description:
            "Para profesionales que quieren digitalizar su operación y dejar atrás el papel.",
        },
        {
          "@type": "Offer",
          name: "Profesional",
          price: "2397",
          priceCurrency: "MXN",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}#precios`,
          description:
            "Para equipos de salud ocupacional que atienden varias empresas.",
        },
        {
          "@type": "Offer",
          name: "Empresarial",
          price: "4395",
          priceCurrency: "MXN",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}#precios`,
          description:
            "Para operaciones de alto volumen que necesitan mayor capacidad.",
        },
      ],
      review: testimonials.map((testimonial) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: testimonial.name,
          jobTitle: testimonial.role,
        },
        publisher: {
          "@type": "Organization",
          name: testimonial.organization,
        },
        reviewBody: testimonial.quote,
        inLanguage: "es",
      })),
      areaServed: [
        { "@type": "Country", name: "Mexico" },
        { "@type": "AdministrativeArea", name: "Latinoamérica" },
      ],
      publisher: { "@id": `${siteUrl}#organization` },
    },
    {
      "@type": "HowTo",
      "@id": `${siteUrl}#how-to`,
      name: "Cómo usar Ramazzini en 3 pasos",
      description:
        "Realiza y entrega tus exámenes médicos en tres pasos con Ramazzini.",
      totalTime: "PT5M",
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "MXN",
        value: "0",
      },
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Captura sin repetir",
          text: "Registra trabajadores y realiza evaluaciones con formularios que reutilizan datos y calculan indicadores clave.",
          url: `${siteUrl}#como-funciona`,
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Organiza automáticamente",
          text: "Cada documento se integra en el expediente correspondiente, organizado por empresa, centro, trabajador y año.",
          url: `${siteUrl}#como-funciona`,
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Genera y entrega",
          text: "Crea informes PDF con la imagen de tu organización y combínalos en un solo archivo listo para entregar.",
          url: `${siteUrl}#como-funciona`,
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Características",
          item: `${siteUrl}#caracteristicas`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Precios",
          item: `${siteUrl}#precios`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Agendar demo",
          item: `${siteUrl}#demo`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@type": "SpeakableSpecification",
      xpath: [
        "/html/head/title",
        "/html/body//h1",
        "/html/body//section[@id='faq']//details//summary",
        "/html/body//section[contains(@class,'aeo-snippet')]",
      ],
    },
  ],
};

export default function Home() {
  const waMessage = encodeURIComponent(
    "Hola, vi la pagina de Ramazzini y me gustaria agendar una demo del sistema.",
  );

  return (
    <div className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
            .replaceAll("<", "\\u003c")
            .replaceAll(">", "\\u003e")
            .replaceAll("&", "\\u0026")
            .replaceAll("", "\\u2028")
            .replaceAll("", "\\u2029"),
        }}
      />
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-single">
            <span
              className="eyebrow hero-reveal"
              style={{ animationDelay: "0ms" }}
            >
              <HeartPulse size={16} /> Software de salud ocupacional
            </span>
            <h1 className="hero-reveal" style={{ animationDelay: "120ms" }}>
            El programa para realizar exámenes médicos laborales que agiliza tu operación en minutos.
            </h1>
            <p
              className="hero-copy hero-reveal"
              style={{ animationDelay: "240ms" }}
            >
              Captura los datos una sola vez, organiza expedientes por empresa y
              genera informes PDF con presentación profesional. Ramazzini te
              ayuda a trabajar con mayor rapidez y orden, atender más
              evaluaciones y hacer crecer tu servicio de salud ocupacional.
            </p>
            <HeroVideo />
            <ul className="hero-bullets">
              <li className="hero-reveal" style={{ animationDelay: "360ms" }}>
                <CheckCircle2 size={18} /> Demo personalizada de 45 minutos
              </li>
              <li className="hero-reveal" style={{ animationDelay: "440ms" }}>
                <CheckCircle2 size={18} /> Prueba gratis 15 días, sin tarjeta
              </li>
              <li className="hero-reveal" style={{ animationDelay: "520ms" }}>
                <CheckCircle2 size={18} /> Especializado en salud ocupacional
              </li>
            </ul>
            <div
              className="hero-actions hero-reveal"
              style={{ animationDelay: "620ms" }}
            >
              <a className="button button-primary" href="#demo">
                <CalendarDays size={18} /> Agenda una demo de 45 minutos
              </a>
              <a className="button button-secondary" href={appUrl}>
                Empieza gratis 15 días <ArrowRight size={18} />
              </a>
            </div>
            <p
              className="microcopy hero-reveal"
              style={{ animationDelay: "720ms" }}
            >
              Sin tarjeta. Sin permanencia. Cancela cuando quieras.
            </p>
            <div
              className="hero-proof hero-reveal"
              style={{ animationDelay: "800ms" }}
              aria-label="Indicadores de confianza"
            >
              Ramazzini ha generado más de 36 mil informes para más de 7 mil
              trabajadores de más de 250 empresas
            </div>
            <QuickLeadForm />
          </div>
        </section>

        <section className="container" aria-label="Confianza">
          <div className="trust">
            <Trust
              icon={<FileText size={20} />}
              value="+36k"
              label="informes generados"
            />
            <Trust
              icon={<HeartPulse size={20} />}
              value="+7k"
              label="trabajadores gestionados"
            />
            <Trust
              icon={<Building2 size={20} />}
              value="+250"
              label="empresas atendidas"
            />
            <Trust
              icon={<ShieldCheck size={20} />}
              value="MX"
              label="hecho en México"
            />
          </div>
        </section>

        <section
          className="social-proof container"
          aria-label="Marcas que trabajan con Ramazzini"
        >
          <div className="social-proof-copy">
            <span className="section-kicker">Prueba social real</span>
            <h2>Marcas que trabajan con Ramazzini</h2>
          </div>
          <div className="logo-cloud">
            {brandLogos.map((brand) => (
              <div className="logo-cloud-item" key={brand.name}>
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  sizes="(max-width: 640px) 44vw, 180px"
                  style={{ transform: `scale(${brand.scale})` }}
                />
              </div>
            ))}
          </div>
        </section>

        <section
          className="aeo-snippet container"
          aria-label="Definición de Ramazzini"
        >
          <h2 className="aeo-question">¿Qué es Ramazzini?</h2>
          <p className="aeo-answer">
            <strong>Ramazzini</strong> es un software de salud ocupacional
            y medicina laboral para médicos, clínicas y servicios médicos de empresa. 
            Permite realizar{" "}
            <a className="guide-inline-link" href="/examen-medico-laboral/">
              exámenes médicos laborales
            </a>
            , organizar expedientes por empresa
            centro de trabajo y trabajador, y generar informes profesionales en PDF.
            Funciona desde cualquier navegador, sin instalación, y centraliza toda
            tu operación en un solo lugar. Pruébalo gratis durante 15 días, sin tarjeta.
          </p>
          <p className="aeo-more">
            <a href="/software-salud-ocupacional/">
              Conoce más sobre el software de salud ocupacional
            </a>
          </p>
        </section>

        <section
          className="aeo-pricing container"
          aria-label="Precios de Ramazzini"
        >
          <h2 className="aeo-question">¿Cuánto cuesta Ramazzini?</h2>
          <table className="aeo-table">
            <thead>
              <tr>
                <th scope="col">Plan</th>
                <th scope="col">Precio mensual</th>
                <th scope="col">Historias clínicas</th>
                <th scope="col">Soporte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Básico</th>
                <td data-label="Precio mensual">$999 MXN</td>
                <td data-label="Historias clínicas">50 al mes</td>
                <td data-label="Soporte">Soporte personalizado por WhatsApp</td>
              </tr>
              <tr>
                <th scope="row">Profesional</th>
                <td data-label="Precio mensual">$2,397 MXN</td>
                <td data-label="Historias clínicas">150 al mes</td>
                <td data-label="Soporte">Soporte personalizado por WhatsApp</td>
              </tr>
              <tr>
                <th scope="row">Empresarial</th>
                <td data-label="Precio mensual">$4,395 MXN</td>
                <td data-label="Historias clínicas">300 al mes</td>
                <td data-label="Soporte">Soporte personalizado por WhatsApp</td>
              </tr>
            </tbody>
          </table>
          <p className="aeo-note">
            Los tres planes incluyen usuarios ilimitados, empresas ilimitadas y
            15 días de prueba gratis.
          </p>
        </section>

        <section
          className="section container product-float-section"
          aria-label="Pantallas del sistema Ramazzini"
        >
          <ScreensShowcase screens={screenCaptures} />
        </section>

        <section className="section container section-with-sigil" id="problema">
          <IsoMark className="section-sigil section-sigil-right" />
          <div className="section-head center">
            <span className="section-kicker">Problema y solución</span>
            <h2>¿Todavía gestionas exámenes médicos laborales en Word, Excel o sistemas poco especializados?</h2>
            <p className="lead">
              Ya sea que trabajes con Word, Excel y carpetas dispersas, o con un
              sistema complicado y poco amigable, Ramazzini te permite gestionar
              tus exámenes médicos laborales con mayor rapidez, orden y
              facilidad.
            </p>
          </div>
          <div className="before-after">
            <ProblemCard
              title="Antes"
              tone="bad"
              items={[
                "Repites datos o utilizas formularios poco amigables.",
                "Los expedientes están dispersos o cuesta navegar entre ellos.",
                "Pierdes tiempo copiando, pegando y dando formato.",
                "Encontrar información exige búsquedas y pasos innecesarios.",
              ]}
            />
            <ProblemCard
              title="Con Ramazzini"
              tone="good"
              items={[
                "Capturas una vez y reutilizas los datos en cada documento.",
                "Cada expediente se organiza por empresa, centro y año.",
                "Sigues un flujo claro y generas informes profesionales.",
                "Encuentras cada expediente y documento desde un solo lugar.",
              ]}
            />
          </div>
        </section>

        <section
          className="section container section-with-sigil"
          id="diferente"
        >
          <IsoMark className="section-sigil section-sigil-left compact" />
          <div className="section-head center">
            <span className="section-kicker">Diferenciador</span>
            <h2>¿Por qué Ramazzini es diferente?</h2>
            <p className="lead">
              Ramazzini no nació como un software clínico o administrativo que
              después se adaptó a la medicina laboral. Fue creado desde la
              práctica de la salud ocupacional, con la participación de
              especialistas que conocen de primera mano los retos de evaluar
              trabajadores, integrar expedientes y entregar resultados a las
              empresas.
            </p>
          </div>
          <div className="difference-grid">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <article className="card difference-card" key={item.title}>
                  <IsoMark className="card-sigil" />
                  <Icon className="icon" size={24} />
                  <h3>{item.title}</h3>
                  <p className="lead">{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="section container section-with-sigil"
          id="como-funciona"
        >
          <IsoMark className="section-sigil section-sigil-left" />
          <div className="section-head center">
            <span className="section-kicker">Flujo de trabajo</span>
            <h2>Cómo funciona Ramazzini para realizar exámenes médicos laborales</h2>
            <p>El proceso se divide en tres pasos: captura la evaluación, organiza automáticamente el expediente y genera los informes listos para entregar.</p>
          </div>
          <div className="steps">
            <Step
              n="1"
              title="Captura sin repetir"
              text="Registra trabajadores y realiza evaluaciones con formularios que reutilizan datos y calculan indicadores clave."
            />
            <Step
              n="2"
              title="Organiza automáticamente"
              text={
                <>
                  Cada documento se integra en{" "}
                  <a
                    className="guide-inline-link"
                    href="/expediente-medico-laboral/"
                  >
                    el expediente correspondiente
                  </a>
                  , organizado por empresa, centro, trabajador y año.
                </>
              }
            />
            <Step
              n="3"
              title="Genera y entrega"
              text="Crea informes PDF con la imagen de tu organización y combínalos en un solo archivo listo para entregar."
            />
          </div>
        </section>

        <section className="section container section-with-sigil" id="producto">
          <IsoMark className="section-sigil section-sigil-right compact" />
          <div className="feature-visual">
            <div className="section-head">
              <span className="section-kicker">Producto real</span>
              <h2>Mira cómo funcionaría Ramazzini en tu operación</h2>
              <p className="lead">
                En una demo personalizada conocemos los exámenes que realizas y
                tu volumen de operación para mostrarte cómo Ramazzini estructura
                y agiliza todo el proceso, desde la evaluación médica hasta la
                entrega de informes.
              </p>
              <a className="button button-primary" href="#demo">
                Quiero verlo en acción <ArrowRight size={18} />
              </a>
            </div>
            <div className="mock-window screenshot-window">
              <div className="mock-window-bar">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <Image
                src="/Centros-Oscura.jpg"
                alt="Detalle de cliente y expedientes en Ramazzini"
                width={1885}
                height={1005}
                priority={false}
                sizes="(max-width: 980px) 100vw, 52vw"
              />
            </div>
          </div>
        </section>

        <section className="section container" id="caracteristicas">
          <div className="section-head center">
            <span className="section-kicker">Funcionalidades</span>
            <h2>
              Todo lo que necesitas para gestionar tu operación de salud
              ocupacional
            </h2>
          </div>
          <div className="bento">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  className={`card ${index < 2 ? "span-3" : "span-2"}`}
                  key={benefit.title}
                >
                  <IsoMark className="card-sigil" />
                  <Icon className="icon" size={26} />
                  <h3>{benefit.title}</h3>
                  <p className="lead">{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="section container section-with-sigil"
          id="seguridad"
        >
          <IsoMark className="section-sigil section-sigil-left compact" />
          <div className="feature-visual">
            <div className="mock-window screenshot-window">
              <div className="mock-window-bar">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <Image
                src="/Dashboard-Claro.jpg"
                alt="Estadísticas de salud ocupacional en Ramazzini"
                width={1875}
                height={912}
                sizes="(max-width: 980px) 100vw, 48vw"
              />
            </div>
            <div>
              <div className="section-head">
                <span className="section-kicker">Cumplimiento y seguridad</span>
                <h2>Protegemos tu información y la de tus trabajadores</h2>
                <p className="lead">
                  Trabajas con datos sensibles y lo tomamos en serio. Ramazzini
                  protege la información mediante conexiones cifradas, controles
                  de acceso, sesiones con expiración automática y procedimientos
                  documentados como parte de su Sistema de Gestión de Seguridad
                  de la Información.
                </p>
              </div>
              <ul className="check-list">
                <li>
                  <LockKeyhole className="icon" size={20} /> Información
                  protegida durante su transmisión mediante HTTPS.
                </li>
                <li>
                  <ShieldCheck className="icon" size={20} /> Accesos controlados
                  por usuario y sesiones con expiración automática.
                </li>
                <li>
                  <ClipboardCheck className="icon" size={20} /> Expedientes
                  completos, organizados y auditables por empresa, centro y año.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section container section-with-sigil" id="casos">
          <IsoMark className="section-sigil section-sigil-right compact" />
          <div className="section-head center">
            <span className="section-kicker">Testimonios</span>
            <h2>Lo que dicen quienes trabajan con Ramazzini todos los días</h2>
            <p className="lead">
              Opiniones reales de profesionales de medicina laboral en México,
              Panamá y Guatemala.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <article
                className="testimonial-card"
                key={`${testimonial.name}-${testimonial.organization}`}
              >
                <div className="testimonial-top">
                  <span className="quote-mark" aria-hidden="true">
                    <Quote size={24} />
                  </span>
                  <span className="testimonial-logo">
                    <Image
                      src={testimonial.logo.src}
                      alt={testimonial.logo.name}
                      width={testimonial.logo.width}
                      height={testimonial.logo.height}
                      sizes="130px"
                      style={{
                        transform: `scale(${testimonial.logo.testimonialScale})`,
                      }}
                    />
                  </span>
                </div>
                <p>{testimonial.quote}</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                  <small>
                    {testimonial.organization} · {testimonial.location}
                  </small>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="precios">
          <div className="section-head center">
            <span className="section-kicker">Planes</span>
            <h2>Planes claros, sin sorpresas</h2>
            <p className="lead">
              Todos incluyen usuarios ilimitados, empresas ilimitadas y 15 días
              de prueba gratis.
            </p>
          </div>
          <div className="pricing">
            <Plan
              name="Básico"
              price="$999"
              text="Para profesionales que quieren digitalizar su operación y dejar atrás el papel"
              features={[
                "50 historias clínicas al mes",
                "Usuarios ilimitados",
                "Empresas ilimitadas",
                "Soporte personalizado WhatsApp",
              ]}
            />
            <Plan
              featured
              name="Profesional"
              price="$2,397"
              text="Para equipos de salud ocupacional que atienden varias empresas."
              features={[
                "150 historias clínicas al mes",
                "Usuarios ilimitados",
                "Empresas ilimitadas",
                "Soporte personalizado WhatsApp",
              ]}
            />
            <Plan
              name="Empresarial"
              price="$4,395"
              text="Para operaciones de alto volumen que necesitan mayor capacidad."
              features={[
                "300 historias clínicas al mes",
                "Usuarios ilimitados",
                "Empresas ilimitadas",
                "Soporte personalizado WhatsApp",
              ]}
            />
          </div>
          <div className="pricing-demo-cta">
            <p>
              ¿Prefieres conocer Ramazzini antes de probarlo? Agenda una demo
              personalizada.
            </p>
            <a className="button button-secondary" href="#demo">
              Agendar demo
            </a>
          </div>
        </section>

        <section className="section container" id="faq">
          <div className="section-head center">
            <span className="section-kicker">Preguntas frecuentes</span>
            <h2>Resolvemos tus dudas</h2>
          </div>
          <div className="faq">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>
                  {question.includes("NOM-024-SSA3-2012") ? (
                    <>
                      Ramazzini estará certificado pronto. La plataforma ya
                      cumple con los requisitos aplicables y actualmente se
                      encuentra en proceso formal de verificación. Una vez
                      obtenida la{" "}
                      <a
                        className="guide-inline-link"
                        href="/certificacion-nom-024-ssa3-2012/"
                      >
                        certificación NOM-024-SSA3-2012
                      </a>
                      , lo anunciaremos a través de esta página y de los medios
                      oficiales de Ramazzini.
                    </>
                  ) : (
                    answer
                  )}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          className="section container"
          id="recursos"
          aria-label="Recursos de salud ocupacional"
        >
          <div className="section-head center">
            <span className="section-kicker">Guías</span>
            <h2>Recursos de salud ocupacional</h2>
            <p className="lead">
              Guías prácticas sobre evaluación, expedientes, aptitud y vigilancia
              de la salud en el trabajo.
            </p>
          </div>
          <ul className="home-resources">
            {occupationalResources.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.title}</a>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section container section-with-sigil" id="demo">
          <IsoMark className="section-sigil section-sigil-right" />
          <div className="demo-grid">
            <div className="demo-close">
              <div className="section-head">
                <span className="section-kicker">Agendamiento</span>
                <h2>
                  Descubre una mejor forma de realizar y documentar tus
                  evaluaciones
                </h2>
                <p className="lead">
                  Agenda una demo de 45 minutos. Conoceremos los exámenes que
                  realizas y tu volumen de operación para mostrarte cómo
                  Ramazzini estructura y agiliza todo el proceso.
                </p>
              </div>
              <ul className="conversion-list">
                <li>
                  <CalendarDays size={18} /> Conocemos los exámenes que realizas
                  y tu volumen mensual.
                </li>
                <li>
                  <FileCheck2 size={18} /> Te mostramos cómo se vería tu informe
                  PDF con identidad propia.
                </li>
                <li>
                  <BarChart3 size={18} /> Identificamos el plan más adecuado
                  para tu volumen y forma de operación.
                </li>
              </ul>
              <div className="demo-proof-card">
                <strong>Objetivo de la demo</strong>
                <span>
                  Que conozcas con claridad cómo Ramazzini puede reducir trabajo
                  administrativo, mejorar la presentación de tus informes y
                  fortalecer el servicio que ofreces a tus clientes u
                  organización.
                </span>
              </div>
            </div>
            <DemoForm />
          </div>
        </section>
      </main>
      <Footer />
      <a
        className="whatsapp"
        aria-label="Enviar WhatsApp a Ramazzini"
        href={`https://wa.me/${whatsapp}?text=${waMessage}`}
      >
        <Image src="/whatsapp-logo.svg" alt="" width={30} height={30} />
      </a>
    </div>
  );
}

function HeroVideo() {
  return (
    <div
      className="hero-video-wrap hero-reveal"
      style={{ animationDelay: "920ms" }}
    >
      <div className="hero-video-card">
        <div className="mock-window-bar" aria-hidden="true">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <div
          className="video-panel hero-video"
          aria-label="Video demostrativo de Ramazzini"
        >
          <iframe
            title="Video demostrativo de Ramazzini"
            src="https://www.youtube-nocookie.com/embed/SN6BFiEI3BU?rel=0&modestbranding=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <a className="video-under-cta" href="#demo-form">
        Descubre cómo agilizar tu operación <ArrowRight size={16} />
      </a>
    </div>
  );
}

function QuickLeadForm() {
  return (
    <form
      className="quick-lead-form hero-reveal"
      style={{ animationDelay: "1080ms" }}
      action="/api/demo"
      method="post"
      aria-label="Agendar demo rápida"
    >
      <div className="quick-lead-copy">
        <strong>Lleva esta eficiencia a tu operación</strong>
        <span>
          Déjanos tus datos y te contactaremos para coordinar una demo
          personalizada.
        </span>
      </div>
      <label htmlFor="quick-name" className="sr-only">
        Nombre
      </label>
      <input
        id="quick-name"
        name="name"
        placeholder="Nombre"
        autoComplete="name"
        maxLength={100}
        required
      />
      <label htmlFor="quick-email" className="sr-only">
        Correo electrónico
      </label>
      <input
        id="quick-email"
        name="email"
        type="email"
        placeholder="Correo"
        autoComplete="email"
        maxLength={254}
        required
      />
      <label htmlFor="quick-phone" className="sr-only">
        WhatsApp
      </label>
      <input
        id="quick-phone"
        name="phone"
        placeholder="WhatsApp"
        autoComplete="tel"
        maxLength={30}
        required
      />
      <input type="hidden" name="source" value="Hero video lead" />
      <input
        className="form-honeypot"
        type="text"
        name="form_confirm"
        tabIndex={-1}
        autoComplete="new-password"
        data-lpignore="true"
        data-1p-ignore="true"
        aria-hidden="true"
      />
      <button className="button button-primary" type="submit">
        Quiero mi demo <ArrowRight size={18} />
      </button>
    </form>
  );
}

function Trust({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="trust-item">
      {icon}
      <span>
        <strong>{value}</strong> {label}
      </span>
    </div>
  );
}

function ProblemCard({
  title,
  tone,
  items,
}: {
  title: string;
  tone: "bad" | "good";
  items: string[];
}) {
  return (
    <article className={`card ${tone === "good" ? "good" : ""}`}>
      <IsoMark className="card-sigil" />
      <h3>{title}</h3>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>
            {tone === "good" ? (
              <CheckCircle2 className="icon" size={20} />
            ) : (
              <Clock3 className="icon" size={20} />
            )}
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Step({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: ReactNode;
}) {
  return (
    <article className="card">
      <IsoMark className="card-sigil" />
      <div className="step-head">
        <span className="step-number">{n}</span>
        <h3>{title}</h3>
      </div>
      <p className="lead">{text}</p>
    </article>
  );
}

function Plan({
  name,
  price,
  text,
  features,
  featured = false,
}: {
  name: string;
  price: string;
  text: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <article className={`card ${featured ? "featured" : ""}`}>
      <IsoMark className="card-sigil" />
      <div className="plan-head">
        <h3>{name}</h3>
        {featured && <span className="pill">Más elegido</span>}
      </div>
      <p className="price">
        {price} <small>MXN / mes</small>
      </p>
      <p className="lead">{text}</p>
      <ul className="check-list">
        {features.map((feature) => (
          <li key={feature}>
            <CheckCircle2 className="icon" size={18} />
            {feature}
          </li>
        ))}
      </ul>
      <a className="button button-primary" href={appUrl}>
        Probar gratis 15 días
      </a>
    </article>
  );
}

function DemoForm() {
  return (
    <form
      className="form-panel"
      id="demo-form"
      action="/api/demo"
      method="post"
    >
      <IsoMark className="form-sigil" />
      <div className="form-head">
        <span className="pill">Paso 1 de 2</span>
        <h3>Cuéntanos sobre tu operación</h3>
        <p>
          Comparte tus datos para preparar una demo acorde con tus necesidades.
          En el siguiente paso podrás elegir la fecha y hora.
        </p>
      </div>
      <div className="form-grid">
        <div className="field full">
          <label htmlFor="name">Nombre completo</label>
          <input
            id="name"
            name="name"
            placeholder="Dr. / Dra. Nombre Apellido"
            autoComplete="name"
            maxLength={100}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tucorreo@clinica.com"
            autoComplete="email"
            maxLength={254}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="phone">WhatsApp</label>
          <input
            id="phone"
            name="phone"
            placeholder="10 dígitos"
            autoComplete="tel"
            maxLength={30}
            required
          />
        </div>
        <div className="field full">
          <label htmlFor="profile">¿Cuál describe mejor tu caso?</label>
          <select id="profile" name="profile" required defaultValue="">
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option>Médico ocupacional independiente</option>
            <option>Servicio médico interno de una empresa</option>
            <option>Proveedor de salud ocupacional con varios clientes</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="volume">
            ¿Cuántos exámenes realizas al mes aproximadamente?
          </label>
          <select id="volume" name="volume" required defaultValue="">
            <option value="" disabled>
              Selecciona un volumen
            </option>
            <option>Menos de 50</option>
            <option>50 a 150</option>
            <option>150 a 300</option>
            <option>Más de 300</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">Algo importante sobre tu operación</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1000}
            placeholder="Cuéntanos si usas formatos propios, cuántas empresas atiendes o qué documento te urge automatizar."
          />
        </div>
        <input type="hidden" name="source" value="Landing Ramazzini" />
        <input
          className="form-honeypot"
          type="text"
          name="form_confirm"
          tabIndex={-1}
          autoComplete="new-password"
          data-lpignore="true"
          data-1p-ignore="true"
          aria-hidden="true"
        />
        <div className="field full">
          <button className="button button-primary" type="submit">
            Continuar para elegir horario <Upload size={18} />
          </button>
          <p className="form-note">
            Usaremos tus datos únicamente para coordinar tu demo. No enviamos
            spam.
          </p>
        </div>
      </div>
    </form>
  );
}

