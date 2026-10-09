import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { SubmissionTimeline } from "@/components/mocks/SubmissionTimeline";
import { IconMail, IconPhone, IconMapPin } from "@/components/icons";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ResonanceOps about model monitoring, drift detection, evaluation, or alerting for your AI systems.",
  alternates: {
    canonical: "/contact",
  },
};

const contactChips = [
  {
    icon: IconMail,
    label: "Email",
    value: "hello@resonanceops.ltd",
    href: "mailto:hello@resonanceops.ltd",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+977 981-0234789",
    href: "tel:+9779810234789",
  },
  {
    icon: IconMapPin,
    label: "Office",
    value: "Jhamsikhel, Lalitpur, Nepal",
    href: undefined,
  },
];

const faqs = [
  {
    q: "How fast do you actually reply?",
    a: "Almost always within a business day — usually faster. There's no ticket queue sitting between your message and someone who can answer it.",
  },
  {
    q: "Will I talk to engineering, or to sales?",
    a: "Your message goes to the founding team directly. For a technical question about drift detection or evaluators, that's usually the person who built it.",
  },
  {
    q: "Can we get a live walkthrough instead of email?",
    a: "Yes — mention it in your message and we'll set up a call against a workload close to yours instead of a generic slide deck.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="cyan">Contact</Tag>
            <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--fg)] md:text-5xl">
              Let&apos;s talk about your models.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Whether you&apos;re monitoring your first model or moving an
              existing fleet off dashboards nobody checks, tell us what
              you&apos;re running and we&apos;ll reply with a straight
              answer — not a sales funnel.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap gap-4">
              {contactChips.map((c) => {
                const Wrapper = c.href ? "a" : "div";
                return (
                  <Wrapper
                    key={c.label}
                    {...(c.href ? { href: c.href } : {})}
                    className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 transition-colors hover:border-[var(--primary)]"
                  >
                    <c.icon className="h-4 w-4 flex-none text-[var(--primary)]" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                        {c.label}
                      </p>
                      <p className="text-sm text-[var(--fg)]">{c.value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-[var(--border)] py-20 md:py-24">
        <div className="dot-field opacity-50" aria-hidden />
        <Container className="relative z-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-9">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                Send a message
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--fg)]">
                Tell us what you&apos;re running
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Tag variant="violet">What happens next</Tag>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--fg)] md:text-3xl">
              From message to a monitored model
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              We&apos;re a small team — every message is read by someone
              who actually understands the product, not routed through a
              support queue.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <SubmissionTimeline />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Before you write in</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
              Quick answers
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
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
    </>
  );
}
