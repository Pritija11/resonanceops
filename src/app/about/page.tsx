import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { GradientCTA } from "@/components/GradientCTA";
import { IconMapPin, IconUsers, IconLayers } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "ResonanceOps is an early-stage AI infrastructure startup based in Lalitpur, Nepal, building model monitoring and observability for teams running AI in production.",
  alternates: {
    canonical: "/about",
  },
};

const quickFacts = [
  { icon: IconMapPin, label: "Based in Lalitpur" },
  { icon: IconUsers, label: "Small founding team" },
  { icon: IconLayers, label: "Founded 2025" },
];

const principles = [
  {
    index: "01",
    title: "Production traffic is the only ground truth",
    description:
      "A model that looks fine on a held-out test set and degrades in production isn't an edge case — it's the default outcome without monitoring. We build around what actually happens after deploy.",
  },
  {
    index: "02",
    title: "An alert without a trace is just noise",
    description:
      "Telling someone a metric moved isn't enough. Every signal ResonanceOps raises comes with the request that caused it, so the first response is debugging, not re-discovering the problem.",
  },
  {
    index: "03",
    title: "Monitoring shouldn't need a PhD to configure",
    description:
      "Statistical drift detection is genuinely technical. The interface for using it shouldn't be. We spend real effort making the defaults correct so most teams never touch the advanced settings.",
  },
  {
    index: "04",
    title: "Small team, direct answers",
    description:
      "Every support message is read by someone who understands the product deeply, not routed through tiers. We'd rather stay small longer than lose that.",
  },
];

const founders = [
  { role: "Engineering", initials: "EN", color: "cyan" as const },
  { role: "Product & Research", initials: "PR", color: "violet" as const },
  { role: "ML Infrastructure", initials: "MI", color: "amber" as const },
];

const colorMap = {
  cyan: "bg-[var(--primary-soft)] text-[var(--primary)]",
  violet:
    "bg-[color-mix(in_srgb,var(--accent-violet)_18%,transparent)] text-[var(--accent-violet)]",
  amber:
    "bg-[color-mix(in_srgb,var(--accent-amber)_18%,transparent)] text-[var(--accent-amber)]",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="cyan">About ResonanceOps</Tag>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--fg)] md:text-5xl">
              We built the monitoring layer we wished we&apos;d had.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              ResonanceOps is an early-stage AI infrastructure startup
              based in Lalitpur, Nepal. We build model monitoring,
              drift detection, evaluation, and alerting for teams
              running machine learning and LLM systems in production.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--border)] pt-8">
              {quickFacts.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <f.icon className="h-4 w-4 flex-none text-[var(--fg-faint)]" />
                  <span className="text-sm text-[var(--fg-muted)]">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Long-form narrative with pull quote */}
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.9fr]">
            <Reveal>
              <div className="flex flex-col gap-5 text-sm leading-7 text-[var(--fg-muted)]">
                <p>
                  Before ResonanceOps, most of the founding team worked on
                  ML platform teams at larger companies, where the same
                  failure kept happening in different disguises: a model
                  would ship, perform well for a few weeks, and then
                  quietly start making worse predictions — not because
                  anything crashed, but because the world underneath it
                  had shifted.
                </p>
                <p>
                  Nobody found out from a dashboard. They found out from a
                  support ticket, a finance review, or — in the worst
                  case — a customer. By the time the root cause surfaced,
                  it had usually been live for weeks, and the trail of
                  which requests it actually affected was mostly gone.
                </p>
                <p>
                  Existing observability tools weren&apos;t built for this.
                  They know how to tell you a service is down. They have
                  no concept of what a healthy prediction distribution
                  looks like, or that a model&apos;s hallucination rate
                  just doubled between two versions.
                </p>
                <p>
                  ResonanceOps exists to close that gap — drift detection,
                  evaluation, and alerting built around model behavior
                  specifically, not retrofitted from generic infrastructure
                  monitoring.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <p className="font-[family-name:var(--font-display)] text-xl font-medium leading-snug text-[var(--fg)]">
                  &ldquo;A model doesn&apos;t announce when it starts being
                  wrong. Something has to be watching for it.&rdquo;
                </p>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                  The idea we keep building around
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="violet">How we think</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
              Principles we build with
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.index} delay={i * 70}>
                <div className="border-t-2 border-[var(--primary)] pt-5">
                  <span className="font-mono text-sm text-[var(--primary)]">
                    {p.index}
                  </span>
                  <h3 className="mt-3 text-base font-medium text-[var(--fg)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Founding team */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Founding team</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
              A small team, on purpose
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              We&apos;re deliberately staying small while we work closely
              with our first design partners — every person on the team
              talks to customers directly.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {founders.map((f, i) => (
              <Reveal key={f.role} delay={i * 80}>
                <div className="flex flex-col items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-medium ${colorMap[f.color]}`}
                  >
                    {f.initials}
                  </div>
                  <p className="text-sm font-medium text-[var(--fg)]">
                    {f.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientCTA
        title="Want to be one of our first design partners?"
        description="We're working closely with a small group of early teams. Tell us what you're running."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
