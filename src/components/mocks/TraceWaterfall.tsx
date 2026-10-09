const spans = [
  { name: "router_chat", depth: 0, ms: "1.25s", status: "warn" as const },
  { name: "intent_classification", depth: 1, ms: "0.31s", status: "pass" as const },
  { name: "retrieve_context", depth: 1, ms: "0.44s", status: "pass" as const },
  { name: "llm_generate_response", depth: 2, ms: "0.86s", status: "warn" as const },
  { name: "guardrail_check", depth: 1, ms: "0.12s", status: "fail" as const },
];

const statusColor = {
  pass: "var(--success)",
  warn: "var(--warning)",
  fail: "var(--danger)",
};

export function TraceWaterfall() {
  return (
    <div className="w-full max-w-lg rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_40px_-16px_rgba(10,30,32,0.18)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
        <span className="text-sm font-medium text-[var(--fg)]">
          Trace — session_8f21
        </span>
        <span className="pill pill-neutral">5 spans</span>
      </div>
      <div className="flex flex-col py-2">
        {spans.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-3 px-5 py-2.5"
            style={{ paddingLeft: `${20 + s.depth * 20}px` }}
          >
            <span
              className="h-1.5 w-1.5 flex-none rounded-full"
              style={{ background: statusColor[s.status] }}
            />
            <span className="flex-1 truncate font-mono text-[13px] text-[var(--fg-muted)]">
              {s.name}
            </span>
            <span className="font-mono text-[11px] text-[var(--fg-faint)]">
              {s.ms}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
