import Image from "next/image";
import { company } from "@/data/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label={`${company.name} logo`}>
      <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold-300/70 bg-white shadow-gold">
        <Image
          src="/brand/a5-logo.jpeg"
          alt="A5 Traders logo"
          fill
          sizes="48px"
          className="object-cover"
          priority
        />
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className="font-display text-xl font-bold text-navy-900 dark:text-white">{company.name}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-300">
            Import & Export
          </p>
        </div>
      )}
    </div>
  );
}
