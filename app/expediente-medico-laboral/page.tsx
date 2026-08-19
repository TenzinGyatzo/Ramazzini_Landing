import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IsoMark } from "../components/IsoMark";
import { TrackedCta } from "../components/TrackedCta";

const pageTitle = "Expediente médico laboral: qué es y cómo organizarlo | Ramazzini";
const pageDescription =
  "Conoce qué es un expediente médico laboral, qué información y documentos contiene, cómo organizarlo y qué considerar para su gestión digital.";
const pagePath = "/expediente-medico-laboral/";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get.ramazzini.app";
const pageUrl = `${siteUrl}${pagePath}`;
const pageHeading =
  "Expediente médico laboral: qué es, qué contiene y cómo organizarlo";

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
    type: "article",
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

const toc = [
  { href: "#que-es", label: "Qué es" },
  { href: "#diferencias", label: "Diferencias" },
  { href: "#contenido", label: "Información que integra" },
  { href: "#documentos", label: "Documentos" },
  { href: "#organizacion", label: "Cómo organizarlo" },
  { href: "#fisico-digital", label: "Físico vs. digital" },
  { href: "#seguridad", label: "Confidencialidad" },
  { href: "#mexico", label: "México" },
  { href: "#errores", label: "Errores frecuentes" },
  { href: "#digitalizacion", label: "Digitalización" },
  { href: "#ramazzini", label: "Ramazzini" },
  { href: "#preguntas-frecuentes", label: "Preguntas frecuentes" },
];

const contentCategories = [
  {
    title: "Identificación del trabajador",
    text: "Es el punto de partida para que historias clínicas, estudios y documentos generados en momentos distintos terminen siempre en el expediente correcto.",
  },
  {
    title: "Empresa y centro de trabajo",
    text: "Especialmente cuando se atienden varias organizaciones o plantas, este contexto permite saber dónde se encontraba el trabajador cuando se realizó cada evaluación.",
  },
  {
    title: "Puesto y antecedentes laborales",
    text: "El puesto actual y la trayectoria ocupacional ayudan a interpretar exposiciones, exigencias y cambios relevantes a lo largo de la vida laboral.",
  },
  {
    title: "Antecedentes médicos",
    text: "Los antecedentes clínicos relevantes permanecen disponibles para no reconstruir desde cero la historia del trabajador en cada nueva evaluación.",
  },
  {
    title: "Exploraciones y evaluaciones",
    text: "Las historias clínicas, exploraciones físicas y demás valoraciones van formando una secuencia que permite revisar qué se evaluó y qué se encontró en cada momento.",
  },
  {
    title: "Estudios complementarios",
    text: "Laboratorio, gabinete y otras pruebas cobran más valor cuando pueden consultarse junto con la evaluación y el contexto que motivaron su realización.",
  },
  {
    title: "Aptitud laboral",
    text: "Las conclusiones de aptitud, restricciones o recomendaciones deberían poder relacionarse con la evaluación médica de la que surgieron.",
  },
  {
    title: "Documentos externos",
    text: "No todo se genera dentro del mismo sistema. Estudios, interpretaciones y documentos recibidos de laboratorios o proveedores externos también pueden formar parte del historial del trabajador.",
  },
];

const documents = [
  "Historia clínica ocupacional",
  "Exploración física",
  "Examen médico de ingreso",
  "Exámenes médicos periódicos",
  "Evaluaciones por cambio de puesto",
  "Evaluaciones de reincorporación",
  "Audiometría",
  "Espirometría",
  "Examen de la vista",
  "Electrocardiograma",
  "Estudios de laboratorio",
  "Estudios de imagen",
  "Evaluaciones toxicológicas",
  "Certificados médicos",
  {
    label: "Dictámenes o constancias de aptitud laboral",
    href: "/aptitud-medica-laboral/",
  },
  "Notas médicas",
  "Interconsultas e interpretaciones",
  "Documentos clínicos externos",
];

const organizationPrinciples = [
  {
    title: "Un expediente por trabajador",
    text: "El trabajador debería ser el punto estable alrededor del cual se organiza todo lo demás. Esto reduce el riesgo de que variaciones en nombres, registros antiguos o nuevas evaluaciones terminen creando expedientes duplicados.",
  },
  {
    title: "Relacionarlo con su contexto laboral",
    text: "Empresa, centro de trabajo y puesto ayudan a entender en qué condiciones se realizó cada evaluación, especialmente cuando la persona cambia de área, función u organización.",
  },
  {
    title: "Mantener continuidad histórica",
    text: "Una evaluación nueva no debería borrar la anterior. Poder regresar a resultados previos permite comparar, identificar cambios y entender mejor la evolución del trabajador.",
  },
  {
    title: "Ordenar evaluaciones y documentos cronológicamente",
    text: "La fecha convierte documentos aislados en una secuencia. Cuando el historial está ordenado, es mucho más sencillo reconstruir qué ocurrió antes y después de cada evaluación.",
  },
  {
    title: "Diferenciar tipos de documentos",
    text: "Una audiometría, una historia clínica y un certificado de aptitud deberían reconocerse como tales sin tener que abrir archivo por archivo para descubrir qué contiene cada uno.",
  },
  {
    title: "Facilitar la recuperación de información",
    text: "Si encontrar una evaluación depende de recordar en qué carpeta se guardó o de preguntarle a la persona que conoce el archivo, la organización sigue dependiendo demasiado de procesos manuales.",
  },
];

const comparisonRows = [
  {
    criterion: "Búsqueda de trabajadores",
    physical: "Manual",
    scattered: "Depende de carpetas y nombres",
    structured: "Mediante datos estructurados",
  },
  {
    criterion: "Acceso al historial",
    physical: "Revisión física",
    scattered: "Revisión de múltiples archivos",
    structured: "Centralizado por trabajador",
  },
  {
    criterion: "Relación con empresa y puesto",
    physical: "Documental",
    scattered: "Depende de la organización manual",
    structured: "Estructurada",
  },
  {
    criterion: "Reutilización de información",
    physical: "No",
    scattered: "Limitada",
    structured: "Sí",
  },
  {
    criterion: "Comparación entre evaluaciones",
    physical: "Manual",
    scattered: "Manual",
    structured: "Facilitada por el sistema",
  },
  {
    criterion: "Generación de nuevos documentos",
    physical: "Manual",
    scattered: "Basada en plantillas",
    structured: "Puede automatizarse",
  },
  {
    criterion: "Acceso simultáneo autorizado",
    physical: "Limitado",
    scattered: "Variable",
    structured: "Posible según permisos",
  },
  {
    criterion: "Respaldo",
    physical: "Requiere copias físicas",
    scattered: "Depende del almacenamiento",
    structured: "Puede gestionarse sistemáticamente",
  },
];

const securityTopics = [
  {
    title: "Acceso controlado",
    text: "El personal médico, enfermería y otros usuarios pueden necesitar niveles de acceso diferentes según sus funciones. Lo importante es que consultar un expediente no convierta automáticamente toda la información clínica en información de acceso general.",
  },
  {
    title: "Confidencialidad",
    text: "La empresa puede necesitar conocer una conclusión de aptitud o determinadas restricciones sin que eso implique recibir antecedentes, diagnósticos o estudios que no son necesarios para gestionar el trabajo.",
  },
  {
    title: "Integridad de la información",
    text: "Una evaluación ya documentada debe conservarse de forma confiable. Cambios, pérdidas o eliminaciones pueden afectar la continuidad del expediente y dificultar saber qué información estaba disponible en un momento determinado.",
  },
  {
    title: "Trazabilidad",
    text: "En un sistema digital resulta útil poder identificar quién creó, modificó o gestionó determinada información, especialmente cuando varias personas participan en la atención.",
  },
  {
    title: "Respaldo y disponibilidad",
    text: "Historias clínicas, estudios y documentos externos pueden ser difíciles o imposibles de reconstruir después. Los respaldos deben formar parte de la operación normal, no depender de copias ocasionales.",
  },
];

const mexicoBlocks = [
  {
    id: "nom-004",
    title: "NOM-004-SSA3-2012 — Del expediente clínico",
    text: "Establece criterios para la elaboración, integración, uso, manejo, archivo, conservación y confidencialidad del expediente clínico en los establecimientos y prestadores de servicios de atención médica comprendidos en su campo de aplicación. Entre otros aspectos, establece un periodo mínimo de conservación del expediente clínico de cinco años contados a partir de la fecha del último acto médico.",
  },
  {
    id: "nom-030",
    title: "NOM-030-STPS-2009 — Servicios preventivos de seguridad y salud en el trabajo",
    text: "Establece funciones y actividades de los servicios preventivos de seguridad y salud en el trabajo. Dentro de este marco se contempla el seguimiento a la salud de los trabajadores, y su Guía de Referencia II incluye recomendaciones relacionadas con acciones de salud y exámenes médicos.",
  },
  {
    id: "nom-024",
    title: (
      <>
        <a
          className="guide-inline-link"
          href="/certificacion-nom-024-ssa3-2012/"
        >
          NOM-024-SSA3-2012
        </a>
        {" — Sistemas de información de registro electrónico para la salud"}
      </>
    ),
    text: "Establece requisitos para los sistemas de información de registro electrónico para la salud y el intercambio de información en salud dentro de su ámbito de aplicación.",
  },
];

const frequentErrors = [
  {
    title: "Guardar todo como archivos aislados",
    text: "Tener los documentos en PDF evita el papel, pero si todo depende de nombres de archivo y carpetas, encontrar una evaluación específica puede seguir tomando casi el mismo trabajo que antes.",
  },
  {
    title: "Crear expedientes duplicados",
    text: "Un segundo apellido omitido, una variación en el nombre o un registro creado años después puede terminar separando la historia de una misma persona en dos expedientes distintos.",
  },
  {
    title: "Sobrescribir evaluaciones anteriores",
    text: "El último resultado no sustituye el valor de los anteriores. Sin historial se pierde la posibilidad de comparar y entender cómo ha cambiado el trabajador con el tiempo.",
  },
  {
    title: "Mezclar información de distintas empresas",
    text: "Cuando una clínica atiende varias organizaciones, perder la relación entre trabajador, empresa y centro de trabajo puede generar errores de contexto y complicar la recuperación de información.",
  },
  {
    title: "Depender de la memoria del personal",
    text: "Si encontrar un expediente requiere preguntarle a la persona que “sabe dónde están las carpetas”, el sistema de organización depende demasiado del conocimiento individual.",
  },
  {
    title: "Digitalizar sin estructurar",
    text: "Escanear reduce papel, pero el problema reaparece si seguimos necesitando abrir archivos uno por uno para saber a quién pertenecen, qué contienen o con qué evaluación se relacionan.",
  },
];

const ramazziniCapabilities = [
  {
    title: "Expediente por trabajador",
    text: "Las evaluaciones y documentos de una misma persona permanecen reunidos para consultar su historial sin reconstruirlo manualmente.",
  },
  {
    title: "Organización por empresa y centro de trabajo",
    text: "Los trabajadores se mantienen relacionados con la organización y centro correspondientes, algo especialmente útil cuando se atienden varias empresas o ubicaciones.",
  },
  {
    title: "Historial de evaluaciones",
    text: "Las valoraciones anteriores siguen disponibles para revisar antecedentes, comparar información y mantener continuidad entre evaluaciones.",
  },
  {
    title: "Evaluaciones estructuradas",
    text: "Historias clínicas, exploraciones físicas, audiometrías, exámenes de la vista y otras evaluaciones se capturan directamente en formatos diseñados para salud ocupacional.",
  },
  {
    title: "Documentos internos y externos",
    text: "El expediente reúne tanto documentos generados en Ramazzini como estudios, interpretaciones y archivos recibidos de proveedores externos.",
  },
  {
    title: "Generación de informes",
    text: "Los datos ya capturados pueden reutilizarse al generar documentos en PDF, evitando volver a transcribir información que ya existe en el expediente.",
  },
];

const faqs = [
  [
    "¿Qué es un expediente médico laboral?",
    "Es el historial organizado de información clínica y ocupacional de un trabajador. Puede reunir antecedentes, evaluaciones, estudios, documentos de aptitud y otros registros generados durante su seguimiento.",
  ],
  [
    "¿Es lo mismo un expediente médico laboral que una historia clínica ocupacional?",
    "No. La historia clínica ocupacional puede formar parte del expediente, pero el expediente reúne además otras evaluaciones, estudios, notas, certificados y documentos generados a lo largo del tiempo.",
  ],
  [
    "¿Qué documentos debe contener un expediente médico laboral?",
    "No existe una lista única para todos los trabajadores. El contenido depende del puesto, los riesgos, el tipo de evaluación, el programa de vigilancia y las disposiciones que resulten aplicables.",
  ],
  [
    "¿Cuánto tiempo debe conservarse un expediente médico?",
    "En los casos comprendidos por la NOM-004-SSA3-2012, el expediente clínico debe conservarse por un periodo mínimo de cinco años contado desde la fecha del último acto médico. Otros requisitos pueden establecer periodos diferentes según el tipo de registro o riesgo involucrado.",
  ],
  [
    "¿Puede un expediente médico laboral ser digital?",
    "Sí. Puede gestionarse digitalmente siempre que la solución utilizada permita conservar y manejar la información conforme a los requisitos que resulten aplicables al servicio y a la organización.",
  ],
  [
    "¿Escanear documentos significa tener un expediente médico digital?",
    "No necesariamente. Escanear convierte documentos en archivos digitales; estructurar el expediente permite además relacionar datos, evaluaciones y documentos con el trabajador y su contexto laboral.",
  ],
  [
    "¿Quién puede consultar un expediente médico laboral?",
    "El acceso a la información clínica debe limitarse a las personas autorizadas de acuerdo con sus funciones y con las disposiciones aplicables de confidencialidad y protección de datos.",
  ],
  [
    "¿Cómo ayuda un software a organizar expedientes médicos laborales?",
    "Permite mantener relacionados al trabajador, su empresa, centro de trabajo, evaluaciones y documentos; conservar el historial y recuperar información sin depender exclusivamente de carpetas y archivos aislados.",
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
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageHeading,
      description: pageDescription,
      inLanguage: "es-MX",
      isPartOf: { "@id": `${siteUrl}#website` },
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

export default function ExpedienteMedicoLaboralPage() {
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
        <article className="guide">
          <header className="guide-hero">
            <div className="container guide-hero-inner">
              <span className="eyebrow">
                <BookOpen size={16} /> Guía de salud ocupacional
              </span>
              <h1>
                Expediente médico laboral: qué es, qué contiene y cómo
                organizarlo
              </h1>
              <div className="stack guide-prose">
                <p className="lead">
                  Un expediente empieza a ser realmente útil cuando deja de ser
                  sólo el lugar donde guardamos estudios y documentos, y permite
                  reconstruir con facilidad qué se le ha hecho al trabajador,
                  qué se encontró y cómo ha evolucionado.
                </p>
                <p className="lead">
                  Para lograrlo, la información clínica necesita conservar
                  también su contexto: a quién pertenece, cuándo se obtuvo, en
                  qué empresa y puesto trabajaba la persona y qué evaluación
                  dio origen a cada resultado o documento.
                </p>
              </div>
            </div>
          </header>

          <nav className="container guide-toc" aria-label="Índice de la guía">
            <p className="section-kicker">Contenido de esta guía</p>
            <ol>
              {toc.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section className="guide-section container" id="que-es">
            <div className="section-head">
              <span className="section-kicker">Definición</span>
              <h2>¿Qué es un expediente médico laboral?</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                En la práctica, el expediente médico laboral es el historial
                que se va construyendo alrededor de cada trabajador. Ahí
                convergen sus antecedentes, evaluaciones médicas,
                exploraciones, estudios, documentos de aptitud y demás
                información generada durante su seguimiento.
              </p>
              <p className="lead">
                Lo importante es que esa información no quede como una
                colección de documentos independientes. Cuando cada evaluación
                conserva su fecha, contexto laboral y relación con el
                trabajador, el expediente permite revisar antecedentes,
                comparar resultados y entender mejor lo que ha ocurrido a lo
                largo del tiempo.
              </p>
              <aside className="guide-callout">
                <p>
                  Un buen expediente no sólo conserva información: permite
                  reconstruir la historia médica laboral del trabajador cuando
                  vuelve a ser necesaria.
                </p>
              </aside>
            </div>
          </section>

          <section className="guide-section container" id="diferencias">
            <div className="section-head">
              <span className="section-kicker">Alcance</span>
              <h2>
                Expediente clínico y expediente médico laboral: ¿cuál es la
                diferencia?
              </h2>
              <p className="lead">
                En salud ocupacional no basta con saber qué antecedentes,
                diagnósticos o estudios tiene una persona. También necesitamos
                saber dónde trabaja, qué hace, a qué puede estar expuesta y qué
                evaluaciones se le han realizado en relación con ese trabajo.
              </p>
            </div>
            <div className="before-after">
              <article className="card">
                <h3>Expediente clínico</h3>
                <p className="lead">
                  Documenta la atención médica del paciente: antecedentes,
                  padecimientos, exploración, diagnósticos, tratamientos,
                  evolución y demás información clínica generada durante su
                  atención.
                </p>
              </article>
              <article className="card good">
                <h3>Expediente médico laboral</h3>
                <p className="lead">
                  Conserva esa información clínica dentro de un contexto
                  ocupacional: empresa, centro de trabajo, puesto, antecedentes
                  laborales, exposiciones y evaluaciones realizadas durante la
                  vida laboral.
                </p>
              </article>
            </div>
            <p className="lead guide-follow-copy">
              Esa diferencia se vuelve especialmente importante cuando el
              trabajador regresa meses o años después. No sólo interesa saber
              qué se encontró anteriormente, sino en qué contexto se encontró y
              cómo se relacionaba con el trabajo que realizaba en ese momento.
            </p>
          </section>

          <section className="guide-section container" id="contenido">
            <div className="section-head">
              <span className="section-kicker">Estructura</span>
              <h2>¿Qué información integra un expediente médico laboral?</h2>
              <p className="lead">
                No todos los expedientes terminan teniendo el mismo contenido.
                Un trabajador administrativo, un operador expuesto a ruido o un
                conductor pueden requerir evaluaciones muy distintas. Aun así,
                hay grupos de información que conviene mantener relacionados
                para que el expediente conserve sentido con el paso del tiempo.
              </p>
            </div>
            <ul className="guide-categories">
              {contentCategories.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="guide-section container" id="documentos">
            <div className="section-head">
              <span className="section-kicker">Soporte documental</span>
              <h2>¿Qué documentos puede contener?</h2>
              <p className="lead">
                En un mismo expediente pueden terminar conviviendo documentos
                muy distintos. Cuáles aparecen dependerá del puesto, los
                riesgos, el tipo de evaluación y el{" "}
                <a
                  className="guide-inline-link"
                  href="/vigilancia-de-la-salud-de-los-trabajadores/"
                >
                  programa de vigilancia
                </a>{" "}
                que corresponda.
              </p>
            </div>
            <ul className="guide-documents">
              {documents.map((item) => {
                if (typeof item === "string") {
                  return <li key={item}>{item}</li>;
                }

                return (
                  <li key={item.label}>
                    <a className="guide-inline-link" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="lead guide-follow-copy">
              La lista no debería entenderse como una batería estándar. No todos
              los trabajadores necesitan los mismos estudios: cada evaluación
              debe responder al contexto clínico y ocupacional, a los riesgos
              presentes y a los criterios aplicables.
            </p>
          </section>

          <section className="guide-section container" id="organizacion">
            <div className="section-head">
              <span className="section-kicker">Principios</span>
              <h2>¿Cómo organizar un expediente médico laboral?</h2>
              <p className="lead">
                La organización se pone a prueba cuando necesitamos encontrar
                algo: una audiometría anterior, el último examen periódico, una
                restricción que ya existía o la evaluación realizada cuando el
                trabajador estaba en otro puesto. Una estructura consistente
                evita tener que reconstruir esa historia manualmente.
              </p>
            </div>
            <ol className="guide-principles">
              {organizationPrinciples.map((item, index) => (
                <li key={item.title}>
                  <span className="step-number">{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="lead">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="guide-section container" id="fisico-digital">
            <div className="section-head">
              <span className="section-kicker">Formatos</span>
              <h2>
                Expediente físico, archivos digitales o expediente digital
                estructurado
              </h2>
              <p className="lead">
                Pasar del papel a la computadora resuelve parte del problema,
                pero no necesariamente cambia la forma en que encontramos y
                utilizamos la información.
              </p>
            </div>
            <div className="aeo-pricing">
              <table className="aeo-table">
                <thead>
                  <tr>
                    <th scope="col">Característica</th>
                    <th scope="col">Expediente físico</th>
                    <th scope="col">Archivos digitales dispersos</th>
                    <th scope="col">Expediente digital estructurado</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.criterion}>
                      <th scope="row">{row.criterion}</th>
                      <td data-label="Expediente físico">{row.physical}</td>
                      <td data-label="Archivos digitales dispersos">
                        {row.scattered}
                      </td>
                      <td data-label="Expediente digital estructurado">
                        {row.structured}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="stack guide-prose guide-follow-copy">
              <p className="lead">
                Una carpeta llena de PDFs puede ahorrar espacio físico y
                facilitar copias de respaldo, pero sigue obligando a buscar
                información mediante nombres de archivo, carpetas y revisión
                manual de documentos.
              </p>
              <p className="lead">
                El cambio importante ocurre cuando los datos y documentos
                quedan relacionados con el trabajador, su empresa, puesto y
                evaluaciones. Entonces el expediente deja de ser solamente
                almacenamiento digital y empieza a funcionar como un historial
                consultable.
              </p>
            </div>
          </section>

          <section className="guide-section container" id="seguridad">
            <div className="section-head">
              <span className="section-kicker">Resguardo</span>
              <h2>Confidencialidad, acceso y seguridad</h2>
              <p className="lead">
                En salud ocupacional es frecuente que distintas personas
                necesiten trabajar con información del mismo trabajador, pero
                eso no significa que todas deban ver o modificar todo el
                expediente. La forma de organizar los accesos es parte del
                manejo de la información clínica.
              </p>
            </div>
            <ul className="guide-topics">
              {securityTopics.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="lead">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="guide-section container" id="mexico">
            <div className="guide-context">
              <div className="section-head">
                <span className="section-kicker">Contexto local</span>
                <h2>Expediente médico laboral en México</h2>
                <p className="lead">
                  En México no hay una sola norma que describa, de principio a
                  fin, cómo debe integrarse cualquier expediente médico laboral.
                  En la práctica intervienen disposiciones sanitarias, de
                  seguridad y salud en el trabajo y, según el caso, normas
                  relacionadas con riesgos o actividades específicas.
                </p>
                <p className="lead">
                  Por eso, los requisitos deben revisarse según el tipo de
                  servicio médico, el centro de trabajo, las evaluaciones
                  realizadas y los riesgos a los que está expuesta la población
                  atendida.
                </p>
              </div>
              <div className="stack">
                {mexicoBlocks.map((item) => (
                  <article key={item.id}>
                    <h3>{item.title}</h3>
                    <p className="lead">{item.text}</p>
                  </article>
                ))}
              </div>
              <p className="lead">
                Además de estas disposiciones, pueden existir normas específicas
                relacionadas con determinados agentes, riesgos o actividades que
                establezcan requerimientos adicionales de vigilancia de la
                salud.
              </p>
              <p className="guide-disclaimer">
                Los requisitos concretos pueden cambiar según la actividad, los
                riesgos, el tipo de servicio y el marco aplicable a cada
                organización. Esta guía resume criterios generales y no
                sustituye la revisión médica, jurídica o regulatoria de cada
                caso.
              </p>
            </div>
          </section>

          <section className="guide-section container" id="errores">
            <div className="section-head">
              <span className="section-kicker">Práctica habitual</span>
              <h2>
                Errores frecuentes al gestionar expedientes médicos laborales
              </h2>
            </div>
            <ol className="guide-errors">
              {frequentErrors.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="lead">{item.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="guide-section container" id="digitalizacion">
            <div className="section-head">
              <span className="section-kicker">Transición</span>
              <h2>¿Qué implica digitalizar un expediente médico laboral?</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                Digitalizar bien un expediente implica algo más que cambiar
                hojas por archivos PDF. La diferencia aparece cuando la
                información que usamos una y otra vez deja de quedar atrapada
                dentro de cada documento.
              </p>
              <p className="lead">
                Datos como el nombre del trabajador, fecha de nacimiento,
                empresa o centro de trabajo pueden registrarse una vez y
                mantenerse relacionados con las evaluaciones posteriores, en
                lugar de volver a capturarse cada vez que se genera un
                documento.
              </p>
              <aside className="guide-callout">
                <p>
                  Trabajador → empresa → centro de trabajo → evaluaciones →
                  resultados → documentos → historial
                </p>
              </aside>
              <p className="lead">
                Cuando esa relación existe, localizar antecedentes, revisar
                evaluaciones previas o generar nuevos documentos deja de
                depender exclusivamente de carpetas y nombres de archivo.
              </p>
              <p className="lead">
                Los documentos siguen siendo necesarios para entregar
                resultados, imprimirlos, firmarlos o conservar evidencia. La
                diferencia es que ya no tienen que cargar por sí solos con toda
                la organización del expediente.
              </p>
            </div>
          </section>

          <section
            className="guide-section container section-with-sigil"
            id="ramazzini"
          >
            <IsoMark className="section-sigil section-sigil-right" />
            <div className="feature-visual">
              <div className="section-head">
                <span className="section-kicker">En la práctica</span>
                <h2>
                  Cómo gestiona Ramazzini los expedientes médicos laborales
                </h2>
                <p className="lead">
                  En{" "}
                  <a
                    className="guide-inline-link"
                    href="/software-salud-ocupacional/"
                  >
                    Ramazzini
                  </a>
                  , el expediente se organiza alrededor del trabajador. Las
                  evaluaciones, documentos generados y archivos externos
                  permanecen relacionados con su historial, empresa y centro de
                  trabajo.
                </p>
                <p className="lead">
                  Así, cuando el trabajador vuelve para una nueva evaluación, su
                  información anterior sigue disponible dentro del mismo
                  expediente en lugar de quedar repartida entre carpetas,
                  plantillas y documentos independientes.
                </p>
                <div className="hero-actions">
                  <TrackedCta
                    className="button button-primary"
                    href="/#demo"
                    event="demo_cta_click"
                    eventParams={{ cta_location: "guide_cta" }}
                  >
                    <CalendarDays size={18} /> Agenda una demo
                  </TrackedCta>
                  <TrackedCta
                    className="button button-secondary"
                    href={appUrl}
                    event="trial_cta_click"
                    eventParams={{ cta_location: "guide_cta", plan: "none" }}
                  >
                    Prueba Ramazzini gratis 15 días <ArrowRight size={18} />
                  </TrackedCta>
                </div>
              </div>
              <div className="mock-window screenshot-window">
                <div className="mock-window-bar" aria-hidden="true">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <Image
                  src="/capturas/Expediente-Oscuro.jpg"
                  alt="Expediente de trabajador en Ramazzini"
                  width={1885}
                  height={1005}
                  sizes="(max-width: 980px) 100vw, 52vw"
                />
              </div>
            </div>
            <ul className="guide-topics guide-topics-follow">
              {ramazziniCapabilities.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="lead">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="guide-section container"
            id="preguntas-frecuentes"
          >
            <div className="section-head">
              <span className="section-kicker">Dudas frecuentes</span>
              <h2>Preguntas frecuentes sobre el expediente médico laboral</h2>
            </div>
            <div className="faq">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="guide-section container" id="cta-final">
            <div className="guide-cta">
              <h2>Organiza los expedientes médicos laborales desde un solo lugar</h2>
              <p className="lead">
                Mantén evaluaciones, documentos e historial relacionados con
                cada trabajador en una plataforma desarrollada específicamente
                para salud ocupacional.
              </p>
              <div className="hero-actions">
                <TrackedCta
                  className="button button-primary"
                  href={appUrl}
                  event="trial_cta_click"
                  eventParams={{ cta_location: "closing_cta", plan: "none" }}
                >
                  Prueba Ramazzini gratis 15 días <ArrowRight size={18} />
                </TrackedCta>
                <TrackedCta
                  className="button button-secondary"
                  href="/#demo"
                  event="demo_cta_click"
                  eventParams={{ cta_location: "closing_cta" }}
                >
                  <CalendarDays size={18} /> Agenda una demo
                </TrackedCta>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer homeHref="/" />
      <TrackedCta
        className="whatsapp"
        aria-label="Enviar WhatsApp a Ramazzini"
        href={`https://wa.me/${whatsapp}?text=${waMessage}`}
        event="whatsapp_click"
        eventParams={{ cta_location: "floating" }}
      >
        <Image src="/whatsapp-logo.svg" alt="" width={30} height={30} />
      </TrackedCta>
    </div>
  );
}
