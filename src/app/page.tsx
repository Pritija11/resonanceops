import Link from "next/link";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { LogoStrip } from "@/components/LogoStrip";
import { GradientCTA } from "@/components/GradientCTA";
import { DriftChart } from "@/components/mocks/DriftChart";
import { EvalScoreboard } from "@/components/mocks/EvalScoreboard";
import { AlertFeed } from "@/components/mocks/AlertFeed";
import { TraceWaterfall } from "@/components/mocks/TraceWaterfall";
import { IconArrowRight, IconCheck } from "@/components/icons";

const heroStats = [
  { value: "340M+", label: "predictions scored / month" },
  { value: "99.98%", label: "monitoring uptime" },
  { value: "<90s", label: "median alert time" },
];

const railItems = [
  {
    tag: "Monitor" as const,
    variant: "cyan" as const,
    title: "Is your model still the model you shipped?",
    body: "ResonanceOps watches every feature distribution, prediction, and output against the baseline it learned at launch — not a weekly batch job, a continuous one.",
    bullets: [
      "Statistical drift detection (PSI, KL divergence, population stability)",
      "Per-feature and per-segment breakdowns, not just a model-wide score",
      "Baselines that update as your data legitimately shifts",
    ],
    mock: <DriftChart />,
  },
  {
    tag: "Evaluate" as const,
    variant: "violet" as const,
    title: "Is it getting better, or just different?",
    body: "Run evals against production traffic, not just a static test set — accuracy, hallucination rate, toxicity, and any custom scorer your team defines, tracked release over release.",
    bullets: [
      "LLM-graded and rule-based evaluators out of the box",
      "Custom evaluators in Python, versioned alongside your model",
      "Score trends tied to specific deploys, not just dates",
    ],
    mock: <EvalScoreboard />,
  },
  {
    tag: "Alert" as const,
    variant: "amber" as const,
    title: "Who finds out first — you, or your users?",
    body: "Thresholds you set once route straight to Slack, PagerDuty, or a webhook, with enough context in the alert to start debugging immediately instead of re-pulling the same dashboard.",
    bullets: [
      "Severity-aware routing, not one noisy channel for everything",
      "Alert payloads include the trace, not just a metric name",
      "Auto-mute on acknowledged, recurring incidents",
    ],
    mock: <AlertFeed />,
  },
];

const whoItsFor = [
  {
    index: "01",
    title: "ML platform teams",
    description:
      "Give every model owner in the org the same monitoring baseline, without becoming the team that manually checks dashboards every morning.",
  },
  {
    index: "02",
    title: "Teams shipping LLM features",
    description:
      "Hallucination rate and response quality degrade quietly between model provider updates. Catch it in the eval run, not the support queue.",
  },
  {
    index: "03",
    title: "Fraud and risk models",
    description:
      "A silently drifting fraud model is expensive in a way that's hard to notice until the quarterly numbers come in. Don't wait for the quarterly numbers.",
  },
  {
    index: "04",
    title: "Small data science teams",
    description:
      "No dedicated MLOps hire yet. ResonanceOps covers the monitoring baseline so the team's time goes into modeling, not building internal tooling.",
  },
];

const faqs = [
  {
    q: "What kind of models does ResonanceOps monitor?",
    a: "Classic ML models (classification, regression, ranking) and LLM-based systems (RAG pipelines, agents, chat). The core primitives — drift, evaluation, alerting — apply to both, with evaluators tuned for each.",
  },
  {
    q: "Do you need access to our training data?",
    a: "No. ResonanceOps monitors what goes into and out of your model in production — inputs, outputs, and optional ground truth when it arrives later. Training data access is never required.",
  },
  {
    q: "How is this different from a generic observability tool?",
    a: "General APM tools tell you a service is slow or down. They don't know what a healthy prediction distribution looks like, or that a 0.71 factual-consistency score is a problem. ResonanceOps is built around model behavior specifically.",
  },
  {
    q: "Can we self-host?",
    a: "Our Scale plan supports a VPC deployment alongside the standard hosted option. Reach out and we'll walk through what that setup looks like for your infrastructure.",
  },
  {
    q: "Is ResonanceOps a new company?",
    a: "Yes — we're an early-stage AI infrastructure startup based in Lalitpur, Nepal. We're working closely with our first cohort of design partners before opening up more broadly.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="dot-field" aria-hidden />
        <Container className="relative z-10 py-24 md:py-32">
          <Reveal>
            <Tag variant="cyan">Model observability</Tag>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--fg)] md:text-6xl">
              Know the moment your model
              <span className="mark-cyan"> stops behaving</span>.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              ResonanceOps is the monitoring layer for AI in production —
              drift detection, evaluation, and alerting for teams who can&apos;t
              afford to find out from a customer first.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button href="/contact">
                Start for free
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/platform" variant="outline">
                See the platform
              </Button>
            </div>

            <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--fg)]">
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <LogoStrip />

      {/* Problem statement */}
      <section className="py-24 md:py-28">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-3xl text-center font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.3] tracking-tight text-[var(--fg)] md:text-4xl">
              A model doesn&apos;t crash when it fails. It just starts
              being wrong, quietly, in production, for weeks before
              anyone notices.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-6 text-[var(--fg-muted)]">
              Traditional uptime monitoring has nothing to say about
              that. ResonanceOps was built specifically for the failure
              modes that only show up in model behavior.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Vertical rail feature section */}
      <section className="border-t border-[var(--border)] py-24">
        <Container>
          <div className="flex flex-col gap-24">
            {railItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="grid grid-cols-1 gap-12 border-l-2 border-[var(--border-strong)] pl-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
                  <div>
                    <Tag variant={item.variant}>{item.tag}</Tag>
                    <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--fg)] md:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
                      {item.body}
                    </p>
                    <ul className="mt-6 flex flex-col gap-2.5">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <IconCheck className="mt-0.5 h-3.5 w-3.5 flex-none text-[var(--primary)]" />
                          <span className="text-sm text-[var(--fg-muted)]">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    {item.mock}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Vibrant floating-panel band */}
      <section className="signal-band relative overflow-hidden py-24">
        <Container className="relative z-10 flex flex-col items-center text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#04161a]/70">
              Full request tracing
            </p>
            <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#04161a] md:text-4xl">
              See the whole call, not just the score
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#04161a]/75">
              Every eval and alert links back to the exact trace that
              produced it — every span, every tool call, every
              millisecond — so debugging starts where the problem
              actually happened.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-12 w-full">
            <div className="flex justify-center">
              <TraceWaterfall />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="border-b border-[var(--border)] py-24">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-2xl text-center font-[family-name:var(--font-display)] text-2xl font-medium leading-[1.4] tracking-tight text-[var(--fg)] md:text-3xl">
              &ldquo;We found a fraud model drifting three weeks before it
              would have shown up in our quarterly loss numbers. That
              alone paid for a year of this.&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[var(--surface-tint)]" />
              <div className="text-left">
                <p className="text-sm font-medium text-[var(--fg)]">
                  Head of Risk ML
                </p>
                <p className="font-mono text-[11px] text-[var(--fg-faint)]">
                  Mesh Analytics
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Tag variant="cyan">Who it&apos;s for</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
              Built for the team that gets paged
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)]">
            {whoItsFor.map((w, i) => (
              <Reveal key={w.index} delay={i * 60}>
                <div className="grid grid-cols-1 gap-3 py-8 md:grid-cols-[4rem_1fr_1.6fr] md:items-start md:gap-8">
                  <span className="font-mono text-sm text-[var(--primary)]">
                    {w.index}
                  </span>
                  <h3 className="text-base font-medium text-[var(--fg)]">
                    {w.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--fg-muted)]">
                    {w.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <Tag variant="violet">Pricing</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
              Plans that scale with prediction volume, not seat count
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
              Start monitoring a single model for free. Add evaluation,
              alerting, and more volume as your models go into real
              production traffic.
            </p>
            <Link
              href="/pricing"
              className="mt-8 inline-flex items-center gap-2 font-mono text-sm font-medium text-[var(--primary)] hover:underline"
            >
              See full pricing
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Questions</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
              Before you wire it into production
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-[var(--fg)]">
                    {item.q}
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] font-mono text-sm text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientCTA
        title="Start watching your models before they drift on you."
        description="Free up to one model in production. No credit card, no sales call to get started."
        buttonLabel="Start for free"
        buttonHref="/contact"
      />
    </>
  );
}
