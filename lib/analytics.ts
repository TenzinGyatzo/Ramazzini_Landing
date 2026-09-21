export type FormType = "quick" | "full";
export type Plan = "basic" | "professional" | "enterprise";

export type DemoCtaLocation =
  | "header"
  | "hero"
  | "product"
  | "pricing"
  | "footer"
  | "guide_cta"
  | "closing_cta"
  | "video_section"
  | "campaign";

export type TrialCtaLocation =
  "header" | "hero" | "pricing" | "guide_cta" | "closing_cta";

export type WhatsAppCtaLocation = "floating" | "footer" | "thank_you" | "error";

export type AnalyticsEventMap = {
  campaign_exposure: { campaign_variant: "a" | "b" };
  demo_cta_click: {
    cta_location: DemoCtaLocation;
    campaign_variant?: "a" | "b";
  };
  demo_form_start: { form_type: FormType; campaign_variant?: "a" | "b" };
  generate_lead: { form_type: FormType; campaign_variant?: "a" | "b" };
  trial_cta_click: { cta_location: TrialCtaLocation; plan: Plan | "none" };
  whatsapp_click: { cta_location: WhatsAppCtaLocation };
};

export type AnalyticsEventName = keyof AnalyticsEventMap;

const eventsWithPagePath: ReadonlySet<AnalyticsEventName> = new Set([
  "campaign_exposure",
  "demo_cta_click",
  "demo_form_start",
  "trial_cta_click",
  "whatsapp_click",
]);

function getPagePath() {
  return window.location.pathname;
}

export function isFormType(value: string | undefined): value is FormType {
  return value === "quick" || value === "full";
}

export function isConversionId(value: string | undefined): value is string {
  return (
    typeof value === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      value,
    )
  );
}

export function trackEvent<E extends AnalyticsEventName>(
  event: E,
  params: AnalyticsEventMap[E],
): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  const payload: Record<string, unknown> = { event };

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      payload[key] = value;
    }
  }

  if (eventsWithPagePath.has(event)) {
    payload.page_path = getPagePath();
  }

  window.dataLayer.push(payload);
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    clarity?: (...args: string[]) => void;
  }
}
