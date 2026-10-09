const points = [
  [0, 58], [20, 54], [40, 60], [60, 52], [80, 61], [100, 55],
  [120, 63], [140, 70], [160, 82], [180, 96], [200, 110], [220, 118],
];

const path = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
const areaPath = `${path} L220,140 L0,140 Z`;

export function DriftChart() {
  return (
    <div className="w-full max-w-md rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_40px_-16px_rgba(10,30,32,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--danger)]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--warning)]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--success)]/70" />
          <span className="ml-2 text-sm font-medium text-[var(--fg)]">
            Feature drift — checkout_amount
          </span>
        </div>
        <span className="pill pill-danger">Drifting</span>
      </div>

      <div className="px-5 pb-2 pt-4">
        <svg viewBox="0 0 220 140" className="w-full" preserveAspectRatio="none">
          <line x1="0" y1="35" x2="220" y2="35" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="0" y1="90" x2="220" y2="90" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
          <defs>
            <linearGradient id="driftFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--danger)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--danger)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#driftFill)" />
          <path d={path} fill="none" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="220" cy="118" r="4" fill="var(--danger)" />
        </svg>
      </div>

      <div className="flex items-center justify-between border-t border-[var(--border)] px-5 py-3 font-mono text-[11px] text-[var(--fg-faint)]">
        <span>PSI score: 0.34</span>
        <span>threshold: 0.20</span>
        <span className="text-[var(--danger)]">+70% over 7d</span>
      </div>
    </div>
  );
}
