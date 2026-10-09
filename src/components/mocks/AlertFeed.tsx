import { IconAlert } from "../icons";

const alerts = [
  {
    severity: "danger" as const,
    title: "Hallucination rate spiked on billing_agent",
    time: "2m ago",
  },
  {
    severity: "warning" as const,
    title: "Latency p95 up 40% on fraud_scoring",
    time: "26m ago",
  },
  {
    severity: "success" as const,
    title: "checkout_amount drift resolved",
    time: "1h ago",
  },
];

export function AlertFeed() {
  return (
    <div className="w-full max-w-md rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_40px_-16px_rgba(10,30,32,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <div className="flex items-center gap-2">
          <IconAlert className="h-4 w-4 text-[var(--warning)]" />
          <span className="text-sm font-medium text-[var(--fg)]">
            Active alerts
          </span>
        </div>
        <span className="pill pill-danger">3 open</span>
      </div>
      <div className="flex flex-col">
        {alerts.map((a) => (
          <div
            key={a.title}
            className="flex items-start gap-3 border-b border-[var(--border)] px-5 py-3.5 last:border-b-0"
          >
            <span className={`pill pill-${a.severity} mt-0.5`}>&nbsp;</span>
            <div className="flex-1">
              <p className="text-sm text-[var(--fg)]">{a.title}</p>
              <p className="mt-1 font-mono text-[11px] text-[var(--fg-faint)]">
                {a.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
