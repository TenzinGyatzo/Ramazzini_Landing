"use client";

import type { AnchorHTMLAttributes } from "react";
import {
  trackEvent,
  type AnalyticsEventMap,
  type AnalyticsEventName,
} from "@/lib/analytics";

type TrackedCtaProps<E extends AnalyticsEventName> =
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    event: E;
    eventParams: AnalyticsEventMap[E];
  };

export function TrackedCta<E extends AnalyticsEventName>({
  event,
  eventParams,
  onClick,
  ...props
}: TrackedCtaProps<E>) {
  return (
    <a
      {...props}
      onClick={(clickEvent) => {
        trackEvent(event, eventParams);
        onClick?.(clickEvent);
      }}
    />
  );
}
