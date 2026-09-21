"use client";

import { useRef, type FormHTMLAttributes, type ReactNode } from "react";
import { trackEvent, type FormType } from "@/lib/analytics";

type TrackedFormProps = FormHTMLAttributes<HTMLFormElement> & {
  formType: FormType;
  campaignVariant?: "a" | "b";
  children: ReactNode;
};

export function TrackedForm({
  formType,
  campaignVariant,
  children,
  onFocusCapture,
  ...props
}: TrackedFormProps) {
  const started = useRef(false);

  return (
    <form
      {...props}
      onFocusCapture={(focusEvent) => {
        if (!started.current) {
          started.current = true;
          trackEvent("demo_form_start", {
            form_type: formType,
            campaign_variant: campaignVariant,
          });
        }
        onFocusCapture?.(focusEvent);
      }}
    >
      {children}
    </form>
  );
}
