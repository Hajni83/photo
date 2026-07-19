export default function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      {/* Egyvonalas fényképezőgép, a logóhoz illő stílusban */}
      <svg
        viewBox="0 0 64 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="h-8 w-12"
        aria-hidden="true"
      >
        <path d="M2 32c4-2 6 2 9-1" />
        <rect x="12" y="12" width="40" height="22" rx="4" />
        <path d="M22 12l3-5h14l3 5" />
        <circle cx="32" cy="23" r="7" />
        <circle cx="46" cy="17" r="1.4" fill="currentColor" stroke="none" />
        <path d="M52 30c4 3 7-1 10 1" />
      </svg>
      <span className="leading-none">
        <span className="font-serif text-2xl font-semibold tracking-wide">
          M<span className="italic">arcsi</span>
        </span>
        <span className="mt-0.5 block text-[0.6rem] font-medium uppercase tracking-[0.45em] text-ink-500">
          Photo
        </span>
      </span>
    </span>
  );
}
