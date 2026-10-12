import Link from "next/link";

/** The LongGrind mark: an L that runs into a continuous loop — momentum that keeps going. */
export function LogoMark({ className = "h-8 w-8", animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="14" fill="#151B20" />
      <path
        d="M18 13 V49 H36 A16 16 0 0 0 52 33 H40"
        fill="none"
        stroke="#D9FF70"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={240}
        strokeDasharray={animated ? 240 : undefined}
        className={animated ? "animate-grind" : undefined}
      />
      <circle cx="48" cy="17" r="4.5" fill="#F5F2EB" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="LongGrind home">
      <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:rotate-[-6deg]" />
      <span className={`text-[1.35rem] font-extrabold tracking-[-0.04em] ${tone === "dark" ? "text-charcoal" : "text-ivory"}`}>
        Long<span className={tone === "dark" ? "bg-[linear-gradient(transparent_62%,#D9FF70_62%)]" : "text-lime"}>Grind</span>
      </span>
    </Link>
  );
}
