import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { GradientCTA } from "@/components/GradientCTA";
import { TraceWaterfall } from "@/components/mocks/TraceWaterfall";
import { DriftChart } from "@/components/mocks/DriftChart";
import { EvalScoreboard } from "@/components/mocks/EvalScoreboard";
import { AlertFeed } from "@/components/mocks/AlertFeed";
import { MetricGrid } from "@/components/mocks/MetricGrid";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Tracing, drift detection, evaluation, alerting, and dashboards — the full ResonanceOps platform for monitoring AI models in production.",
  alternates: {
    canonical: "/platform",
  },
};

const capabilities = [
  {
    index: "01",
    tag: "Tracing" as const,
    variant: "cyan" as const,
    title: "Every call, fully traced",
    description:
      "Instrument your model or agent once with the ResonanceOps SDK, and every inference — every span, tool call, and retrieval step — is captured automatically. No sampling guesswork: you decide what's retained and for how long.",
    extra:
      "Traces are the backbone everything else links back to. A drift alert, a failed eval, an anomalous latency spike — each one points straight to the trace that produced it.",
    mock: <TraceWaterfall />,
  },
  {
    index: "02",
    tag: "Drift Detection" as const,
    variant: "pink" as const,
    title: "Catch distribution shift before it costs you",
    description:
      "ResonanceOps continuously compares live feature and prediction distributions against a learned baseline using PSI, KL divergence, and population stability metrics — not a cron job that runs once a day and hopes nothing changed in between.",
    extra:
      "Segment drift by any dimension you already track — region, customer tier, device — so you find out which slice of traffic is actually the problem, not just that 'something' drifted.",
    mock: <DriftChart />,
  },
  {
    index: "03",
    tag: "Evaluation" as const,
    variant: "violet" as const,
    title: "Score quality continuously, not once at launch",
    description:
      "Run evaluators against a sample of real production traffic on a schedule you control. Built-in evaluators cover relevance, hallucination rate, toxicity, and factual consistency; custom evaluators are plain Python, versioned with your model.",
    extra:
      "Every eval run is tied to a specific model version, so a quality regression shows up as a specific, attributable diff — not a vague downward trend nobody can explain.",
    mock: <EvalScoreboard />,
  },
  {
    index: "04",
    tag: "Alerting" as const,
    variant: "amber" as const,
    title: "Routed to the right place, with the right context",
    description:
      "Set thresholds once per metric, per model. When one trips, the alert goes to Slack, PagerDuty, email, or a generic webhook — carrying the trace, the metric history, and the segment it happened in, not just a bare number.",
    extra:
      "Recurring, acknowledged issues auto-mute so your on-call channel stays something people actually read, instead of something they learn to ignore.",
    mock: <AlertFeed />,
  },
  {
    index: "05",
    tag: "Dashboards" as const,
    variant: "cyan" as const,
    title: "One view per model, not twelve tabs",
    description:
      "Latency, throughput, drift score, and error rate for a given model live on a single dashboard your whole team can look at without translating between four different tools first.",
    extra:
      "Share a dashboard with a read-only link for stakeholders who need visibility but shouldn't be poking at thresholds.",
    mock: <MetricGrid />,
  },
];

const integrations = [
  "Python SDK",
  "REST API",
  "OpenTelemetry",
  "Slack",
  "PagerDuty",
  "Webhooks",
  "Snowflake",
  "BigQuery",
  "S3 / GCS export",
];

const howItWorks = [
  {
    index: "01",
    title: "Instrument",
    description:
      "Add the ResonanceOps SDK to your inference or agent code — a few lines, no infrastructure change required on your end.",
  },
  {
    index: "02",
    title: "Baseline",
    description:
      "We learn the normal shape of your model's inputs and outputs over the first stretch of traffic, so drift detection has something real to compare against.",
  },
  {
    index: "03",
    title: "Monitor and evaluate",
    description:
      "Drift checks run continuously. Eval runs execute on the schedule you set, against a live sample of production traffic.",
  },
  {
    index: "04",
    title: "Get alerted",
    description:
      "When a threshold trips, the right channel gets a message with enough context to start debugging — not just a reason to open five dashboards.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)] py-20 md:py-24">
        <div className="dot-field" aria-hidden />
        <Container className="relative z-10">
          <Reveal>
            <Tag variant="cyan">Platform</Tag>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--fg)] md:text-5xl">
              Everything between a deployed model and knowing it&apos;s healthy.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              ResonanceOps isn&apos;t a single dashboard bolted onto your
              pipeline. It&apos;s five connected capabilities that share one
              trace format, so moving from an alert to the exact request
              that caused it takes one click, not a cross-tool
              investigation.
            </p>
          </Reveal>
        </Container>
      </section>

      {capabilities.map((c, i) => (
        <section
          key={c.index}
          className={`py-20 md:py-24 ${
            i % 2 === 1 ? "bg-[var(--bg-alt)]" : ""
          } ${i !== capabilities.length - 1 ? "border-b border-[var(--border)]" : ""}`}
        >
          <Container>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-[var(--fg-faint)]">
                  {c.index}
                </span>
                <Tag variant={c.variant}>{c.tag}</Tag>
              </div>
              <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
                {c.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
                {c.description}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
                {c.extra}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-12 flex justify-center">{c.mock}</div>
            </Reveal>
          </Container>
        </section>
      ))}

      {/* How it works */}
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="violet">How it works</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
              From first request to first alert
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, i) => (
              <Reveal key={step.index} delay={i * 70}>
                <div className="border-t-2 border-[var(--primary)] pt-5">
                  <span className="font-mono text-sm text-[var(--primary)]">
                    {step.index}
                  </span>
                  <h3 className="mt-3 text-base font-medium text-[var(--fg)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Integrations */}
      <section className="py-20 md:py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <Tag variant="amber">Integrations</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
              Fits into the stack you already run
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
              Instrument with the SDK or a generic OpenTelemetry exporter,
              route alerts wherever your team already looks, and export raw
              event data to your own warehouse whenever you want it.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {integrations.map((n) => (
                <span
                  key={n}
                  className="rounded-md border border-[var(--border)] px-4 py-2 font-mono text-xs text-[var(--fg-muted)]"
                >
                  {n}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <GradientCTA
        title="See it running against your own model."
        description="Book a walkthrough and we'll show ResonanceOps instrumented against a workload close to yours."
        buttonLabel="Book a walkthrough"
        buttonHref="/contact"
      />
    </>
  );
}
