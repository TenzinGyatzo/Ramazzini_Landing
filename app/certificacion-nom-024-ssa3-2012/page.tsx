import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CalendarDays, FileText } from "lucide-react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const pageTitle = "Certificación NOM-024-SSA3-2012 | Ramazzini";
const pageDescription =
  "Información sobre la NOM-024-SSA3-2012, certificación de sistemas de información en salud y el estado de certificación de Ramazzini.";
const pagePath = "/certificacion-nom-024-ssa3-2012/";

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

const certificationStatus = {
  estado: "En proceso de certificación",
  descripcion:
    "Ramazzini se encuentra actualmente en el proceso de evaluación de conformidad con la NOM-024-SSA3-2012.",
};

const toc = [
  { href: "#que-es", label: "Qué es" },
  { href: "#que-regula", label: "Qué regula" },
  { href: "#que-significa-certificar", label: "Qué significa certificar" },
  { href: "#que-se-evalua", label: "Qué se evalúa" },
  { href: "#alcance", label: "Alcance" },
  { href: "#interoperabilidad", label: "Guías y formatos" },
  { href: "#que-implica", label: "Qué implica" },
  { href: "#ramazzini-status", label: "Estado de Ramazzini" },
  { href: "#evidencia", label: "Evidencia" },
  { href: "#limites", label: "Límites" },
  { href: "#proceso", label: "Proceso" },
  { href: "#preguntas-frecuentes", label: "FAQ" },
];

const regulationAxes = [
  {
    title: "Registro de los datos requeridos",
    text: "El sistema debe capturar la información necesaria para generar los formatos que correspondan a su alcance de certificación.",
  },
  {
    title: "Estructura de la información",
    text: "No basta con que el dato aparezca en pantalla o dentro de un PDF. Debe estar registrado de forma que pueda utilizarse correctamente al generar el archivo de intercambio.",
  },
  {
    title: "Catálogos oficiales",
    text: "Variables como establecimientos, diagnósticos, sexo, entidades, procedimientos u otros elementos pueden requerir valores provenientes de catálogos definidos para cada guía.",
  },
  {
    title: "Reglas de cada guía",
    text: "Cada escenario establece qué variables se requieren, cuándo aplican y cómo deben representarse.",
  },
  {
    title: "Generación de archivos de intercambio",
    text: "El SIRES debe ser capaz de producir la información con la estructura definida para el escenario correspondiente.",
  },
  {
    title: "Seguridad y trazabilidad",
    text: "La NOM también contempla requisitos relacionados con la protección, integridad y gestión de la información electrónica.",
  },
];

const certificationConcepts = [
  {
    title: "Diseñado considerando la NOM-024",
    text: "El producto incorpora requisitos de la norma durante su desarrollo, pero esta afirmación por sí sola no equivale a una certificación.",
  },
  {
    title: "Evaluado",
    text: "El sistema es sometido al procedimiento correspondiente para verificar técnicamente los elementos que resultan aplicables a su alcance.",
  },
  {
    title: "Certificado",
    text: "La certificación se obtiene cuando concluye satisfactoriamente el procedimiento correspondiente y existe evidencia formal que acredita el resultado y su alcance.",
  },
];

const evaluationItems = [
  {
    title: "Datos mínimos requeridos",
    text: "El sistema debe capturar y conservar las variables exigidas por las guías y formatos incluidos en su alcance.",
  },
  {
    title: "Reglas de negocio",
    text: "Cada escenario define cuándo aplica una variable, qué valores son válidos y qué condiciones deben cumplirse al generar la información.",
  },
  {
    title: "Catálogos oficiales",
    text: "Determinados campos deben utilizar valores provenientes de catálogos definidos para cada guía, en lugar de texto libre o convenciones propias.",
  },
  {
    title: "Estructura de los archivos",
    text: "La información debe representarse con la estructura definida para el formato de intercambio correspondiente.",
  },
  {
    title: "Generación de los formatos",
    text: "El SIRES debe poder producir los archivos requeridos a partir de los datos registrados, conforme al escenario evaluado.",
  },
  {
    title: "Identificación del establecimiento y paciente",
    text: "El sistema debe manejar la información necesaria para identificar correctamente al establecimiento y a la persona, según las especificaciones aplicables.",
  },
  {
    title: "Seguridad y trazabilidad",
    text: "Se revisan controles relacionados con la protección, integridad y seguimiento de la información electrónica dentro del alcance correspondiente.",
  },
  {
    title: "Evidencia de funcionamiento",
    text: "El proceso requiere demostrar que estas capacidades operan, no únicamente describirlas en documentación.",
  },
];

const scopeFields = [
  { term: "Producto", detail: "Ramazzini" },
  { term: "Estado", detail: "En proceso de certificación" },
  { term: "Norma", detail: "NOM-024-SSA3-2012" },
  {
    term: "Versión evaluada",
    detail: "Pendiente de publicar al concluir el proceso",
  },
  { term: "Alcance", detail: "Pendiente de publicar al concluir el proceso" },
  {
    term: "Fecha de certificación",
    detail: "No aplica todavía — proceso en curso",
  },
  {
    term: "Evidencia",
    detail: "Se publicará al concluir el proceso de certificación",
  },
];

const implicationProfiles = [
  {
    title: "Clínica o servicio médico",
    text: "Si una organización necesita reportar información bajo los formatos establecidos por la DGIS, hacerlo manualmente implica revisar variables, catálogos y reglas técnicas que no forman parte del trabajo clínico cotidiano.",
  },
  {
    title: "Con un sistema preparado",
    text: "El profesional registra la atención dentro del flujo habitual y el sistema utiliza esa información para generar el archivo correspondiente según el escenario implementado.",
  },
  {
    title: "Valor de la certificación",
    text: "La certificación aporta evidencia de que esas capacidades fueron evaluadas dentro del alcance indicado, en lugar de depender únicamente de una declaración del proveedor.",
  },
];

const statusFields = [
  { term: "Estado", detail: "En proceso de certificación" },
  { term: "Norma", detail: "NOM-024-SSA3-2012" },
  { term: "Producto", detail: "Ramazzini" },
  { term: "Etapa actual", detail: "Proceso de evaluación en curso" },
  { term: "Versión", detail: "Se publicará con la evidencia definitiva" },
  { term: "Alcance", detail: "Se publicará con la evidencia definitiva" },
  { term: "Certificado", detail: "Aún no emitido" },
];

const evidenceFields = [
  { term: "Documento", detail: "Pendiente — proceso en curso" },
  { term: "Fecha", detail: "Pendiente" },
  { term: "Entidad emisora", detail: "Pendiente" },
  { term: "Producto y versión", detail: "Pendiente" },
  { term: "Alcance", detail: "Pendiente" },
  { term: "Guías y formatos evaluados", detail: "Pendiente" },
];

const certificationLimits = [
  {
    title: "No evalúa la calidad de una decisión clínica",
    text: "La certificación revisa requisitos del sistema y del intercambio de información; no determina si una valoración médica concreta fue correcta.",
  },
  {
    title: "No sustituye las obligaciones del prestador",
    text: "Utilizar un sistema certificado no elimina las responsabilidades que corresponden a la clínica, establecimiento o profesional que presta los servicios de salud.",
  },
  {
    title: "No convierte cualquier uso del sistema en cumplimiento automático",
    text: "La forma en que una organización configura, opera y utiliza el sistema también forma parte de su gestión y de las obligaciones que le resulten aplicables.",
  },
  {
    title: "Debe respetarse el alcance evaluado",
    text: "La certificación debe interpretarse considerando las guías, formatos, versión y demás elementos incluidos en la evidencia correspondiente.",
  },
  {
    title: "No debería extenderse automáticamente a cualquier cambio futuro",
    text: "Cuando un sistema evoluciona, los cambios deben gestionarse considerando su posible impacto sobre aquello que fue evaluado y certificado.",
  },
];

const processSteps = [
  {
    title: "Definición del alcance",
    text: "Identificar qué escenarios, guías y formatos corresponden a Ramazzini y qué requisitos deben demostrarse durante la evaluación.",
  },
  {
    title: "Revisión del sistema",
    text: "Comparar la implementación existente con los requisitos aplicables e identificar brechas funcionales, técnicas y documentales.",
  },
  {
    title: "Adecuaciones",
    text: "Modificar el sistema y sus procesos cuando es necesario para responder a los requisitos identificados.",
  },
  {
    title: "Preparación de evidencia",
    text: "Documentar funciones, controles y procesos de manera que puedan ser revisados y demostrados durante la evaluación.",
  },
  {
    title: "Pruebas y revisión",
    text: "Verificar internamente los escenarios que posteriormente deberán demostrarse durante el procedimiento formal.",
  },
  {
    title: "Evaluación",
    text: "Someter el sistema y la evidencia correspondiente al proceso de verificación aplicable.",
  },
  {
    title: "Resolución",
    text: "El resultado definitivo permitirá establecer si el sistema obtiene la certificación y bajo qué alcance.",
  },
];

const faqs = [
  [
    "¿Qué es la NOM-024-SSA3-2012?",
    "Es la Norma Oficial Mexicana que regula los Sistemas de Información de Registro Electrónico para la Salud y establece mecanismos relacionados con el registro, intercambio y consolidación de información en salud.",
  ],
  [
    "¿Qué es un SIRES?",
    "SIRES significa Sistema de Información de Registro Electrónico para la Salud. La NOM-024 utiliza este término para referirse a los sistemas comprendidos dentro de su campo de aplicación.",
  ],
  [
    "¿Qué significa que un software esté certificado en NOM-024?",
    "Significa que el sistema fue sometido al procedimiento de evaluación de la conformidad correspondiente y obtuvo evidencia formal de cumplimiento dentro del alcance evaluado.",
  ],
  [
    "¿La certificación aplica a todo lo que hace un software?",
    "No debe asumirse así. El certificado y el dictamen de verificación deben indicar las guías y formatos evaluados, por lo que la certificación debe interpretarse junto con su alcance.",
  ],
  [
    "¿Ramazzini ya está certificado en NOM-024?",
    "No todavía. Ramazzini se encuentra actualmente en proceso de certificación NOM-024-SSA3-2012. Esta página se actualizará cuando exista una resolución definitiva y evidencia formal.",
  ],
  [
    "¿Cómo puedo comprobar la certificación de Ramazzini cuando concluya?",
    "La evidencia correspondiente se publicará en esta página junto con la información necesaria para identificar el producto, versión, alcance y documentación emitida.",
  ],
  [
    "¿Utilizar un software certificado significa que una clínica cumple automáticamente todas sus obligaciones?",
    "No. La certificación acredita capacidades del sistema dentro de un alcance determinado, pero no sustituye las responsabilidades operativas, clínicas, de seguridad y de cumplimiento que correspondan al prestador de servicios de salud.",
  ],
  [
    "¿Qué ocurre cuando un sistema certificado cambia de versión?",
    "Los cambios deben gestionarse considerando su impacto sobre las funciones y requisitos evaluados. La aplicabilidad de la certificación debe interpretarse conforme a su alcance y a las disposiciones correspondientes.",
  ],
] as const;

export default function CertificacionNom024Page() {
  const waMessage = encodeURIComponent(
    "Hola, vi la pagina de Ramazzini y me gustaria agendar una demo del sistema.",
  );

  return (
    <div className="site-shell">
      <Header logoHref="/" homeHref="/" showTrialCta />
      <main>
        <article className="guide">
          <header className="guide-hero">
            <div className="container guide-hero-inner">
              <span className="eyebrow">
                <FileText size={16} /> Interoperabilidad y cumplimiento
              </span>
              <h1>
                Certificación NOM-024-SSA3-2012 para sistemas de información en
                salud
              </h1>
              <div className="stack guide-prose">
                <p className="lead">
                  La NOM-024-SSA3-2012 establece requisitos para los sistemas
                  que registran información electrónica en salud y para la
                  generación e intercambio de información conforme a las
                  guías y formatos definidos por la Secretaría de Salud.
                </p>
                <p className="lead">
                  Para un sistema como Ramazzini, esto implica poder registrar
                  los datos requeridos, utilizar catálogos oficiales y generar
                  correctamente los archivos de intercambio correspondientes a
                  los escenarios incluidos en su alcance de certificación.
                </p>
              </div>
              <aside
                className="guide-status"
                aria-label="Estado de certificación"
              >
                <p className="section-kicker">Estado de Ramazzini</p>
                <p className="guide-status-badge">{certificationStatus.estado}</p>
                <p className="guide-hero-note">
                  {certificationStatus.descripcion}
                </p>
              </aside>
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
              <span className="section-kicker">La norma</span>
              <h2>¿Qué es la NOM-024-SSA3-2012?</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                La NOM-024-SSA3-2012 regula los Sistemas de Información de
                Registro Electrónico para la Salud (SIRES). Entre otros
                aspectos, establece cómo deben registrarse determinados datos y
                cómo deben prepararse para los escenarios de intercambio
                definidos mediante las Guías de Intercambio de Información en
                Salud publicadas por la DGIS.
              </p>
              <p className="lead">
                En la práctica, esas guías especifican variables, catálogos,
                estructuras y reglas que el sistema debe respetar para generar
                la información requerida en cada escenario aplicable.
              </p>
              <aside className="guide-callout">
                <p>
                  La NOM-024 no busca que todos los sistemas sean iguales; busca
                  que puedan representar e intercambiar información bajo reglas
                  comunes.
                </p>
              </aside>
            </div>
          </section>

          <section className="guide-section container" id="que-regula">
            <div className="section-head">
              <span className="section-kicker">Más que digitalizar expedientes</span>
              <h2>
                ¿Qué aspectos contempla la NOM-024 en un sistema de información
                en salud?
              </h2>
              <p className="lead">
                Un sistema puede capturar historias clínicas y generar
                documentos digitales sin que eso, por sí solo, demuestre
                conformidad con la NOM-024. La norma incorpora requisitos
                relacionados con la forma en que la información se registra,
                identifica, protege e intercambia.
              </p>
            </div>
            <ul className="guide-categories">
              {regulationAxes.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="lead guide-follow-copy">
              El resultado es una exigencia más amplia que simplemente “guardar
              expedientes en computadora”: la información debe poder mantenerse
              estructurada, identificarse correctamente y participar en los
              escenarios de intercambio que correspondan.
            </p>
          </section>

          <section
            className="guide-section container"
            id="que-significa-certificar"
          >
            <div className="section-head">
              <span className="section-kicker">Evaluación de conformidad</span>
              <h2>Cumplir la norma y demostrarlo no son exactamente lo mismo</h2>
              <p className="lead">
                Un desarrollador puede diseñar su sistema tomando la NOM-024
                como referencia. La certificación añade un paso diferente:
                someter el sistema a un procedimiento formal de evaluación para
                demostrar su conformidad dentro de un alcance determinado.
              </p>
            </div>
            <div className="difference-grid">
              {certificationConcepts.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="lead">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="stack guide-prose guide-follow-copy">
              <aside className="guide-callout">
                <p>
                  “Compatible con la NOM-024”, “desarrollado conforme a la
                  NOM-024” y “certificado” no deberían utilizarse como si
                  significaran lo mismo.
                </p>
              </aside>
            </div>
          </section>

          <section className="guide-section container" id="que-se-evalua">
            <div className="section-head">
              <span className="section-kicker">La verificación</span>
              <h2>¿Qué se revisa para certificar un SIRES?</h2>
              <p className="lead">
                La evaluación depende del alcance del sistema y de las guías y
                formatos que le resulten aplicables. La NOM establece elementos
                concretos que deben verificarse, no solamente una revisión
                visual del software.
              </p>
            </div>
            <ul className="guide-topics">
              {evaluationItems.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="lead guide-follow-copy">
              Por eso, la certificación involucra tanto al producto como a la
              evidencia necesaria para demostrar que las funciones evaluadas
              realmente operan de la forma esperada.
            </p>
          </section>

          <section className="guide-section container" id="alcance">
            <div className="section-head">
              <span className="section-kicker">Una precisión importante</span>
              <h2>Una certificación siempre debe leerse junto con su alcance</h2>
              <p className="lead">
                Decir que un sistema está certificado sin explicar qué fue
                evaluado deja fuera una parte importante de la información. La
                propia NOM establece que el dictamen de verificación y el
                certificado deben indicar claramente las guías y formatos que
                fueron evaluados.
              </p>
            </div>
           {/*  <div className="stack guide-prose">
              <p className="lead">
                Esto permite saber qué capacidad de intercambio fue
                efectivamente sometida al procedimiento de evaluación.
              </p>
            </div>
            <dl className="guide-fields">
              {scopeFields.map((item) => (
                <div key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl> */}
          </section>

          <section className="guide-section container" id="interoperabilidad">
            <div className="section-head">
              <span className="section-kicker">Guías y formatos</span>
              <h2>¿Qué son las Guías de Intercambio de Información en Salud?</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                Las Guías de Intercambio de Información en Salud (GIIS)
                convierten los requisitos generales de la NOM-024 en escenarios
                concretos. Cada guía define qué información debe registrarse y
                cómo debe estructurarse para el reporte correspondiente.
              </p>
              <p className="lead">
                Por ejemplo, existen guías relacionadas con distintos tipos de
                atención y subsistemas de información. Un SIRES no tiene que
                implementar indiscriminadamente todas las guías: durante la
                certificación se determina cuáles corresponden a su alcance.
              </p>
              <p className="lead">
                En términos técnicos, este esquema permite interoperabilidad
                porque distintos sistemas pueden producir información bajo
                estructuras y significados comunes. En la operación cotidiana de
                Ramazzini, el efecto más visible es poder generar correctamente
                los archivos requeridos para los escenarios de reporte
                aplicables.
              </p>
              <aside className="guide-callout">
                <p>
                  Para el usuario, el objetivo no es aprender a construir estos
                  archivos: el sistema debe generarlos a partir de la
                  información correctamente registrada durante la atención.
                </p>
              </aside>
            </div>
          </section>

          <section className="guide-section container" id="que-implica">
            <div className="section-head">
              <span className="section-kicker">En la práctica</span>
              <h2>¿Por qué puede importar la certificación al elegir un sistema?</h2>
              <p className="lead">
                Para muchas organizaciones, la NOM-024 puede parecer
                inicialmente un asunto técnico del proveedor de software. Sin
                embargo, la elección del sistema también puede influir en la
                capacidad del prestador para cumplir con los escenarios de
                intercambio que le resulten aplicables.
              </p>
            </div>
            <div className="difference-grid">
              {implicationProfiles.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="lead">{item.text}</p>
                </article>
              ))}
            </div>
            <p className="lead guide-follow-copy">
              La certificación no elimina las responsabilidades propias del
              prestador, pero aporta evidencia sobre las capacidades del sistema
              dentro del alcance que fue evaluado.
            </p>
          </section>

          <section className="guide-section container" id="ramazzini-status">
            <div className="section-head">
              <span className="section-kicker">Estado actual</span>
              <h2>
                Ramazzini se encuentra en proceso de certificación
                NOM-024-SSA3-2012
              </h2>
              <p className="lead">
                Ramazzini inició un proceso formal de preparación y evaluación
                para demostrar el cumplimiento de los requisitos de la
                NOM-024-SSA3-2012 que corresponden al alcance definido para el
                sistema.
              </p>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                Este proceso ha requerido revisar no sólo las funciones visibles
                para el usuario, sino también la estructura de los datos, los
                escenarios de intercambio, catálogos, identificación de
                personas, seguridad, trazabilidad y documentación técnica
                necesaria para la evaluación.
              </p>
              <p className="lead">
                En Ramazzini, la intención es que el cumplimiento técnico ocurra
                detrás del flujo clínico. El médico registra la atención; el
                sistema se encarga de estructurar esa información y generar los
                archivos de intercambio correspondientes al alcance
                implementado.
              </p>
              <p className="lead">
                El usuario no debería necesitar conocer la estructura interna de
                un CEX ni capturar dos veces la misma información para cumplir
                con el formato de intercambio.
              </p>
            </div>
            <div
              className="guide-status"
              aria-label="Ficha de estado de certificación"
            >
              <p className="guide-status-badge">{certificationStatus.estado}</p>
              <dl className="guide-fields">
                {statusFields.map((item) => (
                  <div key={item.term}>
                    <dt>{item.term}</dt>
                    <dd>{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="lead guide-follow-copy">
              Hasta que el procedimiento concluya y exista la evidencia formal
              correspondiente, Ramazzini no se presenta como un sistema
              certificado. Esta página se actualizará cuando exista una
              resolución definitiva.
            </p>
          </section>

          {/* <section className="guide-section container" id="evidencia">
            <div className="section-head">
              <span className="section-kicker">Verificable</span>
              <h2>La certificación debe poder comprobarse</h2>
              <p className="lead">
                Una afirmación de certificación debería estar acompañada por
                evidencia que permita conocer qué producto fue evaluado y cuál
                fue el alcance del resultado.
              </p>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                Cuando concluya el proceso de Ramazzini, esta sección
                concentrará la información necesaria para consultar esa
                evidencia.
              </p>
            </div>
            <article className="guide-evidence">
              <dl className="guide-fields">
                {evidenceFields.map((item) => (
                  <div key={item.term}>
                    <dt>{item.term}</dt>
                    <dd>{item.detail}</dd>
                  </div>
                ))}
              </dl>
              <span className="button button-secondary" aria-disabled="true">
                Documento disponible al concluir el proceso
              </span>
            </article>
          </section> */}

          <section className="guide-section container" id="limites">
            <div className="section-head">
              <span className="section-kicker">Alcance y límites</span>
              <h2>
                Lo que una certificación NOM-024 no debería interpretarse que
                garantiza
              </h2>
              <p className="lead">
                Una certificación aporta evidencia importante sobre el
                cumplimiento técnico evaluado, pero conviene no atribuirle
                alcances que no tiene.
              </p>
            </div>
            <ol className="guide-errors">
              {certificationLimits.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
            <p className="lead guide-follow-copy">
              Por eso, más que buscar simplemente el logotipo o la palabra
              “certificado”, conviene revisar qué acredita exactamente la
              evidencia presentada.
            </p>
          </section>

          <section className="guide-section container" id="proceso">
            <div className="section-head">
              <span className="section-kicker">El recorrido</span>
              <h2>Qué implica preparar Ramazzini para la certificación</h2>
              <p className="lead">
                La certificación no se resuelve agregando una función aislada al
                sistema. Ha requerido revisar cómo se registra, conserva,
                protege y transforma la información desde distintos puntos de la
                aplicación.
              </p>
            </div>
            <ol className="guide-principles">
              {processSteps.map((item, index) => (
                <li key={item.title}>
                  <span className="step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="lead">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="lead guide-follow-copy">
              Ramazzini se encuentra actualmente dentro de este proceso. El
              resultado y la evidencia definitiva se publicarán cuando la
              evaluación haya concluido.
            </p>
          </section>

          <section className="guide-section container" id="preguntas-frecuentes">
            <div className="section-head">
              <span className="section-kicker">Dudas frecuentes</span>
              <h2>
                Preguntas frecuentes sobre la certificación NOM-024-SSA3-2012
              </h2>
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
              <h2>
                Conoce Ramazzini y el trabajo detrás de su interoperabilidad
              </h2>
              <p className="lead">
                Explora una plataforma desarrollada específicamente para salud
                ocupacional y conoce cómo estamos preparando su tecnología para
                los requisitos de intercambio de información en salud.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="/#demo">
                  <CalendarDays size={18} /> Agenda una demo
                </a>
                <a className="button button-secondary" href={appUrl}>
                  Prueba Ramazzini gratis 15 días <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </section>
        </article>
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
