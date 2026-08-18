import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import { Footer } from "../components/Footer";
import { GuideContextTriad } from "../components/GuideContextTriad";
import { Header } from "../components/Header";
import { IsoMark } from "../components/IsoMark";

const pageTitle =
  "Aptitud médica laboral: qué es y cómo se determina | Ramazzini";
const pageDescription =
  "Conoce qué significa la aptitud médica laboral, qué elementos se consideran para determinarla y cómo documentar conclusiones y restricciones.";
const pagePath = "/aptitud-medica-laboral/";

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
  { href: "#salud-vs-aptitud", label: "Salud vs. aptitud" },
  { href: "#que-se-considera", label: "Qué se considera" },
  { href: "#trabajador-puesto-riesgo", label: "Trabajador, puesto y riesgo" },
  { href: "#tipos-de-aptitud", label: "Tipos de aptitud" },
  { href: "#restricciones", label: "Restricciones" },
  { href: "#reevaluacion", label: "Reevaluación" },
  { href: "#documentacion", label: "Documentación" },
  { href: "#confidencialidad", label: "Confidencialidad" },
  { href: "#mexico", label: "México" },
  { href: "#errores", label: "Errores frecuentes" },
  { href: "#ejemplos", label: "Ejemplos" },
  { href: "#expediente-medico-laboral", label: "Expediente médico laboral" },
  { href: "#ramazzini", label: "Ramazzini" },
  { href: "#preguntas-frecuentes", label: "Preguntas frecuentes" },
];

const considerationFactors = [
  {
    title: "Estado actual de salud",
    text: "Los padecimientos conocidos, síntomas y condiciones presentes importan en la medida en que puedan modificar la capacidad para realizar el trabajo o relacionarse con sus riesgos.",
  },
  {
    title: "Antecedentes relevantes",
    text: "No todo antecedente tiene el mismo peso. Interesan especialmente aquellos que ayudan a interpretar los hallazgos actuales o que pueden tener implicaciones para el puesto evaluado.",
  },
  {
    title: "Exploración física",
    text: "Permite buscar y valorar hallazgos clínicos en función de lo que exige el puesto, en lugar de interpretar cada dato de manera aislada.",
  },
  {
    title: "Estudios complementarios",
    text: "Audiometría, espirometría, laboratorio, estudios de imagen u otras pruebas aportan valor cuando responden a una indicación clínica, a una exposición o a una exigencia relevante del trabajo.",
  },
  {
    title: "Funciones y exigencias del puesto",
    text: "Conocer qué hace realmente el trabajador es indispensable. Las demandas físicas, sensoriales, cognitivas y funcionales del puesto dan contexto a los hallazgos de la evaluación.",
  },
  {
    title: "Riesgos y exposiciones",
    text: "Ruido, sustancias químicas, trabajo en alturas, conducción, temperaturas extremas y otros riesgos pueden hacer relevantes condiciones que en otro entorno tendrían poca trascendencia laboral.",
  },
  {
    title: "Capacidad funcional",
    text: "Cuando existe una condición de salud, importa valorar qué puede hacer el trabajador en la práctica y si existe una limitación que afecte alguna función esencial del puesto.",
  },
  {
    title: "Posibles medidas de control",
    text: "Una condición no siempre conduce a una decisión binaria entre apto y no apto. En algunos casos puede manejarse con seguimiento, precauciones, adaptaciones o restricciones bien definidas.",
  },
];

const outcomeTypes = [
  {
    title: "Apto sin restricciones",
    text: "No se identifican condiciones que, en ese momento y para el puesto evaluado, requieran limitar las actividades del trabajador.",
  },
  {
    title: "Apto con precaución",
    text: "El trabajador puede desempeñar el puesto, pero existe alguna condición que justifica vigilancia o revisiones médicas más frecuentes.",
  },
  {
    title: "Apto con restricciones",
    text: "Puede realizar el trabajo siempre que se respeten determinadas limitaciones relacionadas con sus funciones, exposiciones o condiciones de salud.",
  },
  {
    title: "No apto",
    text: "Se identifica una condición que, en las circunstancias evaluadas, resulta incompatible con una función esencial o con un riesgo relevante del puesto.",
  },
  {
    title: "Evaluación no completada o necesidad de tratamiento",
    text: "Todavía no hay elementos suficientes para emitir una conclusión definitiva, o es necesario completar estudios, tratamiento o valoración antes de decidir.",
  },
];

const reevaluationReasons = [
  "Recuperación de una enfermedad o lesión que había limitado temporalmente el trabajo.",
  "Inicio o ajuste de un tratamiento relevante para la condición evaluada.",
  "Obtención de estudios o valoraciones que estaban pendientes.",
  "Cambio importante en el estado de salud del trabajador.",
  "Revisión de una restricción o precaución previamente establecida.",
  "Cambio de puesto, funciones o condiciones de exposición.",
];

const documentationFields = [
  {
    term: "Identificación del trabajador",
    detail:
      "Datos suficientes para relacionar la conclusión con la persona evaluada sin ambigüedad.",
  },
  {
    term: "Puesto evaluado",
    detail:
      "La aptitud tiene sentido respecto de un trabajo concreto, por lo que conviene identificar claramente el puesto o las funciones consideradas.",
  },
  {
    term: "Fecha de evaluación",
    detail:
      "Permite ubicar la conclusión dentro del historial del trabajador y saber cuándo fue emitida.",
  },
  {
    term: "Conclusión de aptitud",
    detail:
      "La categoría o resultado utilizado por el médico u organización para expresar la decisión.",
  },
  {
    term: "Restricciones o recomendaciones",
    detail:
      "Cuando existan, deben redactarse de manera concreta y suficientemente clara para poder aplicarse.",
  },
  {
    term: "Vigencia o reevaluación",
    detail:
      "Si la conclusión no es indefinida, puede indicarse cuándo o bajo qué condiciones deberá revisarse nuevamente.",
  },
  {
    term: "Profesional responsable",
    detail:
      "Identificación del médico que realizó la valoración y emitió la conclusión correspondiente.",
  },
];

const mexicoBlocks = [
  {
    title: "NOM-030-STPS-2009 — Servicios preventivos de seguridad y salud en el trabajo",
    text: "Forma parte del marco general para organizar las acciones preventivas y el seguimiento de la salud de los trabajadores dentro del centro de trabajo.",
  },
  {
    title: "Normas relacionadas con riesgos específicos",
    text: (
      <>
        Determinadas exposiciones y actividades cuentan con disposiciones
        particulares que pueden requerir{" "}
        <a
          className="guide-inline-link"
          href="/vigilancia-de-la-salud-de-los-trabajadores/"
        >
          vigilancia de la salud
        </a>
        , estudios o criterios adicionales. Por eso, no siempre tiene sentido
        aplicar la misma batería de evaluación a todos los puestos.
      </>
    ),
  },
  {
    title: "Expediente y documentación clínica",
    text: "La información que sustenta la conclusión de aptitud debe conservarse y manejarse considerando las disposiciones aplicables al expediente, confidencialidad y protección de la información.",
  },
];

const frequentErrors = [
  {
    title: "Confundir diagnóstico con aptitud",
    text: "Encontrar una enfermedad no resuelve por sí solo si el trabajador puede desempeñar el puesto. Falta valorar qué implicación tiene realmente para ese trabajo.",
  },
  {
    title: "Valorar al trabajador sin conocer el puesto",
    text: "El nombre del puesto rara vez es suficiente. Sin entender qué hace la persona y cuáles son sus exigencias, es fácil dar demasiado o muy poco peso a un hallazgo.",
  },
  {
    title: "Aplicar los mismos criterios a todos",
    text: "Una misma condición puede ser irrelevante en un trabajo y crítica en otro. Utilizar umbrales o reglas idénticas sin considerar el contexto puede producir conclusiones poco útiles.",
  },
  {
    title: "Solicitar estudios sin una razón clara",
    text: "Más estudios no significan automáticamente una mejor evaluación. Cada prueba debería responder a una indicación clínica, una exposición o una exigencia relevante del puesto.",
  },
  {
    title: "Redactar restricciones ambiguas",
    text: "Frases como “evitar esfuerzos” o “actividad ligera” pueden interpretarse de muchas maneras. Una restricción útil necesita traducirse en algo aplicable al trabajo real.",
  },
  {
    title: "Convertir recomendaciones en restricciones",
    text: "Una indicación preventiva o de seguimiento no necesariamente limita la capacidad para trabajar. Confundir ambas cosas puede restringir innecesariamente al trabajador.",
  },
  {
    title: "Tratar la aptitud como definitiva",
    text: "La salud, el puesto y las exposiciones cambian. Algunas conclusiones necesitan una fecha, condición o criterio claro de reevaluación.",
  },
];

const conceptualCases = [
  {
    title: "Alteración visual",
    hallazgo: "Disminución de la agudeza visual corregible.",
    puestos: [
      {
        label: "Trabajo administrativo",
        text: "Las tareas habituales pueden realizarse adecuadamente con la corrección indicada y sin otras exigencias visuales especiales.",
      },
      {
        label: "Trabajo con exigencia visual crítica",
        text: "La misma alteración puede adquirir mayor relevancia si determinadas capacidades visuales son esenciales para realizar la tarea de forma segura.",
      },
    ],
    note: "El hallazgo es el mismo; lo que cambia es cuánto importa para las funciones evaluadas.",
  },
  {
    title: "Limitación musculoesquelética temporal",
    hallazgo: "Limitación funcional durante la recuperación de una lesión.",
    puestos: [
      {
        label: "Funciones predominantemente sedentarias",
        text: "La limitación puede tener poca repercusión sobre las actividades esenciales del puesto.",
      },
      {
        label: "Manipulación frecuente de cargas",
        text: "La misma condición puede justificar temporalmente limitar tareas que exigen fuerza, movilidad o manipulación manual.",
      },
    ],
    note: "No basta con conocer la lesión; hay que entender qué necesita hacer realmente el trabajador.",
  },
  {
    title: "Condición médica en seguimiento",
    hallazgo: "Padecimiento conocido, actualmente controlado y bajo vigilancia.",
    puestos: [
      {
        label: "Puesto sin incompatibilidad relevante",
        text: "Si la condición no interfiere con las funciones esenciales ni aumenta de forma relevante el riesgo del trabajo, puede no ser necesario limitar la actividad.",
      },
      {
        label: "Puesto con una exigencia especialmente relevante",
        text: "Si las consecuencias de una descompensación tienen mayor importancia para ese trabajo, puede ser necesario establecer precauciones, seguimiento adicional o completar la valoración.",
      },
    ],
    note: "Tener un diagnóstico conocido no conduce automáticamente a una conclusión de no aptitud.",
  },
];

const ramazziniCapabilities = [
  {
    title: "Evaluación y aptitud conectadas",
    text: "La conclusión puede generarse a partir del mismo expediente donde se documentaron los antecedentes, exploración y demás evaluaciones del trabajador.",
  },
  {
    title: "Historial disponible",
    text: "Las valoraciones y documentos anteriores permanecen disponibles para consultar el contexto antes de emitir una nueva conclusión.",
  },
  {
    title: "Restricciones y recomendaciones",
    text: "La aptitud puede documentarse junto con las indicaciones que correspondan, manteniendo clara la conclusión emitida.",
  },
  {
    title: "Documento profesional",
    text: "El sistema genera un PDF de aptitud con los datos del trabajador y la identidad de la organización, listo para entregar.",
  },
  {
    title: "Expediente integrado",
    text: "El documento generado permanece relacionado con el trabajador, en lugar de convertirse en un archivo aislado fuera de su historial.",
  },
  {
    title: "Organización por empresa",
    text: "Los trabajadores y sus evaluaciones se mantienen relacionados con la empresa y centro de trabajo correspondientes.",
  },
];

const faqs = [
  [
    "¿Qué significa aptitud médica laboral?",
    "Es la conclusión que resulta de valorar cómo se relacionan las condiciones de salud del trabajador con las funciones, exigencias y riesgos de un puesto determinado.",
  ],
  [
    "¿Tener una enfermedad significa ser no apto?",
    "No. Un diagnóstico por sí solo no determina la aptitud. Su importancia depende de la repercusión funcional, el grado de control y su relación con las actividades y riesgos del trabajo evaluado.",
  ],
  [
    "¿Qué significa ser apto con restricciones?",
    "Significa que el trabajador puede desempeñar el puesto siempre que se respeten determinadas limitaciones relacionadas con actividades, exposiciones o condiciones concretas del trabajo.",
  ],
  [
    "¿Existe una clasificación universal de aptitud laboral?",
    "No existe una única clasificación utilizada en todos los contextos. Profesionales y organizaciones pueden emplear categorías distintas. Un ejemplo publicado es el modelo de Kashima, que contempla aptitud sin restricciones, aptitud con precaución, aptitud con restricciones, no aptitud y evaluación todavía no completada.",
  ],
  [
    "¿La aptitud médica es permanente?",
    "No necesariamente. Puede cambiar si cambia el estado de salud del trabajador, sus funciones, las exposiciones o la información disponible. Algunas conclusiones requieren seguimiento o reevaluación.",
  ],
  [
    "¿La empresa necesita conocer el diagnóstico del trabajador?",
    "Para gestionar la aptitud suele ser más importante conocer la conclusión, las restricciones aplicables y las necesidades de seguimiento que disponer de toda la información clínica utilizada por el médico.",
  ],
  [
    "¿Por qué es necesario conocer el puesto para determinar la aptitud?",
    "Porque un mismo hallazgo puede tener poca importancia para determinadas funciones y ser relevante para otras. Sin conocer el trabajo real, es difícil valorar correctamente su repercusión.",
  ],
  [
    "¿Cómo se relaciona la aptitud con el expediente médico laboral?",
    "La conclusión surge de una evaluación y debería poder relacionarse con los antecedentes, hallazgos y estudios que la sustentan. Mantenerla dentro del expediente facilita la continuidad en valoraciones posteriores.",
  ],
] as const;

export default function AptitudMedicaLaboralPage() {
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
              <h1>Aptitud médica laboral: qué es y cómo se determina</h1>
              <div className="stack guide-prose">
                <p className="lead">
                  La aptitud médica laboral no se define solamente por lo que aparece 
                  en la historia clínica o por si un estudio salió dentro o fuera de 
                  rango. Lo importante es entender qué significan esos hallazgos para
                  el trabajo concreto que realizará la persona.
                </p>
                <p className="lead">
                  Una misma condición puede no tener mayor relevancia en un puesto y 
                  ser determinante en otro. Por eso, valorar aptitud implica poner en 
                  relación al trabajador con las tareas, exigencias y riesgos reales 
                  de su puesto.
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
              <h2>¿Qué es la aptitud médica laboral?</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                En términos prácticos, la aptitud es la conclusión a la que llega 
                el médico después de integrar dos cosas: cómo está el trabajador y 
                qué le exige su trabajo.
              </p>
              <p className="lead">
                No se trata de decidir si alguien está “sano” o “enfermo”. Se trata 
                de establecer si, con sus condiciones actuales de salud, puede realizar 
                las funciones esenciales del puesto de forma adecuada, si necesita alguna 
                precaución o restricción, o si hace falta completar la evaluación antes 
                de tomar una decisión.
              </p>
              <p className="lead">
                Por eso, el mismo diagnóstico no necesariamente conduce a la misma conclusión 
                de aptitud en todos los trabajadores. Su importancia depende de cómo afecta —o 
                no— las actividades que la persona necesita realizar y de las exposiciones o 
                condiciones a las que estará sometida.
              </p>
              <aside className="guide-callout">
                <p>
                  La aptitud no depende de la ausencia de enfermedad, sino de lo que esa condición
                  significa para el trabajo que la persona realiza.
                </p>
              </aside>
            </div>
          </section>

          <section className="guide-section container" id="salud-vs-aptitud">
            <div className="section-head">
              <span className="section-kicker">En la práctica</span>
              <h2>Estado de salud y aptitud laboral no son lo mismo</h2>
              <p className="lead">
                En una evaluación podemos encontrar diagnósticos conocidos, síntomas,
                antecedentes o resultados fuera de rango. Pero el hallazgo médico, por sí solo,
                no resuelve la aptitud. El siguiente paso es valorar qué importancia
                tiene realmente para las actividades y condiciones del puesto.
              </p>
            </div>
            <div className="before-after">
              <article className="card">
                <h3>Tener una enfermedad no significa automáticamente ser no apto</h3>
                <p className="lead">
                  Una condición bien controlada puede no interferir en absoluto con el
                  trabajo. En otros casos puede requerir seguimiento, alguna precaución
                  o una restricción concreta, sin que eso necesariamente impida
                  desempeñar el trabajo.
                </p>
              </article>
              <article className="card good">
                <h3>
                  Estar aparentemente sano no significa ser apto para cualquier
                  trabajo
                </h3>
                <p className="lead">
                  Hay puestos en los que ciertas capacidades físicas, sensoriales o
                  funcionales tienen un peso especial. Una evaluación sin hallazgos
                  importantes no sustituye el análisis de lo que ese trabajo exige.
                </p>
              </article>
            </div>
            <p className="lead guide-follow-copy">
              Por eso, un mismo hallazgo puede ser poco relevante para un puesto y
              justificar una precaución, restricción o valoración adicional en otro.
            </p>
          </section>

          <section className="guide-section container" id="que-se-considera">
            <div className="section-head">
              <span className="section-kicker">Elementos de valoración</span>
              <h2>¿Qué se considera para determinar la aptitud médica laboral?</h2>
              <p className="lead">
                No hay una batería de estudios que, por sí sola, determine la aptitud.
                La información que realmente importa cambia según el puesto, sus
                exigencias y los riesgos a los que estará expuesto el trabajador.
                La valoración consiste en integrar esos elementos y dar a cada hallazgo
                el peso que tiene en ese contexto.
              </p>
            </div>
            <ol className="guide-factor-list">
              {considerationFactors.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="guide-section container"
            id="trabajador-puesto-riesgo"
          >
            <div className="section-head">
              <span className="section-kicker">El contexto importa</span>
              <h2>La aptitud se valora para un trabajo concreto</h2>
              <p className="lead">
                Un hallazgo médico adquiere relevancia laboral cuando lo ponemos frente
                a las tareas, exigencias y riesgos reales del puesto. Sin ese contexto,
                podemos describir el estado de salud del trabajador, pero difícilmente
                valorar su aptitud con precisión.
              </p>
            </div>
            <GuideContextTriad
              topTitle="Trabajador"
              topText="Su estado de salud, antecedentes, capacidades y hallazgos relevantes para la evaluación."
              leftTitle="Puesto"
              leftText="Lo que realmente hace y las funciones que necesita desempeñar."
              rightTitle="Riesgos y exigencias"
              rightText="La exposición a agentes de riesgos y las demandas físicas, sensoriales o cognitivas relevantes para ese puesto."
              caption="La aptitud se determina al poner en relación el trabajador, el puesto y los riesgos."
            />
            <p className="lead guide-follow-copy">
              Por eso, una conclusión de aptitud tiene sentido respecto de un puesto
              determinado. El mismo trabajador, con los mismos hallazgos, puede requerir
              una valoración diferente si cambian sus funciones o las condiciones de
              exposición.
            </p>
          </section>

          <section className="guide-section container" id="tipos-de-aptitud">
            <div className="section-head">
              <span className="section-kicker">Conclusiones</span>
              <h2>¿Qué tipos de conclusión de aptitud pueden utilizarse?</h2>
              <p className="lead">
                En la práctica no existe una única forma de expresar la aptitud.
                Las categorías cambian entre profesionales, organizaciones y
                programas, y muchas veces responden también al tipo de trabajo
                que se está evaluando.
              </p>
              <p className="lead">
                Más que el nombre de la categoría, importa que la conclusión
                deje claro si el trabajador puede desempeñar el puesto tal como
                está, si necesita seguimiento, alguna restricción o si todavía
                falta información para tomar una decisión.
              </p>
              <p className="lead">
                Una clasificación especialmente útil es la descrita por Sara R.
                Kashima en 2003 dentro de un programa de aptitud para
                conductores profesionales. Su modelo contempla cinco posibles
                resultados:
              </p>
            </div>
            <ol className="guide-outcomes">
              {outcomeTypes.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
            <div className="stack guide-follow-copy">
              <p className="lead">
                El valor de este modelo está en que evita reducir toda
                valoración a un resultado binario de “apto” o “no apto”. Aun
                así, sigue siendo una propuesta publicada para un programa
                concreto, no una clasificación universal. Otros profesionales
                pueden utilizar términos o categorías diferentes.
              </p>
              <p className="guide-disclaimer">
                Referencia: Kashima SR.{" "}
                <cite>
                  A petroleum company’s experience in implementing a
                  comprehensive medical fitness for duty program for
                  professional truck drivers.
                </cite>{" "}
                Journal of Occupational and Environmental Medicine.
                2003;45(2):185–196. DOI:{" "}
                <a
                  className="guide-inline-link"
                  href="https://doi.org/10.1097/01.JOM.0000048164.87707.B4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  10.1097/01.JOM.0000048164.87707.B4
                </a>
                .
              </p>
            </div>
          </section>

          <section className="guide-section container" id="restricciones">
            <div className="section-head">
              <span className="section-kicker">Cuando hay límites</span>
              <h2>¿Qué significa “apto con restricciones”?</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                Una restricción aparece cuando el trabajador puede continuar
                desempeñando el puesto, pero alguna actividad, exposición o
                condición concreta necesita limitarse.
              </p>
              <p className="lead">
                Lo útil no es comunicar el diagnóstico, sino traducir su
                implicación laboral. “Evitar manipulación manual de cargas
                mayores a determinado peso”, por ejemplo, aporta mucho más para
                gestionar el trabajo que informar simplemente cuál es la lesión
                que originó la indicación.
              </p>
              <p className="lead">
                Algunas restricciones son temporales; otras pueden mantenerse
                mientras persista la condición que las justifica. Cuando se
                espera un cambio, conviene dejar claro cuándo o bajo qué
                criterio debe revisarse nuevamente.
              </p>
              <aside className="guide-callout">
                <p>
                  Una buena restricción dice qué debe limitarse en el trabajo,
                  no qué diagnóstico tiene el trabajador.
                </p>
              </aside>
              <h3>Restricción y recomendación no son necesariamente lo mismo</h3>
              <p className="lead">
                Una restricción establece un límite que debe respetarse para
                realizar el trabajo en las condiciones evaluadas. Una
                recomendación, en cambio, puede orientar prevención,
                seguimiento o cuidado sin necesariamente modificar las
                funciones del puesto.
              </p>
              <p className="lead">
                La diferencia parece pequeña, pero en la práctica es importante:
                una recomendación redactada como si fuera una restricción puede
                terminar limitando innecesariamente al trabajador.
              </p>
            </div>
          </section>

          <section className="guide-section container" id="reevaluacion">
            <div className="section-head">
              <span className="section-kicker">Seguimiento</span>
              <h2>Aptitud temporal y reevaluación</h2>
              <p className="lead">
                La conclusión de aptitud describe una situación en un momento
                determinado; no necesariamente permanece igual con el tiempo.
              </p>
              <p className="lead">
                Una lesión puede recuperarse, una enfermedad puede controlarse,
                pueden aparecer nuevos estudios o incluso cambiar las funciones
                del puesto. En cualquiera de esos escenarios, una conclusión
                previa puede dejar de representar adecuadamente la situación
                actual.
              </p>
              <p className="lead">
                Una nueva valoración puede ser especialmente útil después de:
              </p>
            </div>
            <ul className="guide-documents">
              {reevaluationReasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="lead guide-follow-copy">
              Cuando se espera reevaluar al trabajador, conviene dejar
              documentado qué motivó la conclusión temporal y qué situación,
              fecha o información deberá revisarse después.
            </p>
          </section>

          <section className="guide-section container" id="documentacion">
            <div className="section-head">
              <span className="section-kicker">Registro</span>
              <h2>¿Cómo se documenta una conclusión de aptitud?</h2>
              <p className="lead">
                El documento de aptitud debería permitir entender, sin
                reconstruir toda la evaluación, quién fue valorado, para qué
                puesto y cuál fue la conclusión. Según el contexto, puede
                incluir:
              </p>
            </div>
            <dl className="guide-fields">
              {documentationFields.map((item) => (
                <div key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>
            <p className="lead guide-follow-copy">
              El documento final resume la decisión, pero debería poder
              relacionarse con la evaluación que la sustenta y con el expediente
              médico laboral donde queda el resto de la información clínica.
            </p>
          </section>

          <section className="guide-section container" id="confidencialidad">
            <div className="section-head">
              <span className="section-kicker">Información necesaria</span>
              <h2>Aptitud médica laboral y confidencialidad</h2>
              <p className="lead">
                Para llegar a una conclusión, el médico puede necesitar
                antecedentes, diagnósticos, estudios y otros datos clínicos.
                Otra cuestión distinta es cuánto de esa información necesita
                conocer la organización que recibe el resultado.
              </p>
            </div>
            <div className="before-after">
              <article className="card">
                <h3>Información clínica utilizada para determinar la aptitud</h3>
                <p className="lead">
                  Es la información que el médico necesita para interpretar los
                  hallazgos y fundamentar su conclusión: antecedentes,
                  exploración, estudios, diagnósticos y razonamiento clínico.
                </p>
              </article>
              <article className="card good">
                <h3>
                  Información necesaria para gestionar la conclusión laboral
                </h3>
                <p className="lead">
                  Para la empresa suele ser más relevante conocer la aptitud,
                  las restricciones aplicables y cualquier necesidad de
                  seguimiento que disponer del diagnóstico completo o de
                  antecedentes que no cambian la forma de gestionar el puesto.
                </p>
              </article>
            </div>
            <p className="lead guide-follow-copy">
              Mantener esa separación permite comunicar lo necesario para
              gestionar el trabajo sin convertir el certificado o dictamen de
              aptitud en un resumen innecesario de la historia clínica del
              trabajador.
            </p>
          </section>

          <section className="guide-section container" id="mexico">
            <div className="guide-context">
              <div className="section-head">
                <span className="section-kicker">Contexto local</span>
                <h2>Aptitud médica laboral en México</h2>
                <p className="lead">
                  En México no existe una sola Norma Oficial Mexicana que
                  defina una clasificación universal de aptitud aplicable a
                  todos los trabajadores, puestos y actividades.
                </p>
                <p className="lead">
                  En la práctica, la valoración debe construirse a partir del
                  puesto, los riesgos presentes y las disposiciones que
                  correspondan a cada actividad o exposición.
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
                Los criterios aplicables dependen del puesto, la actividad, los
                riesgos y el marco correspondiente. Esta guía presenta
                principios generales de valoración y no sustituye el análisis
                médico o regulatorio de cada caso.
              </p>
            </div>
          </section>

          <section className="guide-section container" id="errores">
            <div className="section-head">
              <span className="section-kicker">Errores que cambian la decisión</span>
              <h2>Errores frecuentes al determinar o documentar la aptitud</h2>
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

          <section className="guide-section container" id="ejemplos">
            <div className="section-head">
              <span className="section-kicker">El contexto cambia la lectura</span>
              <h2>El mismo hallazgo puede llevar a conclusiones diferentes</h2>
              <p className="lead">
                Estos ejemplos no pretenden establecer criterios de aptitud.
                Sólo muestran algo que ocurre constantemente en la práctica: el
                mismo hallazgo cambia de importancia cuando cambia el trabajo.
              </p>
            </div>
            <div className="guide-cases">
              {conceptualCases.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <dl>
                    <div>
                      <dt>Hallazgo</dt>
                      <dd>{item.hallazgo}</dd>
                    </div>
                    {item.puestos.map((puesto) => (
                      <div key={puesto.label}>
                        <dt>{puesto.label}</dt>
                        <dd>{puesto.text}</dd>
                      </div>
                    ))}
                  </dl>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="guide-section container"
            id="expediente-medico-laboral"
          >
            <div className="section-head">
              <span className="section-kicker">Continuidad</span>
              <h2>La conclusión no debería quedar aislada de la evaluación</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                El certificado o dictamen de aptitud resume una decisión, pero
                no contiene todo el razonamiento que permitió llegar a ella.
              </p>
              <p className="lead">
                Los antecedentes relevantes, hallazgos, estudios y demás
                elementos utilizados durante la valoración deben conservarse
                como parte de la información médica del trabajador.
              </p>
              <p className="lead">
                Por eso, la conclusión debe quedar relacionada con el{" "}
                <a
                  className="guide-inline-link"
                  href="/expediente-medico-laboral/"
                >
                  expediente médico laboral
                </a>{" "}
                del trabajador. Así es posible consultar después qué evaluación
                la originó, revisar antecedentes y mantener continuidad cuando
                llegue una nueva valoración.
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
                <h2>Cómo documenta Ramazzini una valoración de aptitud</h2>
                <p className="lead">
                  Ramazzini conecta la información clínica del trabajador, su
                  expediente y el documento de aptitud dentro del mismo flujo,
                  evitando que la conclusión termine separada de la evaluación
                  que la originó.
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
              <h2>Preguntas frecuentes sobre aptitud médica laboral</h2>
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
                Documenta la aptitud sin separarla del expediente del
                trabajador
              </h2>
              <p className="lead">
                Mantén la evaluación, el historial y los documentos de aptitud
                organizados dentro de una misma plataforma de salud ocupacional.
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
