"use client";

import { useEffect, useRef } from "react";
import { trackEvent, type FormType } from "@/lib/analytics";

const storagePrefix = "ramazzini:generate_lead:";

export function GenerateLeadTracker({
  formType,
  conversionId,
  campaignVariant,
}: {
  formType: FormType;
  conversionId: string;
  campaignVariant?: "a" | "b";
}) {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) {
      return;
    }

    const key = `${storagePrefix}${conversionId}`;

    try {
      if (sessionStorage.getItem(key)) {
        sent.current = true;
        return;
      }
      sessionStorage.setItem(key, "1");
    } catch {
      // Private mode or blocked storage: fall back to the in-memory guard.
    }

    sent.current = true;
    trackEvent("generate_lead", {
      form_type: formType,
      campaign_variant: campaignVariant,
    });
    if (campaignVariant)
      window.clarity?.("set", "campaign_variant", campaignVariant);
  }, [campaignVariant, conversionId, formType]);

  return null;
}
