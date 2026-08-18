import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  ArrowRight,
  Building2,
  CalendarDays,
  ClipboardCheck,
  DatabaseZap,
  FileCheck2,
  FileText,
  FolderSearch,
  HeartPulse,
  History,
  Repeat,
  Search,
  Stethoscope,
  Users,
} from "lucide-react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IsoMark } from "../components/IsoMark";

const pageTitle = "Software de salud ocupacional | Ramazzini";
const pageDescription =
  "Software de salud ocupacional para médicos, clínicas y empresas. Gestiona evaluaciones médicas laborales, expedientes e informes desde una sola plataforma.";
const pagePath = "/software-salud-ocupacional/";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get.ramazzini.app";
const pageUrl = `${siteUrl}${pagePath}`;

const appUrl =
  process.env.NEXT_PUBLIC_APP_URL || "https://ramazzini.app/auth/onboarding";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "526681702850";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: pagePath,
    languages: {
      "es-MX": pagePath,
      es: pagePath,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Ramazzini",
    title: pageTitle,
    description: pageDescription,
    url: pagePath,
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
    title: pageTitle,
    description: pageDescription,
    images: ["/social-preview.jpg"],
  },
};

const audiences = [
  {
    icon: HeartPulse,
    title: "Médicos de salud ocupacional",
    text: "Para quienes realizan evaluaciones todos los días y quieren dedicar menos tiempo a transcribir datos, preparar documentos y buscar antecedentes.",
  },
  {
    icon: Building2,
    title: "Clínicas de salud ocupacional",
    text: "Para equipos que atienden trabajadores de distintas empresas y necesitan mantener organizados clientes, centros de trabajo, expedientes y documentos sin multiplicar carpetas y controles.",
  },
  {
    icon: ClipboardCheck,
    title: "Servicios médicos de empresa",
    text: "Para servicios internos que necesitan conservar el historial de su población trabajadora y consultar fácilmente evaluaciones anteriores durante el seguimiento.",
  },
];

const problems = [
  {
    icon: Repeat,
    title: "Captura repetitiva de información",
    text: "Nombre, edad, puesto, empresa y otros datos terminan capturándose una y otra vez en historias clínicas, certificados, aptitudes y estudios. Además del tiempo, cada nueva transcripción abre otra oportunidad para introducir una inconsistencia.",
  },
  {
    icon: FolderSearch,
    title: "Expedientes dispersos",
    text: "La historia del trabajador puede terminar repartida entre PDFs, carpetas, estudios externos y documentos de distintos años. El problema aparece cuando necesitamos reconstruirla rápidamente.",
  },
  {
    icon: FileText,
    title: "Elaboración manual de informes",
    text: "La evaluación puede haber terminado, pero todavía falta abrir la plantilla, copiar datos, revisar que correspondan al trabajador, guardar el archivo y colocarlo en la carpeta correcta.",
  },
  {
    icon: Building2,
    title: "Dificultad para trabajar con varias empresas",
    text: "Una clínica puede terminar manteniendo estructuras de carpetas, archivos y controles diferentes para cada cliente. Conforme crecen las empresas y centros de trabajo atendidos, conservar una organización consistente requiere cada vez más esfuerzo.",
  },
  {
    icon: Search,
    title: "Información difícil de consultar",
    text: "Tener el documento no siempre significa tener el dato disponible. Si para conocer un antecedente o resultado necesitamos localizar el PDF correcto y abrirlo, buena parte de la información sigue atrapada dentro de archivos aislados.",
  },
];

const features = [
  {
    icon: FolderSearch,
    title: "Expediente médico laboral organizado",
    text: "Cada evaluación, estudio y documento debería terminar relacionado con el trabajador correcto y conservar también su contexto de empresa y centro de trabajo.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluaciones médicas estructuradas",
    text: "Historias clínicas, exploraciones y otras evaluaciones funcionan mejor cuando sus formatos ya responden al tipo de información que se captura en salud ocupacional, en lugar de tener que adaptar una plantilla genérica.",
  },
  {
    icon: History,
    title: "Seguimiento histórico",
    text: "Cuando el trabajador regresa, sus evaluaciones anteriores deberían estar disponibles sin reconstruir el historial entre carpetas. Comparar antecedentes y resultados previos forma parte natural del seguimiento.",
  },
  {
    icon: FileCheck2,
    title: "Generación automática de documentos",
    text: "La información que ya fue capturada durante la evaluación debería poder reutilizarse para generar certificados, aptitudes e informes sin volver a transcribir los mismos datos.",
  },
  {
    icon: Building2,
    title: "Gestión de múltiples empresas",
    text: "Quien atiende varias organizaciones necesita mantener trabajadores, centros de trabajo y expedientes separados sin tener que construir un sistema paralelo de carpetas y controles para cada cliente.",
  },
  {
    icon: Activity,
    title: "Herramientas de apoyo clínico",
    text: "Cálculos, interpretaciones, validaciones y ayudas de captura pueden resolver pequeñas tareas repetitivas durante la evaluación y reducir trabajo que normalmente se hace de forma manual.",
  },
];

const comparisonRows = [
  {
    criterion: "Información estructurada por trabajador",
    wordExcel: "Limitada",
    generic: "Sí",
    specialized: "Sí",
  },
  {
    criterion: "Organización por empresa y centro de trabajo",
    wordExcel: "Manual",
    generic: "Variable",
    specialized: "Diseñada para ello",
  },
  {
    criterion: "Contexto y antecedentes laborales",
    wordExcel: "Manual",
    generic: "Variable",
    specialized: "Integrados al flujo",
  },
  {
    criterion: "Evaluaciones de salud ocupacional",
    wordExcel: "Mediante plantillas",
    generic: "Requiere adaptación",
    specialized: "Integradas",
  },
  {
    criterion: "Reutilización automática de datos",
    wordExcel: "Limitada",
    generic: "Variable",
    specialized: "Sí",
  },
  {
    criterion: "Generación de documentos laborales",
    wordExcel: "Manual",
    generic: "Variable",
    specialized: "Integrada",
  },
  {
    criterion: "Seguimiento histórico del trabajador",
    wordExcel: "Difícil",
    generic: "Sí",
    specialized: "Sí, con contexto ocupacional",
  },
  {
    criterion: "Flujo diseñado para medicina laboral",
    wordExcel: "No",
    generic: "No necesariamente",
    specialized: "Sí",
  },
];

const ramazziniCapabilities = [
  {
    icon: Stethoscope,
    title: "Evaluaciones de salud ocupacional",
    text: "Realiza historias clínicas, exploraciones físicas, audiometrías, exámenes de la vista, antidopings, certificados, aptitudes laborales y notas médicas desde formatos preparados para este tipo de atención.",
  },
  {
    icon: FolderSearch,
    title: "Expedientes centralizados",
    text: "Las evaluaciones, documentos generados y archivos externos permanecen relacionados con el trabajador, su empresa y su centro de trabajo dentro del mismo historial.",
  },
  {
    icon: DatabaseZap,
    title: "Captura inteligente",
    text: "Los datos que ya existen pueden reutilizarse en nuevas evaluaciones y documentos, evitando volver a escribir información del trabajador que el sistema ya conoce.",
  },
  {
    icon: FileCheck2,
    title: "Informes profesionales",
    text: "Al terminar una evaluación, los datos capturados pueden utilizarse para generar documentos PDF con la identidad de la organización sin regresar a una plantilla de Word.",
  },
  {
    icon: Users,
    title: "Múltiples empresas y usuarios",
    text: "Una misma cuenta puede organizar distintas empresas, centros de trabajo y poblaciones de trabajadores, permitiendo que el equipo trabaje sobre una estructura común.",
  },
  {
    icon: History,
    title: "Información para seguimiento",
    text: (
      <>
        Cuando el trabajador regresa, sus antecedentes, evaluaciones y
        documentos anteriores siguen disponibles para dar continuidad a la{" "}
        <a
          className="guide-inline-link"
          href="/vigilancia-de-la-salud-de-los-trabajadores/"
        >
          vigilancia de su salud
        </a>
        .
      </>
    ),
  },
];

const steps = [
  {
    n: "1",
    title: "Realiza la evaluación",
    text: "Selecciona al trabajador y captura directamente la historia clínica, exploración o estudio que corresponda. Los datos que ya existen en el expediente pueden reutilizarse durante el proceso.",
  },
  {
    n: "2",
    title: "El expediente se actualiza",
    text: "La nueva evaluación queda relacionada con el trabajador, su empresa y centro de trabajo, junto con el resto de su historial.",
  },
  {
    n: "3",
    title: "Genera el documento",
    text: "Al terminar, utiliza la información capturada para generar el PDF correspondiente sin volver a transcribir los mismos datos en una plantilla.",
  },
];

const faqs = [
  [
    "¿Cuál es la diferencia entre un software médico y un software de salud ocupacional?",
    "Un software médico general se centra en la atención clínica del paciente. Un sistema de salud ocupacional incorpora además el contexto laboral del trabajador: empresa, centro de trabajo, puesto, antecedentes ocupacionales, evaluaciones periódicas y documentación relacionada con su aptitud y seguimiento.",
  ],
  [
    "¿Puedo utilizar Word o Excel para gestionar exámenes médicos laborales?",
    "Sí. Pueden funcionar bien, especialmente con volúmenes pequeños. Conforme aumentan trabajadores, empresas y evaluaciones, un sistema especializado permite reducir capturas repetidas y mantener la información relacionada sin depender de múltiples archivos y carpetas.",
  ],
  [
    "¿Un software de salud ocupacional sirve para atender varias empresas?",
    "Sí. Esta capacidad es especialmente útil para clínicas y médicos que prestan servicios a distintas organizaciones. Ramazzini permite organizar trabajadores por empresa y centro de trabajo dentro de una misma plataforma.",
  ],
  [
    "¿Qué evaluaciones se pueden realizar en Ramazzini?",
    "Ramazzini permite realizar historias clínicas, exploraciones físicas, audiometrías, exámenes de la vista, antidopings, certificados, aptitudes laborales y notas médicas, además de conservar documentos externos dentro del expediente del trabajador.",
  ],
  [
    "¿Necesito instalar Ramazzini en cada computadora?",
    "No. Ramazzini funciona desde el navegador, por lo que no es necesario instalar el sistema individualmente en cada computadora.",
  ],
  [
    "¿Puedo importar trabajadores que actualmente tengo en Excel?",
    "Sí. Ramazzini permite importar trabajadores desde Excel para aprovechar registros existentes y evitar capturarlos uno por uno.",
  ],
  [
    "¿Puedo personalizar los documentos con la identidad de mi organización?",
    "Sí. Los documentos generados pueden incorporar la identidad de la organización para mantener una presentación consistente al entregar resultados, certificados e informes.",
  ],
  [
    "¿Puedo probar Ramazzini antes de contratarlo?",
    "Sí. Puedes probar Ramazzini durante 15 días sin proporcionar una tarjeta bancaria.",
  ],
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Ramazzini",
      url: siteUrl,
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
      operatingSystem: "Web",
      url: siteUrl,
      description:
        "Software web de salud ocupacional para médicos, clínicas y servicios médicos de empresa. Permite realizar evaluaciones médicas laborales, organizar expedientes por empresa, centro de trabajo y trabajador, y generar informes profesionales.",
      inLanguage: "es-MX",
      publisher: { "@id": `${siteUrl}#organization` },
      featureList: [
        "Evaluaciones de salud ocupacional",
        "Expedientes centralizados por empresa, centro de trabajo y trabajador",
        "Captura inteligente con reutilización de datos",
        "Informes profesionales en PDF",
        "Gestión de múltiples empresas y usuarios",
        "Seguimiento histórico del trabajador",
        "Importación de trabajadores desde Excel",
        "Uso desde el navegador, sin instalación",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "es-MX",
      isPartOf: { "@id": `${siteUrl}#website` },
      about: { "@id": `${siteUrl}#software` },
      publisher: { "@id": `${siteUrl}#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function SoftwareSaludOcupacionalPage() {
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
            .replaceAll("&", "\\u0026"),
        }}
      />
      <Header logoHref="/" homeHref="/" showTrialCta />
      <main>
        <section className="hero">
          <div className="container hero-single">
            <span className="eyebrow">
              <HeartPulse size={16} /> Software especializado en salud
              ocupacional
            </span>
            <h1>
              Software de salud ocupacional para gestionar evaluaciones médicas
              y expedientes laborales
            </h1>
            <p className="hero-copy">
              Realiza evaluaciones médicas, mantén organizados los expedientes
              de tus trabajadores y genera documentos profesionales sin
              depender de Word, Excel y carpetas dispersas.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/#demo">
                <CalendarDays size={18} /> Agenda una demo
              </a>
              <a className="button button-secondary" href={appUrl}>
                Prueba gratis 15 días <ArrowRight size={18} />
              </a>
            </div>
            <div className="seo-hero-visual">
              <div className="mock-window screenshot-window">
                <div className="mock-window-bar" aria-hidden="true">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <Image
                  src="/capturas/Inicio-Oscuro.jpg"
                  alt="Inicio del sistema Ramazzini para salud ocupacional"
                  width={1885}
                  height={1005}
                  sizes="(max-width: 980px) 100vw, 720px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="definicion">
          <div className="aeo-snippet">
            <h2 className="aeo-question">
              ¿Qué es un software de salud ocupacional?
            </h2>
            <div className="stack">
              <p className="aeo-answer">
                Cuando las evaluaciones se hacen en Word, los trabajadores se
                controlan en Excel y los estudios terminan distribuidos entre
                carpetas, buena parte del trabajo consiste simplemente en
                mantener todo relacionado.
              </p>
              <p className="aeo-answer">
                Un software desarrollado específicamente para salud ocupacional
                lleva esa misma lógica al sistema: trabajador, empresa, centro
                de trabajo, puesto, evaluaciones, estudios y documentos
                permanecen conectados dentro del mismo expediente.
              </p>
              <p className="aeo-answer">
                La diferencia no está solamente en sustituir papel por
                pantallas, sino en reducir el trabajo que existe alrededor de
                la evaluación: volver a capturar datos, buscar antecedentes,
                preparar documentos y mantener organizado el historial.
              </p>
            </div>
          </div>
        </section>

        <section className="section container" id="para-quien">
          <div className="section-head center">
            <span className="section-kicker">Audiencias</span>
            <h2>¿Para quién es un software de salud ocupacional?</h2>
          </div>
          <div className="difference-grid">
            {audiences.map((item) => {
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

        <section className="section container" id="problemas">
          <div className="section-head center">
            <span className="section-kicker">Operación fragmentada</span>
            <h2>¿Qué problemas resuelve un software de salud ocupacional?</h2>
            <p className="lead">
              Word y Excel pueden funcionar sorprendentemente bien durante
              mucho tiempo. El problema aparece cuando cada nueva evaluación
              agrega otro documento que nombrar, guardar, localizar y volver a
              relacionar con el trabajador correcto. Conforme aumenta el
              volumen, una parte cada vez mayor del trabajo termina ocurriendo
              alrededor de la evaluación y no durante la evaluación misma.
            </p>
          </div>
          <div className="difference-grid">
            {problems.map((item) => {
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

        <section className="section container" id="funcionalidades">
          <div className="section-head center">
            <span className="section-kicker">Capacidades</span>
            <h2>¿Qué debe tener un software de salud ocupacional?</h2>
            <p className="lead">
              La prueba de un buen sistema no es solamente cuántas funciones
              tiene, sino cuánto trabajo deja de hacerse fuera de él.
            </p>
            <p className="lead">
              Si después de capturar una evaluación todavía necesitamos Excel
              para controlar trabajadores, Word para preparar documentos y
              carpetas para reconstruir el expediente, una parte importante del
              proceso sigue siendo manual.
            </p>
          </div>
          <div className="difference-grid">
            {features.map((item) => {
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

        <section className="section container" id="comparativa">
          <div className="section-head center">
            <span className="section-kicker">Comparativa</span>
            <h2>Software especializado vs. herramientas genéricas</h2>
            <p className="lead">
              No todas las herramientas utilizadas para gestionar información
              médica fueron diseñadas para salud ocupacional. La diferencia se
              vuelve más evidente conforme aumenta el volumen de trabajadores y
              evaluaciones.
            </p>
          </div>
          <div className="aeo-pricing">
            <table className="aeo-table">
              <thead>
                <tr>
                  <th scope="col">Criterio</th>
                  <th scope="col">Word y Excel</th>
                  <th scope="col">Software médico genérico</th>
                  <th scope="col">
                    Software especializado en salud ocupacional
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.criterion}>
                    <th scope="row">{row.criterion}</th>
                    <td data-label="Word y Excel">{row.wordExcel}</td>
                    <td data-label="Software médico genérico">{row.generic}</td>
                    <td data-label="Software especializado en salud ocupacional">
                      {row.specialized}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="aeo-note">
              Word y Excel pueden seguir siendo muy útiles para tareas
              específicas, y un expediente clínico general puede resolver
              correctamente las necesidades de atención médica convencional. La
              diferencia aparece en el flujo de trabajo: un sistema
              especializado ya parte de trabajadores, empresas, centros de
              trabajo, evaluaciones y documentos laborales, en lugar de
              obligar al usuario a adaptar una herramienta diseñada para otro
              propósito.
            </p>
          </div>
        </section>

        <section
          className="section container section-with-sigil"
          id="como-ayuda"
        >
          <IsoMark className="section-sigil section-sigil-right" />
          <div className="feature-visual">
            <div className="section-head">
              <span className="section-kicker">Ramazzini</span>
              <h2>
                Ramazzini: software desarrollado específicamente para salud
                ocupacional
              </h2>
              <p className="lead">
                Ramazzini nació precisamente de este flujo de trabajo. Fue
                desarrollado con la participación directa de profesionales de
                salud ocupacional, y sus expedientes, evaluaciones y documentos
                parten de la forma en que se realizan las{" "}
                <a
                  className="guide-inline-link"
                  href="/examen-medico-laboral/"
                >
                  evaluaciones médicas laborales
                </a>
                .
              </p>
              <p className="lead">
                El trabajador se registra una vez. A partir de ahí, su
                información puede reutilizarse en historias clínicas,
                exploraciones, aptitudes, certificados y otras evaluaciones
                sin reconstruir cada documento desde cero.
              </p>
              <a className="button button-primary" href="/#demo">
                Conoce Ramazzini en una demo <ArrowRight size={18} />
              </a>
            </div>
            <div className="mock-window screenshot-window">
              <div className="mock-window-bar" aria-hidden="true">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <Image
                src="/Centros-Oscura.jpg"
                alt="Expedientes y centros de trabajo en Ramazzini"
                width={1885}
                height={1005}
                sizes="(max-width: 980px) 100vw, 52vw"
              />
            </div>
          </div>
          <div className="difference-grid seo-follow-grid">
            {ramazziniCapabilities.map((item) => {
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
          id="como-funciona-seo"
        >
          <IsoMark className="section-sigil section-sigil-left" />
          <div className="section-head center">
            <span className="section-kicker">Flujo de trabajo</span>
            <h2>¿Cómo funciona Ramazzini?</h2>
            <p className="lead">
              El flujo busca que la información se capture durante la
              evaluación y continúe siendo útil después, tanto para el
              expediente como para los documentos que se generan.
            </p>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article className="card" key={step.n}>
                <IsoMark className="card-sigil" />
                <div className="step-head">
                  <span className="step-number">{step.n}</span>
                  <h3>{step.title}</h3>
                </div>
                <p className="lead">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="faq">
          <div className="section-head center">
            <span className="section-kicker">Dudas frecuentes</span>
            <h2>Preguntas frecuentes sobre software de salud ocupacional</h2>
          </div>
          <div className="faq">
            {faqs.map(([question, answer], index) => {
              const answerId = `faq-answer-${index + 1}`;
              return (
                <details key={question}>
                  <summary>{question}</summary>
                  <p id={answerId}>{answer}</p>
                </details>
              );
            })}
          </div>
        </section>

        <section className="section container seo-cta" id="cta-final">
          <div className="section-head center">
            <span className="section-kicker">Siguiente paso</span>
            <h2>Digitaliza tu operación de salud ocupacional</h2>
            <p className="lead">
              Realiza evaluaciones, conserva el historial de tus trabajadores y
              genera documentos desde una plataforma desarrollada alrededor del
              trabajo diario de salud ocupacional.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href={appUrl}>
              Prueba Ramazzini gratis 15 días <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="/#demo">
              <CalendarDays size={18} /> Agenda una demo
            </a>
          </div>
        </section>
      </main>
      <Footer homeHref="/" />
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
