import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ResonanceOps collects, uses, and protects data for customers using our AI model monitoring and observability platform.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    heading: "1. What we collect",
    body: [
      "When you create an account, we collect your name, email address, and billing details needed to run your workspace and invoice you.",
      "When you instrument a model with the ResonanceOps SDK, we collect the inputs, outputs, and metadata you choose to send — predictions, feature values, trace spans, and timing data. You control what's sent; we don't reach into your systems to pull anything ourselves.",
      "Like most web services, our dashboard and marketing site log IP addresses and request metadata for security and abuse prevention.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "Account and billing data is used to run your workspace, process payments, and send service-related notices.",
      "Prediction and trace data powers the monitoring, drift detection, evaluation, and alerting features described on our Platform page, scoped to your workspace, and nothing else.",
      "We may use aggregated, de-identified usage patterns to plan infrastructure capacity — this never includes anything that identifies a specific account or model.",
    ],
  },
  {
    heading: "3. What we don't do",
    body: [
      "We don't sell customer data, prediction data, or trace data to third parties.",
      "We don't use customer model data to train our own models or anyone else's without explicit, separate opt-in.",
      "We don't require access to your training data or model weights at any point — monitoring operates entirely on production inputs and outputs you send us.",
    ],
  },
  {
    heading: "4. Third-party processors",
    body: [
      "We rely on a small number of third-party processors to run the business — a payment processor for billing, an email provider for transactional notices, and cloud infrastructure providers for hosting. Each is bound by its own data-processing terms.",
    ],
  },
  {
    heading: "5. Data retention",
    body: [
      "Trace and prediction data is retained according to your plan's retention window (7 to 90 days by default), after which it's automatically purged. Account and billing records are retained for as long as your account is active, plus a limited period for tax and accounting obligations.",
    ],
  },
  {
    heading: "6. Your rights",
    body: [
      "You can request a copy of the personal data we hold, ask us to correct it, or request deletion of your account and associated data, subject to legal retention requirements. Reach out through the contact details below and we'll respond directly.",
    ],
  },
  {
    heading: "7. Changes to this policy",
    body: [
      "If this policy changes in a way that materially affects how we handle your data, we'll email active account holders before the change takes effect.",
    ],
  },
  {
    heading: "8. Contact",
    body: [
      "Questions about this policy can be sent to hello@resonanceops.ltd, or by post to Jhamsikhel, Lalitpur 44700, Nepal.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Tag variant="cyan">Legal</Tag>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--fg)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            This explains what data ResonanceOps collects, how it&apos;s
            used, and what you can do about it. We&apos;ve tried to write
            it in plain language instead of boilerplate.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg-faint)]">
            Effective January 1, 2026
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--fg)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
