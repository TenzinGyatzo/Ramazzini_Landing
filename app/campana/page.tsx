import type { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CampaignExposure } from "../components/CampaignExposure";
import { ProductLoop } from "../components/ProductLoop";
import { TrackedCta } from "../components/TrackedCta";
import { TrackedForm } from "../components/TrackedForm";

export const metadata: Metadata = {
  title: { absolute: "Exámenes médicos laborales | Ramazzini" },
  description:
    "Organiza empresas y trabajadores, documenta evaluaciones médicas laborales y genera informes con Ramazzini.",
  robots: { index: false, follow: false },
};

const logos = [
  { src: "/marcas-testimonio/prevensa-logo.png", alt: "Prevensa" },
  {
    src: "/marcas-testimonio/moc-caborca-logo.png",
    alt: "Médica Ocupacional Caborca",
  },
  {
    src: "/marcas-testimonio/centro-de-diagnostico-cedip-sa-logo.png",
    alt: "Centro de Diagnóstico CEDIP",
  },
  {
    src: "/marcas-testimonio/asesoria-medico-empresarial-de-sinaloa-logo.png",
    alt: "Asesoría Médico Empresarial de Sinaloa",
  },
];

export default async function CampaignPage() {
  const variant =
    (await headers()).get("x-campaign-variant") === "b" ? "b" : "a";
  const headline =
    variant === "a"
      ? "Exámenes médicos laborales, del expediente al informe"
      : "De la evaluación al informe, sin capturar lo mismo dos veces";
  const description =
    variant === "a"
      ? "Registra empresas y trabajadores, documenta cada evaluación y entrega informes PDF. Ramazzini reúne ese trabajo en un sistema creado para salud ocupacional."
      : "Consulta el historial del trabajador, completa tus formatos clínicos y genera informes con la imagen de tu organización.";

  return (
    <main className="campaign-page">
      <CampaignExposure variant={variant} />
      <header className="campaign-header container">
        <Image
          src="/RamazziniLogoClaroNoBg.png"
          alt="Ramazzini"
          width={521}
          height={140}
          priority
        />
        <TrackedCta
          href="#agendar"
          className="button button-primary"
          event="demo_cta_click"
          eventParams={{ cta_location: "campaign", campaign_variant: variant }}
        >
          Agendar demo personalizada
        </TrackedCta>
      </header>
      <section className="campaign-hero container">
        <div className="campaign-hero-copy">
          <span className="section-kicker">
            Software clínico para salud ocupacional
          </span>
          <h1>{headline}</h1>
          <p>{description}</p>
          <ul>
            <li>
              <CheckCircle2 size={18} /> Empresas y trabajadores organizados
            </li>
            <li>
              <CheckCircle2 size={18} /> Evaluaciones con historial clínico
            </li>
            <li>
              <CheckCircle2 size={18} /> Informes listos para presentar
            </li>
          </ul>
          <TrackedCta
            href="#agendar"
            className="button button-primary"
            event="demo_cta_click"
            eventParams={{
              cta_location: "campaign",
              campaign_variant: variant,
            }}
          >
            Agendar demo personalizada <ArrowRight size={18} />
          </TrackedCta>
          <p className="campaign-note">
            En 45 minutos revisamos tus exámenes y tu forma de trabajar.
          </p>
        </div>
        <ProductLoop />
      </section>
      <section className="campaign-proof" aria-label="Ramazzini en cifras">
        <div className="container campaign-proof-inner">
          <div>
            <strong>+36 mil</strong>
            <span>informes generados</span>
          </div>
          <div>
            <strong>+7 mil</strong>
            <span>trabajadores gestionados</span>
          </div>
          <div>
            <strong>+250</strong>
            <span>empresas atendidas</span>
          </div>
          <div className="campaign-logos" aria-label="Clientes de Ramazzini">
            {logos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={90}
                height={54}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="campaign-form-section container" id="agendar">
        <div>
          <span className="section-kicker">Demo personalizada</span>
          <h2>Mira cómo funcionaría Ramazzini en tu operación</h2>
          <p>
            Cuéntanos cómo contactarte. Después podrás elegir un horario para
            revisar tus exámenes, formatos y volumen de trabajo.
          </p>
          <p className="campaign-compliance">
            Ramazzini incorpora controles y funciones alineados con requisitos
            aplicables de la NOM-024-SSA3-2012. La certificación aún no ha sido
            obtenida.
          </p>
        </div>
        <TrackedForm
          className="form-panel campaign-form"
          action="/api/demo"
          method="post"
          formType="quick"
          campaignVariant={variant}
          data-clarity-mask="true"
        >
          <label htmlFor="campaign-name">Nombre completo</label>
          <input
            id="campaign-name"
            name="name"
            autoComplete="name"
            maxLength={100}
            required
          />
          <label htmlFor="campaign-email">Correo de trabajo</label>
          <input
            id="campaign-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
          />
          <label htmlFor="campaign-phone">WhatsApp</label>
          <input
            id="campaign-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            required
          />
          <input type="hidden" name="source" value="Campaign lead" />
          <input type="hidden" name="form_type" value="quick" />
          <input
            className="form-honeypot"
            type="text"
            name="form_confirm"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <button className="button button-primary" type="submit">
            Agendar demo personalizada <ArrowRight size={18} />
          </button>
          <small>Usaremos tus datos solo para coordinar la demo.</small>
        </TrackedForm>
      </section>
      <footer className="campaign-footer container">
        <span>© Ramazzini</span>
        <a href="/terminos-y-condiciones/">Términos y condiciones</a>
      </footer>
    </main>
  );
}
