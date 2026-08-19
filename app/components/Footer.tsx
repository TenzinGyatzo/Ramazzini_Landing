import Image from "next/image";
import { IsoMark } from "./IsoMark";
import { TrackedCta } from "./TrackedCta";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://get.ramazzini.app";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "526681702850";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "soporte@ramazzini.app";
const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";
const logoUrl = `${siteUrl}/RamazziniLogoClaroNoBg.png`;
const phoneHref = contactPhone.replace(/[^\d+]/g, "");

type FooterProps = {
  homeHref?: string;
};

function sectionHref(homeHref: string, id: string) {
  return `${homeHref}#${id}`;
}

export function Footer({ homeHref = "" }: FooterProps) {
  const waMessage = encodeURIComponent(
    "Hola, vi la pagina de Ramazzini y me gustaria agendar una demo del sistema.",
  );

  return (
    <footer
      className="footer"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Ramazzini" />
      <meta itemProp="url" content={siteUrl} />
      <meta itemProp="logo" content={logoUrl} />
      {contactPhone ? (
        <meta itemProp="telephone" content={contactPhone} />
      ) : null}
      <meta itemProp="email" content={contactEmail} />
      <div className="container footer-grid">
        <div className="footer-brand">
          <IsoMark className="footer-sigil" />
          <Image
            src="/RamazziniLogoClaroNoBg.png"
            alt="Ramazzini"
            width={521}
            height={140}
          />
          <p>
            Software mexicano para realizar evaluaciones médicas laborales con
            mayor agilidad y generar informes profesionales, organizados y
            fáciles de consultar.
          </p>
          <div className="footer-actions">
            <TrackedCta
              className="button button-primary"
              href={sectionHref(homeHref, "demo")}
              event="demo_cta_click"
              eventParams={{ cta_location: "footer" }}
            >
              Agendar demo
            </TrackedCta>
            <TrackedCta
              className="button button-secondary"
              href={`https://wa.me/${whatsapp}?text=${waMessage}`}
              event="whatsapp_click"
              eventParams={{ cta_location: "footer" }}
            >
              WhatsApp
            </TrackedCta>
          </div>
        </div>
        <div className="footer-col">
          <h3>Producto</h3>
          <a href="/software-salud-ocupacional/">Software de salud ocupacional</a>
          <a href={sectionHref(homeHref, "como-funciona")}>Cómo funciona</a>
          <a href={sectionHref(homeHref, "caracteristicas")}>Funciones</a>
          <a href={sectionHref(homeHref, "precios")}>Planes</a>
        </div>
        <div className="footer-col">
          <h3>Confianza</h3>
          <a href={sectionHref(homeHref, "casos")}>Testimonios</a>
          <a href={sectionHref(homeHref, "seguridad")}>Seguridad</a>
          <a href={sectionHref(homeHref, "faq")}>Preguntas frecuentes</a>
          <a href={sectionHref(homeHref, "demo")}>Contacto</a>
        </div>
        <div className="footer-col footer-contact">
          <h3>Contacto</h3>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          {contactPhone ? (
            <a href={`tel:${phoneHref}`}>{contactPhone}</a>
          ) : null}
          <address>
            Atención comercial para México y Latinoamérica
            <br />
            Demos en línea con reservación previa.
          </address>
          <span className="footer-hours">
            Lun–Vie · 8:00–17:00 · Sáb · 8:00–14:00 (hora de Sinaloa)
          </span>
        </div>
        <div className="footer-metrics">
          <span>
            <strong>+36k</strong> informes generados
          </span>
          <span>
            <strong>+7k</strong> trab. gestionados
          </span>
          <span>
            <strong>+250</strong> empresas atendidas
          </span>
          <span>
            <strong>MX</strong> hecho en México
          </span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Ramazzini. Salud y Trabajo.</span>
        <span>
          <a href="/terminos-y-condiciones" className="footer-link">
            Términos
          </a>
        </span>
      </div>
    </footer>
  );
}
