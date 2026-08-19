"use client";

import { useRef, type FormHTMLAttributes, type ReactNode } from "react";
import { trackEvent, type FormType } from "@/lib/analytics";

type TrackedFormProps = FormHTMLAttributes<HTMLFormElement> & {
  formType: FormType;
  children: ReactNode;
};

export function TrackedForm({
  formType,
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
          trackEvent("demo_form_start", { form_type: formType });
        }
        onFocusCapture?.(focusEvent);
      }}
    >
      {children}
    </form>
  );
}
