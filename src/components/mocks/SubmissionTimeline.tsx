const steps = [
  {
    title: "Message received",
    detail: "Routed straight to the founding team's inbox",
    pill: "pill-success",
    label: "Done",
    time: "just now",
  },
  {
    title: "Reviewed by an engineer",
    detail: "Someone who's read the monitoring code looks at your case",
    pill: "pill-warning",
    label: "Pending",
    time: "within 24h",
  },
  {
    title: "Direct reply sent",
    detail: "Specifics for your workload, not a generic sales deck",
    pill: "pill-neutral",
    label: "Queued",
    time: "—",
  },
];

export function SubmissionTimeline() {
  return (
    <div className="w-full max-w-md rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_40px_-16px_rgba(10,30,32,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <span className="text-sm font-medium text-[var(--fg)]">
          Your message — status
        </span>
        <span className="pill pill-neutral">3 steps</span>
      </div>
      <div className="flex flex-col">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="flex items-start gap-3 border-b border-[var(--border)] px-5 py-4 last:border-b-0"
          >
            <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)] font-mono text-[10px] text-[var(--primary-dark)]">
              {i + 1}
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-[var(--fg)]">{s.title}</p>
                <span className={`pill ${s.pill}`}>{s.label}</span>
              </div>
              <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                {s.detail}
              </p>
              <p className="mt-1 font-mono text-[11px] text-[var(--fg-faint)]">
                {s.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
