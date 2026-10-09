const evals = [
  { name: "Answer relevance", score: "0.94", status: "pass" as const },
  { name: "Hallucination rate", score: "0.03", status: "pass" as const },
  { name: "Toxicity", score: "0.01", status: "pass" as const },
  { name: "Factual consistency", score: "0.71", status: "warn" as const },
  { name: "Context recall", score: "0.58", status: "fail" as const },
];

const statusMap = {
  pass: { pill: "pill-success", label: "Pass" },
  warn: { pill: "pill-warning", label: "Watch" },
  fail: { pill: "pill-danger", label: "Fail" },
};

export function EvalScoreboard() {
  return (
    <div className="w-full max-w-md rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_40px_-16px_rgba(10,30,32,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <span className="text-sm font-medium text-[var(--fg)]">
          Eval run — support_agent_v4
        </span>
        <span className="pill pill-neutral">5 metrics</span>
      </div>
      <div className="flex flex-col">
        {evals.map((e) => (
          <div
            key={e.name}
            className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3 last:border-b-0"
          >
            <span className="text-sm text-[var(--fg-muted)]">{e.name}</span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[var(--fg)]">
                {e.score}
              </span>
              <span className={`pill ${statusMap[e.status].pill}`}>
                {statusMap[e.status].label}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 py-3 font-mono text-[11px] text-[var(--fg-faint)]">
        Run against 1,240 production traces · 4m ago
      </div>
    </div>
  );
}
