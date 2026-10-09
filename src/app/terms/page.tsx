import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of ResonanceOps' model monitoring, drift detection, evaluation, and alerting platform.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    heading: "1. Using ResonanceOps",
    body: [
      "These terms apply from the moment you create a ResonanceOps account. By instrumenting a model, you agree to use the platform in a way that's legal and doesn't abuse shared infrastructure.",
    ],
  },
  {
    heading: "2. Acceptable use",
    body: [
      "The platform may not be used to monitor or process data you don't have the right to process, to circumvent rate limits through abusive automation, or to resell access without a separate agreement.",
      "We don't inspect the contents of your monitored data proactively, but we act on abuse reports and will suspend a workspace that's actively harming platform stability for other customers.",
    ],
  },
  {
    heading: "3. Account responsibilities",
    body: [
      "You're responsible for keeping your account credentials and API keys secure, and for activity under your account. If a key is compromised, rotate it immediately and let us know.",
      "You're responsible for the accuracy of what your instrumentation sends us — ResonanceOps monitors what it's given, and can't detect drift in data it never receives.",
    ],
  },
  {
    heading: "4. Billing and refunds",
    body: [
      "Paid plans are billed monthly in advance based on the plan's included prediction volume. You can cancel at any time; access continues through the end of the period you've already paid for.",
      "We don't offer prorated refunds for partial months, but if something on our end goes materially wrong, reach out and we'll make it right directly.",
    ],
  },
  {
    heading: "5. Service availability",
    body: [
      "We design for high monitoring uptime, but we don't promise a specific uptime percentage in these terms. If you need a formal SLA for a production workload, contact us and we'll work one out directly.",
      "Scheduled maintenance that could affect availability is communicated in advance by email wherever possible.",
    ],
  },
  {
    heading: "6. Data you send us",
    body: [
      "You retain ownership of all prediction, trace, and model data you send to ResonanceOps. We process it solely to provide the monitoring, evaluation, and alerting features of the platform, as described in our Privacy Policy.",
    ],
  },
  {
    heading: "7. Limitation of liability",
    body: [
      "ResonanceOps is provided on an as-is basis. To the extent permitted by law, we aren't liable for indirect, incidental, or consequential damages arising from use of the service, beyond the amount you've paid us in the three months prior to a claim.",
    ],
  },
  {
    heading: "8. Termination",
    body: [
      "You can close your account at any time from the dashboard. We may suspend or terminate a workspace for a violation of the acceptable use terms above, generally with notice unless the issue is actively harming platform stability.",
    ],
  },
  {
    heading: "9. Governing law",
    body: [
      "These terms are governed by the laws of Nepal. Any dispute arising from use of the service will be handled in the courts of Kathmandu, Nepal.",
    ],
  },
  {
    heading: "10. Changes to these terms",
    body: [
      "If we make a material change to these terms, we'll notify active account holders by email before the change takes effect.",
    ],
  },
  {
    heading: "11. Contact",
    body: [
      "Questions about these terms can be sent to hello@resonanceops.ltd, or by post to Jhamsikhel, Lalitpur 44700, Nepal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Tag variant="cyan">Legal</Tag>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--fg)] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern use of the ResonanceOps platform. Plain
            language where we can manage it, precise where it has to be.
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
