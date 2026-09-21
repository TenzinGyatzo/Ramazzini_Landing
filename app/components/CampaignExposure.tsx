"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function CampaignExposure({ variant }: { variant: "a" | "b" }) {
  useEffect(() => {
    trackEvent("campaign_exposure", { campaign_variant: variant });
    if (!window.clarity) {
      const queue: string[][] = [];
      const clarity = (...args: string[]) => {
        queue.push(args);
      };
      window.clarity = Object.assign(clarity, { q: queue });
    }
    window.clarity("set", "campaign_variant", variant);
  }, [variant]);
  return null;
}
