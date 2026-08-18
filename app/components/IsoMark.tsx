import Image from "next/image";

export function IsoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`iso-mark ${className}`} aria-hidden="true">
      <Image src="/brand/ramazzini-brand.svg" alt="" width={420} height={420} />
    </span>
  );
}
