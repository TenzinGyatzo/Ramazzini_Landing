import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IsoMark } from "../components/IsoMark";

const pageTitle = "Vigilancia de la salud de los trabajadores | Ramazzini";
const pageDescription =
  "Guía sobre vigilancia de la salud de los trabajadores, seguimiento según riesgos, evaluaciones periódicas y organización del historial médico laboral.";
const pagePath = "/vigilancia-de-la-salud-de-los-trabajadores/";

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
  { href: "#seguimiento", label: "Seguimiento" },
  { href: "#poblacion", label: "Población" },
  { href: "#riesgos", label: "Riesgos" },
  { href: "#componentes", label: "Componentes" },
  { href: "#periodicidad", label: "Periodicidad" },
  { href: "#comparacion", label: "Comparación" },
  { href: "#hallazgos", label: "Hallazgos" },
  { href: "#mexico", label: "México" },
  { href: "#ejemplos", label: "Ejemplos" },
  { href: "#ramazzini", label: "Ramazzini" },
  { href: "#preguntas-frecuentes", label: "Preguntas frecuentes" },
];

const populationBlocks = [
  {
    title: "Puestos y actividades",
    text: "Las funciones reales ayudan a identificar qué grupos de trabajadores pueden compartir demandas o condiciones de trabajo relevantes.",
  },
  {
    title: "Áreas y procesos",
    text: "Dos personas con puestos similares pueden tener exposiciones diferentes si trabajan en procesos, instalaciones o condiciones distintas.",
  },
  {
    title: "Riesgos y exposiciones",
    text: "La presencia de ruido, agentes químicos, demandas ergonómicas, conducción u otros factores ayuda a definir qué población requiere una vigilancia específica.",
  },
  {
    title: "Historial de exposición",
    text: "El puesto actual no siempre cuenta toda la historia. Los antecedentes laborales pueden aportar información importante sobre exposiciones previas o acumuladas.",
  },
];

const riskFlowSteps = [
  {
    title: "Riesgo o exposición",
    text: "Identificar la condición de trabajo que puede tener relevancia para la salud.",
  },
  {
    title: "Población expuesta",
    text: "Determinar qué trabajadores están realmente relacionados con ese riesgo o exposición.",
  },
  {
    title: "Evaluación pertinente",
    text: "Seleccionar la valoración o los estudios que pueden aportar información útil para esa población.",
  },
  {
    title: "Seguimiento",
    text: "Conservar resultados, compararlos y actuar cuando aparece un cambio que merece atención.",
  },
];

const programComponents = [
  {
    title: "Identificación de la población",
    text: "Definir qué trabajadores forman parte del seguimiento y mantener esa población actualizada cuando existen ingresos, bajas o cambios de puesto.",
  },
  {
    title: "Evaluación inicial",
    text: "Contar con información de referencia permite interpretar mejor lo que encontremos en evaluaciones posteriores.",
  },
  {
    title: "Evaluaciones periódicas",
    text: "Revisar al trabajador con una frecuencia coherente con el riesgo, sus antecedentes, los resultados previos y los criterios aplicables.",
  },
  {
    title: "Estudios específicos",
    text: "Utilizar pruebas que respondan al efecto o función que realmente interesa vigilar, evitando convertir la vigilancia en una batería genérica.",
  },
  {
    title: "Comparación histórica",
    text: "Revisar resultados anteriores para reconocer cambios que podrían pasar inadvertidos si cada evaluación se interpreta por separado.",
  },
  {
    title: "Seguimiento de hallazgos",
    text: "Definir qué ocurre después de encontrar una alteración: confirmar, ampliar, vigilar, remitir o realizar alguna otra acción.",
  },
  {
    title: "Registro y documentación",
    text: "Conservar suficiente información para saber qué se evaluó, cuándo, por qué y qué seguimiento se indicó.",
  },
  {
    title: "Revisión del programa",
    text: "Observar cobertura, pendientes, hallazgos y tendencias permite saber si el programa realmente está funcionando como fue planeado.",
  },
];

const periodicityFactors = [
  {
    title: "Tipo de riesgo",
    text: "Distintas exposiciones pueden requerir formas y frecuencias de seguimiento diferentes.",
  },
  {
    title: "Magnitud y características de la exposición",
    text: "No todos los trabajadores relacionados con un mismo agente necesariamente tienen el mismo nivel o patrón de exposición.",
  },
  {
    title: "Resultados anteriores",
    text: "Un hallazgo previo puede justificar un seguimiento diferente al de una persona con resultados estables.",
  },
  {
    title: "Estado de salud",
    text: "Antecedentes, síntomas o cambios clínicos pueden modificar la necesidad de reevaluación.",
  },
  {
    title: "Cambios en el trabajo",
    text: "Un cambio de puesto, proceso o exposición puede hacer necesario revisar antes lo que hasta entonces se seguía con otra periodicidad.",
  },
  {
    title: "Disposiciones aplicables",
    text: "Algunos riesgos o actividades cuentan con criterios específicos que deben considerarse al establecer la vigilancia.",
  },
  {
    title: "Criterio médico",
    text: "La periodicidad también puede ajustarse cuando la evolución individual justifica observar al trabajador con mayor atención.",
  },
];

const comparisonFlowSteps = [
  {
    title: "Evaluación previa",
    text: "Conserva el punto de referencia y el contexto en el que se obtuvo.",
  },
  {
    title: "Evaluación actual",
    text: "Aporta nueva información sobre el trabajador bajo las condiciones actuales.",
  },
  {
    title: "Cambio",
    text: "Permite reconocer diferencias que pueden ser clínicamente o laboralmente relevantes.",
  },
  {
    title: "Seguimiento",
    text: "Ayuda a decidir si basta con continuar la vigilancia o si hace falta confirmar, ampliar o intervenir.",
  },
];

const findingActions = [
  {
    title: "Confirmar",
    text: "Antes de interpretar un cambio puede ser necesario revisar la calidad del estudio, repetir una medición o confirmar el hallazgo.",
  },
  {
    title: "Ampliar la evaluación",
    text: "Algunos resultados justifican obtener más información clínica o realizar estudios adicionales antes de establecer una conclusión.",
  },
  {
    title: "Dar seguimiento",
    text: "No todos los hallazgos requieren una intervención inmediata; algunos necesitan observar su evolución con una frecuencia diferente.",
  },
  {
    title: "Remitir",
    text: "Cuando el problema requiere valoración o manejo fuera del alcance del servicio de salud ocupacional, la remisión forma parte del seguimiento.",
  },
  {
    title: "Revisar la exposición",
    text: "Si aparece un cambio potencialmente relacionado con el trabajo, también puede ser necesario revisar las condiciones o controles de exposición.",
  },
  {
    title: "Valorar implicaciones laborales",
    text: (
      <>
        Cuando corresponde, los hallazgos pueden requerir{" "}
        <a className="guide-inline-link" href="/aptitud-medica-laboral/">
          revisar la aptitud
        </a>
        , establecer recomendaciones o considerar determinadas restricciones.
      </>
    ),
  },
];

const programIndicators = [
  {
    title: "Cobertura",
    text: "Qué proporción de la población que debía ser evaluada realmente completó la vigilancia prevista.",
  },
  {
    title: "Evaluaciones pendientes",
    text: "Qué trabajadores siguen sin completar una evaluación o estudio programado.",
  },
  {
    title: "Hallazgos identificados",
    text: "Qué alteraciones relevantes están apareciendo y en qué poblaciones o áreas se concentran.",
  },
  {
    title: "Seguimientos completados",
    text: "Cuántos hallazgos que requerían una acción posterior realmente llegaron a una resolución o siguiente etapa documentada.",
  },
  {
    title: "Cambios en el tiempo",
    text: "Si los resultados de la población permanecen estables o comienzan a mostrar alguna tendencia que merezca revisión.",
  },
  {
    title: "Población bajo vigilancia",
    text: "Si el conjunto de trabajadores incluido sigue correspondiendo con los puestos, áreas y exposiciones actuales.",
  },
];

const mexicoBlocks = [
  {
    title:
      "NOM-030-STPS-2009 — Servicios preventivos de seguridad y salud en el trabajo",
    text: "Proporciona un marco general para las funciones y actividades preventivas de seguridad y salud en los centros de trabajo, a partir del diagnóstico y del programa de seguridad y salud en el trabajo.",
  },
  {
    title: "Normas relacionadas con riesgos específicos",
    text: "Determinadas exposiciones cuentan con disposiciones particulares que pueden establecer elementos de vigilancia de la salud, evaluaciones o medidas de seguimiento para la población expuesta.",
  },
  {
    title: "Expediente y documentación clínica",
    text: "Las evaluaciones médicas y la información clínica generada también deben manejarse considerando las disposiciones que resulten aplicables a su integración, conservación y confidencialidad.",
  },
  {
    title: "Programa según el centro de trabajo",
    text: "La vigilancia debe responder a los riesgos y características reales de la organización, no limitarse a reproducir una batería de estudios utilizada en otros centros de trabajo.",
  },
];

const surveillanceExamples = [
  {
    title: "Vigilancia auditiva",
    fields: [
      {
        label: "Riesgo o población",
        text: "Trabajadores con exposición relevante a ruido.",
      },
      {
        label: "Qué interesa vigilar",
        text: "La audición y su evolución a lo largo del tiempo, considerando también las características de la exposición.",
      },
      {
        label: "Posibles evaluaciones",
        text: "Antecedentes, síntomas relacionados y evaluación audiométrica según corresponda.",
      },
      {
        label: "Qué se compara",
        text: "Resultados actuales frente a evaluaciones previas y cambios que puedan requerir revisión.",
      },
      {
        label: "Seguimiento",
        text: "Confirmación o evaluación adicional ante hallazgos relevantes, junto con la revisión de las medidas preventivas cuando corresponda.",
      },
    ],
  },
  {
    title: "Vigilancia respiratoria",
    fields: [
      {
        label: "Riesgo o población",
        text: "Trabajadores expuestos a agentes o condiciones con posible efecto sobre el sistema respiratorio.",
      },
      {
        label: "Qué interesa vigilar",
        text: "Síntomas, antecedentes y cambios en la función respiratoria que puedan ser relevantes para la exposición.",
      },
      {
        label: "Posibles evaluaciones",
        text: "Interrogatorio dirigido, exploración y estudios funcionales o complementarios cuando estén indicados.",
      },
      {
        label: "Qué se compara",
        text: "Evolución clínica y resultados respecto a evaluaciones anteriores.",
      },
      {
        label: "Seguimiento",
        text: "Ampliar la valoración o revisar las condiciones de exposición cuando aparezcan cambios que lo justifiquen.",
      },
    ],
  },
  {
    title: "Vigilancia musculoesquelética",
    fields: [
      {
        label: "Riesgo o población",
        text: "Trabajadores con demandas físicas, movimientos repetitivos, manipulación de cargas u otros factores ergonómicos relevantes.",
      },
      {
        label: "Qué interesa vigilar",
        text: "Síntomas, limitaciones funcionales y cambios que puedan relacionarse con las demandas del trabajo.",
      },
      {
        label: "Posibles evaluaciones",
        text: "Interrogatorio, exploración musculoesquelética y valoración funcional según el puesto y los hallazgos.",
      },
      {
        label: "Qué se compara",
        text: "Aparición, persistencia o evolución de síntomas y limitaciones.",
      },
      {
        label: "Seguimiento",
        text: "Valoración clínica, revisión de tareas y medidas preventivas cuando los hallazgos lo requieran.",
      },
    ],
  },
  {
    title: "Vigilancia de conductores",
    fields: [
      {
        label: "Riesgo o población",
        text: "Trabajadores cuya actividad habitual incluye la conducción de vehículos.",
      },
      {
        label: "Qué interesa vigilar",
        text: "Condiciones de salud y capacidades que puedan tener relevancia para una conducción segura y sostenida.",
      },
      {
        label: "Posibles evaluaciones",
        text: "Valoración médica orientada al puesto y estudios complementarios cuando exista una razón clínica, funcional o normativa para realizarlos.",
      },
      {
        label: "Qué se compara",
        text: "Cambios en el estado de salud, capacidades relevantes y antecedentes respecto a evaluaciones anteriores.",
      },
      {
        label: "Seguimiento",
        text: "Reevaluación, seguimiento clínico o valoración de aptitud cuando aparezcan condiciones que puedan modificar la capacidad para conducir.",
      },
    ],
  },
];

const frequentErrors = [
  {
    title: "Hacer los mismos estudios a todos",
    text: "Una batería uniforme facilita la logística, pero puede desvincular las evaluaciones de los riesgos que realmente se pretende vigilar.",
  },
  {
    title: "No definir claramente la población",
    text: "Si no sabemos quién debería formar parte del programa, resulta difícil medir cobertura, detectar pendientes o saber cuándo alguien entra o sale de vigilancia.",
  },
  {
    title: "Interpretar cada evaluación por separado",
    text: "Sin resultados anteriores se pierde la posibilidad de reconocer cambios y el programa termina funcionando como una sucesión de exámenes independientes.",
  },
  {
    title: "Realizar estudios sin cerrar el seguimiento",
    text: "Detectar una alteración tiene poco valor si después no sabemos si fue confirmada, evaluada, remitida o simplemente quedó pendiente.",
  },
  {
    title: "Mantener los resultados fuera del expediente",
    text: "Cuando estudios y evaluaciones quedan repartidos entre carpetas o sistemas distintos, reconstruir la evolución del trabajador se vuelve innecesariamente difícil.",
  },
  {
    title: "No actualizar la exposición",
    text: "Los trabajadores cambian de puesto, área y funciones. Mantenerlos indefinidamente bajo el mismo esquema de vigilancia puede dejar de reflejar sus riesgos actuales.",
  },
  {
    title: "Medir actividad en lugar de resultados",
    text: "Contar cuántos estudios se realizaron dice cuánto trabajó el programa, pero no necesariamente si se cubrió a la población correcta o se dio seguimiento a los hallazgos.",
  },
  {
    title: "Convertir el programa en un documento anual",
    text: "Un programa puede estar perfectamente redactado y aun así aportar poco si no se utiliza para dirigir evaluaciones, seguimientos y decisiones durante el año.",
  },
];

const ramazziniCapabilities = [
  {
    title: "Población organizada",
    text: "Los trabajadores se mantienen relacionados con su empresa y centro de trabajo, facilitando la organización de poblaciones atendidas en distintas ubicaciones.",
  },
  {
    title: "Expediente por trabajador",
    text: "Las evaluaciones y documentos permanecen reunidos dentro del historial de cada persona en lugar de quedar distribuidos entre archivos independientes.",
  },
  {
    title: "Evaluaciones estructuradas",
    text: "Historias clínicas, exploraciones físicas, audiometrías, exámenes de la vista y otras evaluaciones se capturan directamente en formatos desarrollados para salud ocupacional.",
  },
  {
    title: "Historial disponible",
    text: "Las evaluaciones anteriores pueden consultarse cuando el trabajador regresa, facilitando la revisión de antecedentes y resultados previos.",
  },
  {
    title: "Resultados y documentos relacionados",
    text: "Los documentos generados dentro de Ramazzini y los estudios externos pueden conservarse asociados con el expediente correspondiente.",
  },
  {
    title: "Continuidad entre evaluaciones",
    text: "La información que ya existe puede reutilizarse en nuevas valoraciones, evitando reconstruir desde cero los datos del trabajador en cada revisión.",
  },
];

const faqs = [
  [
    "¿Qué es la vigilancia de la salud de los trabajadores?",
    "Es el seguimiento de la salud de una población trabajadora en relación con sus riesgos y exposiciones. Utiliza evaluaciones y resultados sucesivos para identificar cambios, dar seguimiento a hallazgos y orientar acciones preventivas.",
  ],
  [
    "¿Vigilancia de la salud y examen médico periódico son lo mismo?",
    "No. El examen periódico puede formar parte de la vigilancia, pero la vigilancia incluye además definir la población, relacionarla con sus riesgos, conservar resultados anteriores, comparar cambios y dar seguimiento a los hallazgos.",
  ],
  [
    "¿Todos los trabajadores necesitan la misma vigilancia?",
    "No. La vigilancia debería responder a los riesgos, exposiciones, actividades y características relevantes de cada población trabajadora.",
  ],
  [
    "¿Cada cuánto deben realizarse las evaluaciones?",
    "La periodicidad depende del riesgo, las características de la exposición, los resultados previos, el estado de salud, los cambios en el trabajo y las disposiciones que resulten aplicables.",
  ],
  [
    "¿Todos los programas requieren los mismos estudios?",
    "No. Los estudios deben seleccionarse según aquello que se pretende vigilar. Una batería idéntica para todas las poblaciones puede incluir pruebas innecesarias y omitir otras que sí serían relevantes.",
  ],
  [
    "¿Por qué es importante conservar los resultados anteriores?",
    "Porque permiten comparar evaluaciones y reconocer cambios que pueden pasar inadvertidos cuando cada resultado se interpreta de forma aislada.",
  ],
  [
    "¿Qué debe hacerse cuando aparece un hallazgo?",
    "Depende del hallazgo. Puede ser necesario confirmarlo, ampliar la evaluación, establecer seguimiento, remitir al trabajador, revisar la exposición o valorar posibles implicaciones laborales.",
  ],
  [
    "¿Un software puede ayudar a organizar la vigilancia de la salud?",
    "Sí. Puede ayudar a mantener trabajadores, evaluaciones, resultados y documentos dentro de un historial organizado, facilitando la consulta de antecedentes y la continuidad entre evaluaciones.",
  ],
] as const;

export default function VigilanciaDeLaSaludDeLosTrabajadoresPage() {
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
                <BookOpen size={16} /> Guía de salud ocupacional
              </span>
              <h1>
                Vigilancia de la salud de los trabajadores: del examen periódico
                al seguimiento
              </h1>
              <div className="stack guide-prose">
                <p className="lead">
                  Hacer exámenes médicos periódicos no garantiza, por sí solo,
                  que estemos vigilando la salud de los trabajadores. La
                  vigilancia empieza a cobrar sentido cuando sabemos a quién
                  estamos observando, por qué lo hacemos y qué cambios buscamos
                  identificar con el paso del tiempo.
                </p>
                <p className="lead">
                  Eso implica relacionar trabajadores con riesgos y exposiciones,
                  elegir evaluaciones pertinentes, conservar resultados
                  anteriores y dar seguimiento cuando aparece algo que merece
                  atención.
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
              <span className="section-kicker">Más que evaluar</span>
              <h2>¿Qué significa vigilar la salud de los trabajadores?</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                En salud ocupacional evaluamos trabajadores todos los días. La
                vigilancia aparece cuando esas evaluaciones dejan de verse como
                eventos independientes y pasan a formar parte de un seguimiento.
              </p>
              <p className="lead">
                Para hacerlo necesitamos conocer los riesgos presentes,
                identificar a las personas expuestas, decidir qué vale la pena
                evaluar y conservar suficiente información para reconocer cambios
                cuando volvamos a revisar al trabajador.
              </p>
              <p className="lead">
                Por eso, la vigilancia no termina cuando se realiza el estudio o
                se entrega un resultado. También importa qué hacemos con ese
                resultado, cuándo corresponde volver a evaluar y si los hallazgos
                empiezan a mostrar algún patrón individual o colectivo.
              </p>
              <aside className="guide-callout">
                <p>
                  Vigilar no es repetir estudios: es saber qué estamos siguiendo,
                  en quién y para qué.
                </p>
              </aside>
            </div>
          </section>

          <section className="guide-section container" id="seguimiento">
            <div className="section-head">
              <span className="section-kicker">Continuidad</span>
              <h2>
                Una evaluación aislada muestra un momento; la vigilancia permite
                observar cambios
              </h2>
              <p className="lead">
                Un resultado puede decirnos cómo se encuentra un trabajador hoy.
                Su verdadero valor para la vigilancia aparece cuando podemos
                interpretarlo junto con lo que sabemos de su exposición y con lo
                que encontramos anteriormente.
              </p>
            </div>
            <div className="before-after">
              <article className="card">
                <h3>Evaluación aislada</h3>
                <p className="lead">
                  Responde a una necesidad concreta en un momento determinado.
                  Puede aportar información suficiente para esa evaluación, pero
                  por sí sola dice poco sobre la evolución del trabajador.
                </p>
              </article>
              <article className="card good">
                <h3>Seguimiento en el tiempo</h3>
                <p className="lead">
                  Permite comparar evaluaciones, reconocer cambios y decidir si
                  un hallazgo requiere confirmación, seguimiento o alguna
                  intervención adicional.
                </p>
              </article>
            </div>
            <p className="lead guide-follow-copy">
              En muchas ocasiones no es el valor aislado lo que llama la
              atención, sino su cambio respecto a evaluaciones anteriores.
            </p>
          </section>

          <section className="guide-section container" id="poblacion">
            <div className="section-head">
              <span className="section-kicker">Población bajo vigilancia</span>
              <h2>La vigilancia empieza por saber a quién estamos siguiendo</h2>
              <p className="lead">
                Antes de decidir qué estudios realizar o con qué frecuencia
                repetirlos, necesitamos identificar qué trabajadores comparten
                una exposición, una actividad o una condición que justifica
                determinado seguimiento.
              </p>
            </div>
            <ul className="guide-categories">
              {populationBlocks.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="lead guide-follow-copy">
              Una población bajo vigilancia debería poder explicarse con una
              lógica sencilla: estos trabajadores se siguen porque comparten
              este riesgo, exposición o condición de trabajo.
            </p>
          </section>

          <section className="guide-section container" id="riesgos">
            <div className="section-head">
              <span className="section-kicker">La lógica del programa</span>
              <h2>Del riesgo identificado al seguimiento de la salud</h2>
              <p className="lead">
                Cuando la vigilancia parte del riesgo, resulta más fácil
                justificar quién entra al programa, qué queremos evaluar y qué
                información necesitaremos comparar después.
              </p>
            </div>
            <figure className="guide-flow">
              <ol className="guide-flow-track">
                {riskFlowSteps.map((item, index) => (
                  <li key={item.title} className="guide-flow-step">
                    <span className="step-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ol>
            </figure>
            <p className="lead guide-follow-copy">
              Esta secuencia evita empezar por la pregunta “¿qué estudios
              hacemos este año?” y obliga a responder primero algo más
              importante: “¿qué necesitamos vigilar y por qué?”.
            </p>
          </section>

          <section className="guide-section container" id="componentes">
            <div className="section-head">
              <span className="section-kicker">Componentes</span>
              <h2>
                ¿Qué puede formar parte de un programa de vigilancia de la
                salud?
              </h2>
              <p className="lead">
                La forma concreta del programa dependerá del riesgo y de la
                población, pero una vigilancia bien organizada suele necesitar
                algo más que una fecha anual para realizar estudios.
              </p>
            </div>
            <ul className="guide-categories">
              {programComponents.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="guide-section container" id="evaluacion-inicial">
            <div className="section-head">
              <span className="section-kicker">Punto de referencia</span>
              <h2>Para reconocer un cambio, ayuda saber de dónde partimos</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                Una evaluación inicial aporta un punto de comparación. No
                necesariamente significa que todos los trabajadores necesiten
                una batería extensa antes de comenzar a trabajar, sino que
                conviene contar con la información relevante para aquello que
                posteriormente queremos vigilar.
              </p>
              <p className="lead">
                Cuando existe una evaluación previa confiable, un resultado
                posterior puede interpretarse como parte de una trayectoria y no
                solamente como un número aislado.
              </p>
              <p className="lead">
                Esto es especialmente útil en parámetros o estudios donde la
                evolución puede aportar tanta información como el resultado
                actual.
              </p>
              <aside className="guide-callout">
                <p>
                  Una referencia inicial es útil cuando sabemos qué queremos
                  comparar después.
                </p>
              </aside>
            </div>
          </section>

          <section className="guide-section container" id="periodicidad">
            <div className="section-head">
              <span className="section-kicker">Cuándo volver a evaluar</span>
              <h2>La periodicidad no tiene por qué ser igual para todos</h2>
              <p className="lead">
                La costumbre de realizar una revisión anual puede ser
                operativamente sencilla, pero la frecuencia adecuada depende de
                qué estamos vigilando y de las características de la población.
              </p>
            </div>
            <ol className="guide-factor-list">
              {periodicityFactors.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
            <p className="lead guide-follow-copy">
              Por eso, “cada año” puede ser una frecuencia administrativa
              conveniente, pero no debería sustituir el razonamiento detrás del
              seguimiento.
            </p>
          </section>

          <section className="guide-section container" id="comparacion">
            <div className="section-head">
              <span className="section-kicker">La evolución</span>
              <h2>Comparar suele ser más útil que mirar un resultado aislado</h2>
              <p className="lead">
                Cuando las evaluaciones permanecen relacionadas dentro del
                historial, podemos observar trayectorias en lugar de fotografías
                independientes.
              </p>
            </div>
            <figure className="guide-flow">
              <ol className="guide-flow-track">
                {comparisonFlowSteps.map((item, index) => (
                  <li key={item.title} className="guide-flow-step">
                    <span className="step-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ol>
            </figure>
            <div className="stack guide-prose guide-follow-copy">
              <p className="lead">
                La lógica puede aplicarse a información muy distinta según el
                programa: audición, función respiratoria, presión arterial,
                peso, síntomas, capacidad funcional u otros parámetros que tenga
                sentido seguir.
              </p>
              <aside className="guide-callout">
                <p>
                  El objetivo no es encontrar cambios donde no los hay, sino
                  tener la información necesaria para reconocerlos cuando sí
                  aparecen.
                </p>
              </aside>
            </div>
          </section>

          <section className="guide-section container" id="hallazgos">
            <div className="section-head">
              <span className="section-kicker">Cerrar el ciclo</span>
              <h2>Encontrar un hallazgo es sólo una parte del proceso</h2>
              <p className="lead">
                Una vigilancia pierde buena parte de su utilidad cuando
                identifica alteraciones pero no deja claro qué debe ocurrir
                después.
              </p>
            </div>
            <ol className="guide-outcomes">
              {findingActions.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
            <p className="lead guide-follow-copy">
              Lo importante es poder seguir el hallazgo hasta saber qué se hizo
              con él. Detectar y perder de vista después al trabajador deja
              incompleto el proceso.
            </p>
          </section>

          <section
            className="guide-section container"
            id="individual-colectiva"
          >
            <div className="section-head">
              <span className="section-kicker">Dos niveles de observación</span>
              <h2>
                La vigilancia ocurre en el trabajador y también en la población
              </h2>
              <p className="lead">
                Cada trabajador necesita una interpretación individual. Pero
                cuando varias personas comparten una exposición, observarlas en
                conjunto puede revelar información que no aparece al revisar los
                expedientes uno por uno.
              </p>
            </div>
            <div className="before-after">
              <article className="card">
                <h3>Vigilancia individual</h3>
                <p className="lead">
                  Permite seguir antecedentes, resultados, cambios y hallazgos
                  de una persona para decidir qué necesita en sus evaluaciones
                  posteriores.
                </p>
              </article>
              <article className="card good">
                <h3>Vigilancia colectiva</h3>
                <p className="lead">
                  Permite observar cobertura, frecuencia de hallazgos y posibles
                  tendencias dentro de un área, puesto o población expuesta.
                </p>
              </article>
            </div>
            <p className="lead guide-follow-copy">
              Un cambio en una persona puede requerir atención clínica. El mismo
              tipo de cambio repetido en varias personas puede justificar además
              revisar qué está ocurriendo en el ambiente o en el proceso de
              trabajo.
            </p>
          </section>

          <section className="guide-section container" id="indicadores">
            <div className="section-head">
              <span className="section-kicker">¿Está funcionando?</span>
              <h2>Un programa también necesita vigilarse a sí mismo</h2>
              <p className="lead">
                Realizar muchas evaluaciones no necesariamente significa que la
                vigilancia esté completa. Algunos indicadores sencillos permiten
                identificar dónde se están quedando trabajadores, resultados o
                seguimientos pendientes.
              </p>
            </div>
            <ol className="guide-principles">
              {programIndicators.map((item, index) => (
                <li key={item.title}>
                  <span className="step-number">{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="lead">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="lead guide-follow-copy">
              No hace falta convertir el programa en un tablero lleno de
              métricas. Los indicadores son útiles cuando ayudan a encontrar
              algo que requiere atención o a comprobar que el seguimiento se
              está cumpliendo.
            </p>
          </section>

          <section className="guide-section container" id="mexico">
            <div className="guide-context">
              <div className="section-head">
                <span className="section-kicker">Contexto mexicano</span>
                <h2>
                  Vigilancia de la salud de los trabajadores en México
                </h2>
                <p className="lead">
                  En México, la vigilancia de la salud se relaciona con el marco
                  general de seguridad y salud en el trabajo y con disposiciones
                  específicas para determinados agentes, exposiciones y
                  actividades.
                </p>
                <p className="lead">
                  Por eso no existe un único programa aplicable a cualquier
                  centro de trabajo. La población, las evaluaciones y el
                  seguimiento deben definirse considerando los riesgos
                  identificados y las disposiciones que correspondan.
                </p>
              </div>
              <div className="guide-context-grid">
                {mexicoBlocks.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p className="lead">{item.text}</p>
                  </article>
                ))}
              </div>
              <p className="guide-disclaimer">
                Los requisitos concretos dependen de los riesgos, actividades y
                disposiciones aplicables a cada centro de trabajo. Esta guía
                presenta principios generales y no sustituye la valoración
                profesional ni la revisión normativa de cada caso.
              </p>
            </div>
          </section>

          <section className="guide-section container" id="ejemplos">
            <div className="section-head">
              <span className="section-kicker">
                El riesgo cambia lo que observamos
              </span>
              <h2>
                La vigilancia toma formas distintas según lo que queremos
                prevenir o detectar
              </h2>
              <p className="lead">
                Estos ejemplos no representan protocolos universales. Su
                propósito es mostrar cómo una exposición diferente cambia la
                población, las evaluaciones y los resultados que interesa
                seguir.
              </p>
            </div>
            <div className="guide-cases">
              {surveillanceExamples.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <dl>
                    {item.fields.map((field) => (
                      <div key={field.label}>
                        <dt>{field.label}</dt>
                        <dd>{field.text}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section className="guide-section container" id="errores">
            <div className="section-head">
              <span className="section-kicker">Errores frecuentes</span>
              <h2>Cuando el programa existe, pero la vigilancia se pierde</h2>
            </div>
            <ol className="guide-errors">
              {frequentErrors.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="guide-section container" id="examen-medico">
            <div className="section-head">
              <span className="section-kicker">
                Una herramienta dentro del proceso
              </span>
              <h2>
                El examen médico forma parte de la vigilancia, pero no la
                sustituye
              </h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                El examen médico permite obtener información del trabajador en
                un momento determinado. Dentro de un programa de vigilancia, esa
                evaluación responde además a una pregunta de seguimiento.
              </p>
              <p className="lead">
                Importa qué buscamos, qué encontramos anteriormente y qué
                necesitaremos revisar después. Por eso, dos exámenes
                aparentemente similares pueden tener objetivos diferentes según
                el riesgo y el momento de la vigilancia.
              </p>
              <p className="lead">
                <a className="guide-inline-link" href="/examen-medico-laboral/">
                  Conoce más sobre el examen médico laboral
                </a>
              </p>
            </div>
          </section>

          <section className="guide-section container" id="expediente">
            <div className="section-head">
              <span className="section-kicker">La memoria del seguimiento</span>
              <h2>Sin historial es difícil hablar de vigilancia</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                Comparar resultados requiere conservar las evaluaciones
                anteriores y saber en qué contexto fueron realizadas. Si cada
                estudio queda como un archivo independiente, buena parte de esa
                continuidad debe reconstruirse manualmente.
              </p>
              <p className="lead">
                El expediente médico laboral permite reunir antecedentes,
                evaluaciones, estudios y documentos dentro del historial del
                trabajador para que la siguiente valoración pueda partir de lo
                que ya sabemos.
              </p>
              <p className="lead">
                <a
                  className="guide-inline-link"
                  href="/expediente-medico-laboral/"
                >
                  Conoce cómo organizar un expediente médico laboral
                </a>
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
                <span className="section-kicker">Del programa al seguimiento</span>
                <h2>
                  Cómo ayuda Ramazzini a organizar la vigilancia de la salud
                </h2>
                <p className="lead">
                  Cuando se atienden muchos trabajadores, una parte importante
                  del reto está en conservar la continuidad: saber quién fue
                  evaluado, consultar resultados anteriores y mantener cada
                  nueva evaluación dentro del historial correcto.
                </p>
                <p className="lead">
                  Ramazzini organiza la información alrededor del trabajador y
                  permite que las evaluaciones, resultados y documentos
                  permanezcan relacionados con su empresa, centro de trabajo e
                  historial.
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
              <div className="mock-window screenshot-window">
                <div className="mock-window-bar" aria-hidden="true">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <Image
                  src="/capturas/Historia-Clara.jpg"
                  alt="Historia clínica ocupacional en Ramazzini"
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
              <h2>
                Preguntas frecuentes sobre vigilancia de la salud de los
                trabajadores
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
                Convierte evaluaciones aisladas en un historial que puedas
                consultar
              </h2>
              <p className="lead">
                Mantén evaluaciones, resultados y documentos relacionados con
                cada trabajador para dar continuidad a la vigilancia de su
                salud.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={appUrl}>
                  Prueba Ramazzini gratis 15 días <ArrowRight size={18} />
                </a>
                <a className="button button-secondary" href="/#demo">
                  <CalendarDays size={18} /> Agenda una demo
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
