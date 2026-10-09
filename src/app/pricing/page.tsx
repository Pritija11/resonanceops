import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { GradientCTA } from "@/components/GradientCTA";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "ResonanceOps pricing — plans that scale with prediction volume, from a free single-model tier to a self-hosted Scale plan for production AI teams.",
  alternates: {
    canonical: "/pricing",
  },
};

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "For a single model you want eyes on before it matters.",
    specs: [
      "1 model monitored",
      "50k predictions / month",
      "7-day trace retention",
      "Drift detection",
      "Community support",
    ],
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    description: "For teams running a handful of models in real production.",
    specs: [
      "Up to 5 models monitored",
      "2M predictions / month",
      "30-day trace retention",
      "Drift detection + evaluation runs",
      "Slack, email, and webhook alerting",
      "Priority email support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "$499",
    period: "/mo",
    description: "For fleets of models and teams that need their own VPC.",
    specs: [
      "Unlimited models monitored",
      "20M predictions / month",
      "90-day trace retention",
      "Custom evaluators",
      "VPC / self-hosted deployment option",
      "Dedicated support channel",
    ],
  },
];

const comparison = [
  { feature: "Models monitored", starter: "1", growth: "5", scale: "Unlimited" },
  { feature: "Predictions / month", starter: "50k", growth: "2M", scale: "20M" },
  { feature: "Trace retention", starter: "7 days", growth: "30 days", scale: "90 days" },
  { feature: "Drift detection", starter: true, growth: true, scale: true },
  { feature: "Evaluation runs", starter: false, growth: true, scale: true },
  { feature: "Custom evaluators", starter: false, growth: false, scale: true },
  { feature: "Slack / PagerDuty alerting", starter: false, growth: true, scale: true },
  { feature: "VPC / self-hosted option", starter: false, growth: false, scale: true },
  { feature: "Support", starter: "Community", growth: "Priority email", scale: "Dedicated channel" },
];

const faqs = [
  {
    q: "What counts as a 'prediction'?",
    a: "One scored inference or completion — a single classification call, a single LLM response, a single ranking request. Batch jobs count each row scored, not each job run.",
  },
  {
    q: "What happens if we go over our monthly volume?",
    a: "We'll reach out before anything is throttled. Most teams either upgrade a tier or add volume as an add-on — we don't silently drop your traces at the limit.",
  },
  {
    q: "Can we start on Starter and upgrade later without migrating anything?",
    a: "Yes. Every plan uses the same SDK and trace format, so upgrading is a billing change, not a re-instrumentation project.",
  },
  {
    q: "Is there a discount for startups or nonprofits?",
    a: "Yes — reach out and tell us about what you're building. We keep a handful of discounted seats open for early-stage teams each quarter.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="violet">Pricing</Tag>
            <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--fg)] md:text-5xl">
              Priced for how models actually get used.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              No per-seat pricing that punishes you for looping in more of
              the team. Plans scale with prediction volume, because that&apos;s
              what actually drives cost on our end.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-xl border p-7 ${
                    plan.featured
                      ? "border-[var(--primary)] bg-[var(--primary-soft)]"
                      : "border-[var(--border)] bg-[var(--surface)]"
                  }`}
                >
                  {plan.featured && (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[var(--primary)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--on-primary)]">
                      Most popular
                    </span>
                  )}
                  <p className="font-mono text-sm text-[var(--fg)]">
                    {plan.name}
                  </p>
                  <p className="mt-3 flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--fg)]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[var(--fg-muted)]">
                      {plan.period}
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                    {plan.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {plan.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-sm text-[var(--fg-muted)]"
                      >
                        <IconCheck className="h-4 w-4 flex-none text-[var(--primary)]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant={plan.featured ? "primary" : "outline"}
                    className="mt-7"
                  >
                    {plan.name === "Scale" ? "Talk to us" : "Start for free"}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="cyan">Compare plans</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
              Every detail, side by side
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-strong)] text-left">
                    <th className="py-3 pr-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
                      Feature
                    </th>
                    <th className="py-3 px-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
                      Starter
                    </th>
                    <th className="py-3 px-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--primary)]">
                      Growth
                    </th>
                    <th className="py-3 pl-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
                      Scale
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-[var(--border)]"
                    >
                      <td className="py-3.5 pr-4 text-[var(--fg)]">
                        {row.feature}
                      </td>
                      {[row.starter, row.growth, row.scale].map((cell, i) => (
                        <td
                          key={i}
                          className={`py-3.5 px-4 text-[var(--fg-muted)] ${
                            i === 1 ? "bg-[var(--primary-soft)]/40" : ""
                          }`}
                        >
                          {typeof cell === "boolean" ? (
                            cell ? (
                              <IconCheck className="h-4 w-4 text-[var(--primary)]" />
                            ) : (
                              <span className="text-[var(--fg-faint)]">
                                —
                              </span>
                            )
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Billing questions</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
              Before you pick a plan
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
        title="Not sure which plan fits your volume?"
        description="Tell us roughly how many predictions you're scoring a month and we'll recommend a plan directly."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </>
  );
}
