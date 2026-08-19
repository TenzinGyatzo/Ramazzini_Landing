import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { CalInline } from "../components/CalInline";
import { GenerateLeadTracker } from "../components/GenerateLeadTracker";
import { TrackedCta } from "../components/TrackedCta";
import { isConversionId, isFormType } from "@/lib/analytics";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "526681702850";

type GraciasPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Elige fecha y hora para tu demo",
  description:
    "Selecciona el horario de tu demo personalizada de Ramazzini por Google Meet.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function GraciasPage({ searchParams }: GraciasPageProps) {
  const params = (await searchParams) || {};
  const status = firstValue(params.estado);
  const formType = firstValue(params.form_type);
  const conversionId = firstValue(params.conversion_id);
  const hasError = status === "error" || status === "limite";
  const isIncomplete = status === "incompleto";
  const waMessage = encodeURIComponent(
    hasError
      ? "Hola, intenté solicitar una demo de Ramazzini, pero el formulario no pudo completarse."
      : "Hola, ya compartí mis datos para una demo de Ramazzini y necesito ayuda para elegir horario.",
  );

  if (hasError || isIncomplete) {
    return (
      <main className="thank-you thank-you-booking">
        <div className="container thank-you-booking-panel">
          <section className="thank-you-intro">
            <span className="eyebrow">
              <MessageCircle size={16} /> Solicitud pendiente
            </span>
            <h1>
              {isIncomplete
                ? "Faltan algunos datos para solicitar tu demo"
                : status === "limite"
                  ? "Recibimos demasiados intentos desde esta conexión"
                  : "No pudimos enviar tu solicitud en este momento"}
            </h1>
            <p className="hero-copy">
              {isIncomplete
                ? "Regresa al formulario y completa los campos requeridos."
                : status === "limite"
                  ? "Espera un poco antes de volver a intentarlo o escríbenos por WhatsApp."
                  : "Puedes intentarlo nuevamente o escribirnos por WhatsApp para que te atendamos directamente."}
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#demo-form">
                <ArrowLeft size={18} /> Volver al formulario
              </Link>
              <TrackedCta
                className="button button-secondary"
                href={`https://wa.me/${whatsapp}?text=${waMessage}`}
                event="whatsapp_click"
                eventParams={{ cta_location: "error" }}
              >
                <MessageCircle size={18} /> Escribir por WhatsApp
              </TrackedCta>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="thank-you thank-you-booking">
      {status === "enviado" &&
      isFormType(formType) &&
      isConversionId(conversionId) ? (
        <GenerateLeadTracker formType={formType} conversionId={conversionId} />
      ) : null}
      <div className="container thank-you-booking-panel">
        <section className="thank-you-intro">
          <span className="eyebrow">
            <CheckCircle2 size={16} /> Paso 2 de 2
          </span>
          <h1>Ahora elige la fecha y hora de tu demo</h1>
          <p className="hero-copy">
            Gracias por compartir tus datos. Selecciona el horario que mejor te
            acomode para reservar una demo de 45 minutos por Google Meet.
          </p>
          <div className="hero-actions">
            <TrackedCta
              className="button button-secondary"
              href={`https://wa.me/${whatsapp}?text=${waMessage}`}
              event="whatsapp_click"
              eventParams={{ cta_location: "thank_you" }}
            >
              <MessageCircle size={18} /> ¿Necesitas ayuda? Escríbenos por
              WhatsApp
            </TrackedCta>
            <Link className="button button-secondary" href="/">
              <ArrowLeft size={18} /> Volver al inicio
            </Link>
          </div>
        </section>
        <CalInline />
      </div>
    </main>
  );
}

function firstValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0];
  return value;
}
