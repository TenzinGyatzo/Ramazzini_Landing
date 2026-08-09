"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ScreenCapture = {
  src: string;
  alt: string;
};

type ScreensShowcaseProps = {
  screens: ScreenCapture[];
};

export function ScreensShowcase({ screens }: ScreensShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplaying, setIsAutoplaying] = useState(true);
  const activeScreen = screens[activeIndex];

  useEffect(() => {
    if (screens.length < 2 || !isAutoplaying) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % screens.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isAutoplaying, screens.length]);

  if (!activeScreen) return null;

  return (
    <div
      className="screens-gallery"
      aria-label="Capturas del sistema Ramazzini"
    >
      <button
        className="screen-tile screen-tile-main"
        type="button"
        onClick={() => setIsAutoplaying(false)}
        aria-label="Pausar rotación automática de capturas"
      >
        <span className="mock-window-bar" aria-hidden="true">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </span>
        <Image
          src={activeScreen.src}
          alt={activeScreen.alt}
          width={2560}
          height={1392}
          priority
          sizes="(max-width: 980px) 100vw, 1100px"
        />
      </button>
      <div className="screen-thumbs" aria-label="Más pantallas de Ramazzini">
        {screens.map((screen, index) => (
          <button
            className={`screen-thumb ${
              index === activeIndex ? "is-active" : ""
            }`}
            key={screen.src}
            type="button"
            onClick={() => {
              setActiveIndex(index);
              setIsAutoplaying(false);
            }}
            aria-label={`Mostrar captura: ${screen.alt}`}
            aria-pressed={index === activeIndex}
          >
            <Image
              src={screen.src}
              alt=""
              width={256}
              height={139}
              sizes="(max-width: 640px) 42vw, 160px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
