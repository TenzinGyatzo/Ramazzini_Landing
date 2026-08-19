import Image from "next/image";
import { TrackedCta } from "./TrackedCta";

const appUrl =
  process.env.NEXT_PUBLIC_APP_URL || "https://ramazzini.app/auth/onboarding";

type HeaderProps = {
  logoHref?: string;
  homeHref?: string;
  showTrialCta?: boolean;
};

function sectionHref(homeHref: string, id: string) {
  return `${homeHref}#${id}`;
}

export function Header({
  logoHref = "#",
  homeHref = "",
  showTrialCta = false,
}: HeaderProps) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href={logoHref} aria-label="Ramazzini">
          <Image
            src="/RamazziniLogoClaroNoBg.png"
            alt="Ramazzini"
            width={521}
            height={140}
            priority
          />
        </a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href={sectionHref(homeHref, "como-funciona")}>Cómo funciona</a>
          <a href={sectionHref(homeHref, "caracteristicas")}>Funciones</a>
          <a href={sectionHref(homeHref, "casos")}>Testimonios</a>
          <a href={sectionHref(homeHref, "precios")}>Precios</a>
        </nav>
        <div className="nav-actions">
          {showTrialCta ? (
            <TrackedCta
              className="button button-secondary"
              href={appUrl}
              event="trial_cta_click"
              eventParams={{ cta_location: "header", plan: "none" }}
            >
              Probar gratis
            </TrackedCta>
          ) : null}
          <TrackedCta
            className="button button-primary"
            href={sectionHref(homeHref, "demo")}
            event="demo_cta_click"
            eventParams={{ cta_location: "header" }}
          >
            Agendar demo
          </TrackedCta>
        </div>
      </div>
    </header>
  );
}
