"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  {
    label: "Empresa",
    src: "/screenshots/clientes.jpeg",
    alt: "Listado de empresas en Ramazzini",
  },
  {
    label: "Trabajador",
    src: "/screenshots/alta-trabajador.jpeg",
    alt: "Alta de un trabajador en Ramazzini",
  },
  {
    label: "Evaluación",
    src: "/capturas/AudiometrÃ_a-Clara.jpg",
    alt: "Evaluación de audiometría dentro de Ramazzini",
  },
  {
    label: "PDF",
    src: "/capturas/Historia-Clara.jpg",
    alt: "Vista previa de una historia clínica lista para generar en PDF",
  },
];

export function ProductLoop() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const interval = window.setInterval(
      () => setActive((current) => (current + 1) % steps.length),
      3800,
    );
    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <div
      className="product-loop"
      aria-label="Flujo real del producto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="product-loop-image">
        {steps.map((step, index) => (
          <Image
            key={step.src}
            src={step.src}
            alt={step.alt}
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
            priority={index === 0}
            className={index === active ? "is-active" : ""}
            aria-hidden={index !== active}
          />
        ))}
      </div>
      <div className="product-loop-steps" aria-label="Pantallas del producto">
        {steps.map((step, index) => (
          <button
            key={step.label}
            type="button"
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
            aria-pressed={index === active}
          >
            <span className="product-loop-number">0{index + 1}</span>{" "}
            {step.label}
          </button>
        ))}
      </div>
    </div>
  );
}
