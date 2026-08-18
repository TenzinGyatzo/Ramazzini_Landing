import Image from "next/image";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import { Footer } from "../components/Footer";
import { GuideContextTriad } from "../components/GuideContextTriad";
import { Header } from "../components/Header";
import { IsoMark } from "../components/IsoMark";

const appUrl =
  process.env.NEXT_PUBLIC_APP_URL || "https://ramazzini.app/auth/onboarding";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "526681702850";

const toc = [
  { href: "#que-es", label: "Qué es" },
  { href: "#puesto-y-riesgos", label: "Puesto y riesgos" },
  { href: "#tipos-de-examen", label: "Tipos de examen" },
  { href: "#que-se-evalua", label: "Qué se evalúa" },
  { href: "#estudios-complementarios", label: "Estudios" },
  { href: "#examen-y-aptitud", label: "Examen y aptitud" },
  { href: "#expediente", label: "Expediente" },
  { href: "#mexico", label: "México" },
  { href: "#errores", label: "Errores frecuentes" },
  { href: "#ejemplos", label: "Ejemplos" },
  { href: "#ramazzini", label: "Ramazzini" },
  { href: "#preguntas-frecuentes", label: "Preguntas frecuentes" },
];

const examTypes = [
  {
    title: "Examen de ingreso",
    text: "Se realiza antes de iniciar un puesto o actividad. Permite establecer una referencia inicial de salud y valorar los hallazgos en función del trabajo que la persona realizará.",
  },
  {
    title: "Examen periódico",
    text: "Permite revisar la evolución del trabajador y buscar cambios que puedan relacionarse con su estado de salud, sus exposiciones o las exigencias del puesto.",
  },
  {
    title: "Examen por cambio de puesto",
    text: "Cuando cambian las funciones o exposiciones, una evaluación previa puede dejar de responder a las condiciones del nuevo trabajo.",
  },
  {
    title: "Examen de reincorporación",
    text: "Después de una enfermedad, lesión o ausencia relevante, puede ser necesario valorar si existen cambios que deban considerarse antes de retomar determinadas actividades.",
  },
  {
    title: "Examen de egreso",
    text: "Se realiza al finalizar una relación o exposición laboral y puede ayudar a documentar las condiciones de salud existentes en ese momento.",
  },
  {
    title: "Evaluación extraordinaria",
    text: "Puede realizarse cuando aparece una situación que justifica revisar al trabajador fuera del esquema habitual: nuevos síntomas, cambios importantes de salud, incidentes u otras circunstancias relevantes.",
  },
];

const evaluationElements = [
  {
    title: "Antecedentes médicos",
    text: "Padecimientos conocidos, cirugías, lesiones, tratamientos y otros antecedentes adquieren importancia cuando ayudan a interpretar la situación actual o tienen alguna repercusión para el trabajo.",
  },
  {
    title: "Antecedentes laborales",
    text: "Los puestos anteriores y las exposiciones acumuladas pueden aportar contexto que no aparece al revisar únicamente el trabajo actual.",
  },
  {
    title: "Síntomas actuales",
    text: "El interrogatorio permite identificar molestias o cambios recientes y relacionarlos, cuando corresponde, con actividades, exposiciones o condiciones de trabajo.",
  },
  {
    title: "Exploración física",
    text: "Los hallazgos se interpretan con especial atención a los sistemas y funciones que resultan relevantes para el puesto y para el motivo de la evaluación.",
  },
  {
    title: "Capacidades funcionales",
    text: "En algunos trabajos importa especialmente conocer cómo se encuentra la movilidad, fuerza, visión, audición u otras capacidades necesarias para realizar determinadas tareas.",
  },
  {
    title: "Riesgos y exposiciones",
    text: "Conocer los agentes y condiciones presentes ayuda a decidir qué aspectos requieren mayor atención y qué vigilancia puede ser necesaria.",
  },
  {
    title: "Estudios previos y evolución",
    text: "Comparar con evaluaciones anteriores puede mostrar cambios que un resultado aislado no permite apreciar.",
  },
];

const complementaryStudies = [
  {
    title: "Audiometría",
    text: "Puede ser especialmente relevante cuando existe exposición a ruido o cuando la audición tiene una importancia particular para las funciones evaluadas.",
  },
  {
    title: "Espirometría",
    text: "Puede aportar información cuando interesa valorar la función respiratoria, particularmente ante determinadas exposiciones o antecedentes.",
  },
  {
    title: "Estudios de laboratorio",
    text: "Su utilidad depende de lo que se busca vigilar o descartar. No todos los perfiles aportan el mismo valor para todos los trabajadores.",
  },
  {
    title: "Evaluación visual",
    text: "Puede cobrar especial importancia en actividades donde determinadas capacidades visuales forman parte relevante del trabajo.",
  },
  {
    title: "Electrocardiograma",
    text: "Puede formar parte de la evaluación cuando existe una indicación clínica o el contexto del trabajador justifica obtener información cardiovascular adicional.",
  },
  {
    title: "Estudios de imagen",
    text: "Radiografías y otros estudios pueden utilizarse cuando existe una indicación específica; no deberían entenderse como componentes automáticos de cualquier examen laboral.",
  },
];

const mexicoBlocks = [
  {
    title:
      "NOM-030-STPS-2009 — Servicios preventivos de seguridad y salud en el trabajo",
    text: (
      <>
        Forma parte del marco general para organizar las acciones preventivas de
        seguridad y salud en los centros de trabajo y considerar las necesidades
        de{" "}
        <a
          className="guide-inline-link"
          href="/vigilancia-de-la-salud-de-los-trabajadores/"
        >
          vigilancia de la salud de la población trabajadora
        </a>
        .
      </>
    ),
  },
  {
    title: "NOM-004-SSA3-2012 — Del expediente clínico",
    text: "Establece criterios relacionados con la integración, uso, manejo, archivo, conservación y confidencialidad del expediente clínico dentro de su ámbito de aplicación.",
  },
  {
    title: "Normas relacionadas con riesgos específicos",
    text: "Exposiciones como ruido, agentes químicos y otras condiciones de trabajo pueden estar sujetas a disposiciones particulares que influyen en la vigilancia de la salud y en los estudios que resultan pertinentes.",
  },
  {
    title: "Criterios propios del puesto y de la organización",
    text: "Además del marco normativo, la evaluación necesita considerar las funciones reales, los riesgos identificados y los criterios médicos razonables para el trabajo que se está valorando.",
  },
];

const frequentErrors = [
  {
    title: "Aplicar la misma batería a todos",
    text: "Una lista fija de estudios simplifica la operación, pero puede terminar solicitando pruebas sin utilidad para algunos trabajadores y dejando fuera otras que sí serían relevantes para determinados riesgos.",
  },
  {
    title: "Evaluar sin conocer realmente el puesto",
    text: "El nombre del puesto puede decir poco sobre las tareas reales. Sin conocer funciones, exigencias y exposiciones es fácil interpretar un hallazgo fuera de contexto.",
  },
  {
    title: "Confundir un resultado fuera de rango con no aptitud",
    text: "Un valor alterado merece interpretación, no una conclusión automática. Su importancia laboral depende del hallazgo, del trabajador y del trabajo evaluado.",
  },
  {
    title: "Pedir estudios sin saber qué decisión pueden cambiar",
    text: "Una prueba aporta poco si no existe una razón clara para solicitarla o si su resultado no modificará la evaluación, el seguimiento o alguna conducta posterior.",
  },
  {
    title: "Repetir información que ya existe",
    text: "Volver a capturar antecedentes y datos del trabajador en cada formato consume tiempo y aumenta la posibilidad de que aparezcan versiones distintas de la misma información.",
  },
  {
    title: "Guardar cada examen como un documento aislado",
    text: "Cuando cada evaluación termina únicamente en un PDF, revisar antecedentes y comparar resultados puede exigir abrir archivos uno por uno.",
  },
  {
    title: "No conservar el contexto de la evaluación",
    text: "Un resultado pierde parte de su significado si después no sabemos qué puesto tenía el trabajador, por qué fue evaluado o qué exposición se estaba vigilando.",
  },
];

const conceptualCases = [
  {
    title: "Dos trabajadores, distinta exposición",
    situacion:
      "Ambos acuden a examen periódico y ninguno refiere síntomas importantes.",
    contexto:
      "Uno trabaja habitualmente en un ambiente con exposición relevante a ruido.",
    queCambia:
      "La vigilancia auditiva adquiere una importancia que probablemente no tendría en otro trabajador sin esa exposición.",
    conclusion:
      "El motivo del examen puede ser el mismo; la exposición cambia qué información necesitamos vigilar.",
  },
  {
    title: "El mismo trabajador después de una lesión",
    situacion:
      "Un trabajador regresa después de recuperarse de una lesión musculoesquelética.",
    contexto:
      "Antes de la ausencia realizaba tareas con demanda física importante.",
    queCambia:
      "La evaluación de reincorporación necesita prestar especial atención a la recuperación funcional y a las actividades que deberá retomar.",
    conclusion:
      "No estamos repitiendo simplemente su último examen: existe una pregunta nueva que resolver.",
  },
  {
    title: "Cambio de puesto",
    situacion:
      "Un trabajador con evaluaciones periódicas previas pasa a realizar funciones diferentes.",
    contexto:
      "El nuevo puesto incorpora exigencias o exposiciones que antes no formaban parte de su trabajo.",
    queCambia:
      "Los antecedentes siguen siendo útiles, pero puede ser necesario revisar aspectos que anteriormente tenían poca relevancia.",
    conclusion:
      "El historial permanece; lo que cambia es el contexto desde el que lo interpretamos.",
  },
];

const ramazziniCapabilities = [
  {
    title: "Evaluaciones diseñadas para salud ocupacional",
    text: "Historias clínicas, exploraciones físicas, audiometrías, exámenes de la vista y otras evaluaciones utilizan formatos preparados para este tipo de atención.",
  },
  {
    title: "Datos que se reutilizan",
    text: "La información del trabajador, empresa y centro de trabajo puede aprovecharse en nuevas evaluaciones y documentos sin volver a capturarla desde cero.",
  },
  {
    title: "Historial disponible durante la evaluación",
    text: "Las valoraciones y documentos anteriores permanecen dentro del expediente para consultar antecedentes cuando el trabajador vuelve.",
  },
  {
    title: "Estudios y documentos relacionados",
    text: "Los resultados generados en el sistema y los archivos externos pueden mantenerse asociados con el trabajador dentro de un mismo historial.",
  },
  {
    title: "Documentos a partir de la evaluación",
    text: "La información capturada puede utilizarse para generar los documentos correspondientes sin regresar a una plantilla externa para volver a transcribirla.",
  },
  {
    title: "Organización por empresa y centro de trabajo",
    text: "Las evaluaciones conservan el contexto de la organización y centro de trabajo al que pertenece el trabajador.",
  },
];

const faqs = [
  [
    "¿Qué es un examen médico laboral?",
    "Es una evaluación de salud realizada considerando el trabajo que la persona desempeña o desempeñará. Puede integrar antecedentes, interrogatorio, exploración física y estudios complementarios según el motivo, el puesto y los riesgos.",
  ],
  [
    "¿Qué tipos de examen médico laboral existen?",
    "Entre los más habituales se encuentran los exámenes de ingreso, periódicos, por cambio de puesto, reincorporación y egreso, además de evaluaciones extraordinarias cuando existe una situación que justifica revisar al trabajador.",
  ],
  [
    "¿Todos los trabajadores necesitan los mismos estudios?",
    "No. Los estudios deberían seleccionarse considerando el puesto, las exposiciones, los antecedentes, los hallazgos clínicos, el propósito de la evaluación y las disposiciones aplicables.",
  ],
  [
    "¿Qué estudios pueden incluirse en un examen médico laboral?",
    "Dependiendo del caso pueden incluirse audiometría, espirometría, evaluación visual, laboratorio, electrocardiograma, estudios de imagen u otras pruebas que resulten pertinentes.",
  ],
  [
    "¿Examen médico laboral y aptitud médica laboral son lo mismo?",
    "No. El examen obtiene e interpreta información sobre la salud del trabajador. La valoración de aptitud utiliza esa información junto con las funciones, exigencias y riesgos del puesto para llegar a una conclusión laboral.",
  ],
  [
    "¿Un resultado fuera de rango significa que el trabajador no es apto?",
    "No necesariamente. Un resultado debe interpretarse según su magnitud, significado clínico y repercusión para el trabajo concreto antes de establecer una conclusión de aptitud.",
  ],
  [
    "¿La información del examen debe conservarse en el expediente médico laboral?",
    "Sí. Mantener la evaluación relacionada con el historial del trabajador permite consultar antecedentes, comparar resultados y dar continuidad a valoraciones posteriores.",
  ],
  [
    "¿Se pueden realizar exámenes médicos laborales en un sistema digital?",
    "Sí. Un sistema especializado puede utilizarse para capturar evaluaciones, organizar el expediente, consultar antecedentes y generar documentos, siempre considerando los requisitos aplicables al manejo de información clínica.",
  ],
] as const;

export default function ExamenMedicoLaboralPage() {
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
                Examen médico laboral: qué evalúa, tipos y cómo se realiza
              </h1>
              <div className="stack guide-prose">
                <p className="lead">
                  Quien realiza exámenes médicos laborales sabe que la
                  evaluación rara vez empieza y termina en el consultorio. Para
                  interpretar lo que encontramos necesitamos conocer al
                  trabajador, pero también entender qué hace, a qué se expone y
                  por qué está siendo evaluado.
                </p>
                <p className="lead">
                  Eso hace que un examen de ingreso, una evaluación periódica o
                  una reincorporación puedan requerir enfoques distintos,
                  incluso cuando se trata del mismo trabajador. La exploración
                  y los estudios tienen sentido cuando responden a ese contexto.
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
              <span className="section-kicker">La evaluación</span>
              <h2>¿Qué es un examen médico laboral?</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                En la práctica, el examen médico laboral es una evaluación de
                salud realizada teniendo presente el trabajo que la persona
                desempeña o desempeñará. Puede incluir antecedentes,
                interrogatorio, exploración física y, cuando corresponde,
                estudios complementarios.
              </p>
              <p className="lead">
                Lo que lo distingue no es necesariamente una prueba específica,
                sino el contexto en el que interpretamos los hallazgos. Una
                presión arterial elevada, una limitación de movilidad o una
                alteración visual no significan exactamente lo mismo para todos
                los puestos.
              </p>
              <p className="lead">
                Por eso, una buena evaluación no consiste en acumular estudios
                ni en completar una batería idéntica para todos. Consiste en
                obtener la información que realmente necesitamos para el
                propósito de ese examen.
              </p>
              <aside className="guide-callout">
                <p>
                  El examen médico laboral no es una batería de estudios: es
                  una evaluación orientada por el trabajador, el puesto y sus
                  riesgos.
                </p>
              </aside>
            </div>
          </section>

          <section className="guide-section container" id="puesto-y-riesgos">
            <div className="section-head">
              <span className="section-kicker">El contexto importa</span>
              <h2>El mismo examen no tiene sentido para todos los puestos</h2>
              <p className="lead">
                Hay elementos clínicos que forman parte habitual de una
                evaluación, pero su importancia cambia con el trabajo. Conocer
                únicamente el nombre del puesto suele ser insuficiente; interesa
                entender qué hace realmente la persona y bajo qué condiciones
                lo hace.
              </p>
            </div>
            <GuideContextTriad
              topTitle="Trabajador"
              topText="Sus antecedentes, síntomas, estado actual de salud, capacidades y hallazgos de la evaluación."
              leftTitle="Puesto"
              leftText="Las actividades que realiza y las funciones que necesita desempeñar durante su trabajo."
              rightTitle="Riesgos y exposiciones"
              rightText="Ruido, sustancias químicas, conducción, trabajo en alturas, temperaturas, demandas físicas y otros factores relevantes para la evaluación."
            />
            <p className="lead guide-follow-copy">
              Cuando estos elementos cambian, también puede cambiar qué
              preguntamos, qué exploramos con mayor atención y qué estudios vale
              la pena solicitar.
            </p>
          </section>

          <section className="guide-section container" id="tipos-de-examen">
            <div className="section-head">
              <span className="section-kicker">Momento de evaluación</span>
              <h2>¿Qué tipos de examen médico laboral se realizan?</h2>
              <p className="lead">
                No todas las evaluaciones responden a la misma pregunta. El
                momento en que se realiza el examen modifica qué antecedentes
                interesa revisar, qué cambios buscamos y qué decisión puede
                derivarse de la valoración.
              </p>
            </div>
            <ul className="guide-categories">
              {examTypes.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="guide-section container" id="que-se-evalua">
            <div className="section-head">
              <span className="section-kicker">Durante la evaluación</span>
              <h2>¿Qué se evalúa durante un examen médico laboral?</h2>
              <p className="lead">
                La profundidad de cada apartado depende del motivo del examen y
                del trabajo evaluado. No se trata de llenar todos los campos
                posibles, sino de obtener suficiente información para entender
                el estado actual del trabajador y aquello que puede ser
                relevante para su actividad.
              </p>
            </div>
            <ol className="guide-factor-list">
              {evaluationElements.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="guide-section container"
            id="estudios-complementarios"
          >
            <div className="section-head">
              <span className="section-kicker">Cuando aportan información</span>
              <h2>
                ¿Qué estudios pueden formar parte de un examen médico laboral?
              </h2>
              <p className="lead">
                Audiometrías, espirometrías, estudios de laboratorio, pruebas
                visuales o estudios de imagen pueden aportar información muy
                valiosa, pero no por el simple hecho de agregarlos a una
                batería.
              </p>
              <p className="lead">
                La elección debería responder a una razón: una exposición que
                queremos vigilar, una exigencia particular del puesto, un
                hallazgo clínico, un antecedente o alguna disposición aplicable.
              </p>
            </div>
            <ul className="guide-categories">
              {complementaryStudies.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="lead guide-follow-copy">
              Solicitar más estudios no necesariamente produce una mejor
              evaluación. Lo importante es que cada prueba aporte información
              que sepamos por qué estamos buscando y cómo vamos a interpretar.
            </p>
          </section>

          <section className="guide-section container" id="examen-y-aptitud">
            <div className="section-head">
              <span className="section-kicker">Evaluación y conclusión</span>
              <h2>
                Examen médico y aptitud laboral no son exactamente lo mismo
              </h2>
              <p className="lead">
                El examen produce información sobre el trabajador. La aptitud
                utiliza esa información, junto con las funciones y riesgos del
                puesto, para llegar a una conclusión sobre el trabajo evaluado.
              </p>
            </div>
            <div className="before-after">
              <article className="card">
                <h3>Examen médico laboral</h3>
                <p className="lead">
                  Recaba e interpreta antecedentes, síntomas, hallazgos clínicos
                  y estudios relevantes para conocer la situación del
                  trabajador en el contexto de su trabajo.
                </p>
              </article>
              <article className="card good">
                <h3>Valoración de aptitud</h3>
                <p className="lead">
                  Integra esos hallazgos con lo que exige el puesto para
                  determinar si existe alguna implicación laboral, necesidad de
                  seguimiento, precaución o restricción.
                </p>
              </article>
            </div>
            <p className="lead guide-follow-copy">
              Por eso, encontrar una alteración durante el examen no conduce
              automáticamente a una conclusión de no aptitud. Falta valorar qué
              significa realmente ese hallazgo para el trabajo concreto.{" "}
              <a className="guide-inline-link" href="/aptitud-medica-laboral/">
                Conoce más sobre la aptitud médica laboral
              </a>.
            </p>
          </section>

          <section className="guide-section container" id="expediente">
            <div className="section-head">
              <span className="section-kicker">Continuidad</span>
              <h2>El examen termina, pero la información sigue siendo útil</h2>
            </div>
            <div className="stack guide-prose">
              <p className="lead">
                Una evaluación aislada muestra cómo se encontraba el trabajador
                en un momento determinado. Cuando se conserva junto con las
                anteriores, empieza a mostrar algo más valioso: su evolución.
              </p>
              <p className="lead">
                Antecedentes, exploraciones, estudios y conclusiones deberían
                poder consultarse después sin depender de encontrar el
                documento correcto entre carpetas o reconstruir manualmente lo
                que ocurrió en visitas anteriores.
              </p>
              <p className="lead">
                Por eso, la información generada durante el examen debería
                quedar relacionada con el expediente médico laboral del
                trabajador y conservar su fecha y contexto.{" "}
                <a
                  className="guide-inline-link"
                  href="/expediente-medico-laboral/"
                >
                  Conoce cómo organizar un expediente médico laboral
                </a>.
              </p>
            </div>
          </section>

          <section className="guide-section container" id="mexico">
            <div className="guide-context">
              <div className="section-head">
                <span className="section-kicker">Contexto mexicano</span>
                <h2>Exámenes médicos laborales en México</h2>
                <p className="lead">
                  En México no existe una única batería de estudios aplicable a
                  todos los trabajadores. Las evaluaciones deben considerar el
                  tipo de actividad, los riesgos presentes y las disposiciones
                  que resulten aplicables en cada caso.
                </p>
                <p className="lead">
                  El marco puede involucrar disposiciones generales de
                  seguridad y salud en el trabajo, regulación sobre expedientes
                  clínicos y normas específicas relacionadas con determinadas
                  exposiciones o actividades.
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
                Los estudios y criterios aplicables dependen del puesto, los
                riesgos, la actividad y el marco correspondiente. Esta guía
                presenta principios generales y no sustituye la valoración
                médica ni la revisión regulatoria de cada caso.
              </p>
            </div>
          </section>

          <section className="guide-section container" id="errores">
            <div className="section-head">
              <span className="section-kicker">
                Cuando la rutina sustituye al criterio
              </span>
              <h2>
                Errores frecuentes al realizar o gestionar exámenes médicos
                laborales
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

          <section className="guide-section container" id="ejemplos">
            <div className="section-head">
              <span className="section-kicker">
                El contexto cambia la evaluación
              </span>
              <h2>El mismo examen puede necesitar enfoques diferentes</h2>
              <p className="lead">
                Estos ejemplos no establecen baterías ni criterios universales.
                Sólo muestran cómo el puesto, la exposición y el momento de la
                evaluación cambian las preguntas que vale la pena hacer.
              </p>
            </div>
            <div className="guide-cases">
              {conceptualCases.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <dl>
                    <div>
                      <dt>Situación</dt>
                      <dd>{item.situacion}</dd>
                    </div>
                    <div>
                      <dt>Contexto</dt>
                      <dd>{item.contexto}</dd>
                    </div>
                    <div>
                      <dt>Qué cambia</dt>
                      <dd>{item.queCambia}</dd>
                    </div>
                  </dl>
                  <p>{item.conclusion}</p>
                </article>
              ))}
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
                <h2>Cómo gestiona Ramazzini los exámenes médicos laborales</h2>
                <p className="lead">
                  Ramazzini permite realizar la evaluación directamente dentro
                  del expediente del trabajador, de manera que la información
                  capturada no termina separada del historial al finalizar la
                  consulta.
                </p>
                <p className="lead">
                  Los datos que ya existen pueden reutilizarse, las
                  evaluaciones anteriores permanecen disponibles y los
                  documentos se generan a partir de la información capturada
                  durante el mismo proceso.
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
                Preguntas frecuentes sobre exámenes médicos laborales
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
                Realiza evaluaciones sin separar la consulta del expediente
              </h2>
              <p className="lead">
                Captura la información durante el examen, conserva el historial
                del trabajador y genera documentos desde una plataforma
                desarrollada específicamente para salud ocupacional.
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
