const metrics = [
  { label: "Latency p95", value: "184ms", trend: "-12%", good: true },
  { label: "Requests / min", value: "9.2k", trend: "+4%", good: true },
  { label: "Drift score", value: "0.34", trend: "+70%", good: false },
  { label: "Error rate", value: "0.6%", trend: "+0.1%", good: false },
];

export function MetricGrid() {
  return (
    <div className="w-full max-w-md rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_40px_-16px_rgba(10,30,32,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <span className="text-sm font-medium text-[var(--fg)]">
          System health — fraud_scoring
        </span>
        <span className="pill pill-success">Live</span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-[var(--border)]">
        {metrics.map((m) => (
          <div key={m.label} className="bg-[var(--surface)] px-5 py-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
              {m.label}
            </p>
            <p className="mt-2 font-mono text-xl text-[var(--fg)]">
              {m.value}
            </p>
            <p
              className={`mt-1 font-mono text-[11px] ${
                m.good ? "text-[var(--success)]" : "text-[var(--danger)]"
              }`}
            >
              {m.trend}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
