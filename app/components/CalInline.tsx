"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const calLink = "ramazzini/demo-personalizada-de-ramazzini";
const calNamespace = "ramazzini-demo";
const calOrigin = "https://app.cal.com";

type CalEvent = {
  detail?: {
    data?: {
      uid?: string;
    };
  };
};

type CalApi = {
  (...args: unknown[]): void;
  q?: IArguments[];
};

type CalGlobal = CalApi & {
  loaded?: boolean;
  ns?: Record<string, CalApi>;
  q?: IArguments[];
};

function getCampaignVariant(): "a" | "b" | undefined {
  const value = new URLSearchParams(window.location.search).get(
    "campaign_variant",
  );
  return value === "a" || value === "b" ? value : undefined;
}

function ensureCalEmbed() {
  if (window.Cal) return window.Cal;

  const push = (api: CalApi, args: IArguments) => {
    api.q = api.q || [];
    api.q.push(args);
  };

  const cal = function (this: unknown, ...args: unknown[]) {
    const current = window.Cal as CalGlobal;
    const instruction = args[0];

    if (!current.loaded) {
      current.ns = {};
      current.q = current.q || [];
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      document.head.appendChild(script);
      current.loaded = true;
    }

    if (instruction === "init") {
      const api = function (this: unknown, ...apiArgs: unknown[]) {
        push(api, apiArgs as unknown as IArguments);
      } as CalApi;
      const namespace = args[1];
      api.q = api.q || [];

      if (typeof namespace === "string") {
        current.ns = current.ns || {};
        current.ns[namespace] = current.ns[namespace] || api;
        push(current.ns[namespace], arguments);
        push(current, ["initNamespace", namespace] as unknown as IArguments);
      } else {
        push(current, arguments);
      }
      return;
    }

    push(current, arguments);
  } as CalGlobal;

  cal.ns = {};
  cal.q = [];
  window.Cal = cal;
  return cal;
}

export function CalInline() {
  const bookedRef = useRef(false);

  useEffect(() => {
    const cal = ensureCalEmbed();
    cal("init", calNamespace, { origin: calOrigin });

    const namespacedCal = cal.ns?.[calNamespace];
    if (!namespacedCal) return;

    const handleBookingSuccess = (event: CalEvent) => {
      const uid = event.detail?.data?.uid;
      const dedupeKey = uid ? `ramazzini_demo_booked_${uid}` : null;

      if (
        bookedRef.current ||
        (dedupeKey && sessionStorage.getItem(dedupeKey) === "1")
      ) {
        return;
      }

      bookedRef.current = true;
      if (dedupeKey) sessionStorage.setItem(dedupeKey, "1");

      trackEvent("demo_booked", {
        campaign_variant: getCampaignVariant(),
      });
    };

    namespacedCal("inline", {
      elementOrSelector: "#ramazzini-cal-inline",
      calLink,
      config: { layout: "month_view", theme: "dark" },
    });
    namespacedCal("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view",
    });
    namespacedCal("on", {
      action: "bookingSuccessfulV2",
      callback: handleBookingSuccess,
    });

    return () => {
      namespacedCal("off", {
        action: "bookingSuccessfulV2",
        callback: handleBookingSuccess,
      });
    };
  }, []);

  return (
    <section className="calendar-panel" aria-labelledby="calendar-title">
      <div className="form-head">
        <span className="pill">Calendario</span>
        <h3 id="calendar-title">Agenda tu demo personalizada</h3>
        <p>
          Elige el horario que mejor se acomode a tu operación y recibe la
          confirmación en tu correo.
        </p>
      </div>
      <div className="calendar-frame">
        <div
          id="ramazzini-cal-inline"
          style={{ width: "100%", minHeight: "650px", overflow: "auto" }}
        />
      </div>
      <noscript>
        <a
          className="button button-secondary cal-noscript"
          href={`https://app.cal.com/${calLink}`}
        >
          Abrir calendario de Ramazzini
        </a>
      </noscript>
    </section>
  );
}

declare global {
  interface Window {
    Cal?: CalGlobal;
  }
}
