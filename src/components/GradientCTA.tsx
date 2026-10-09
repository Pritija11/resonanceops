import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { IconArrowRight, IconCheck } from "./icons";

export function GradientCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[var(--border)] py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[460px] w-[680px] rounded-full bg-[var(--primary)]/15 blur-[140px]" />
        <div className="absolute h-[320px] w-[420px] translate-x-40 rounded-full bg-[var(--accent-violet)]/15 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-xl rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] px-8 py-12 text-center md:px-14 md:py-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              {description}
            </p>

            <div className="mx-auto mt-9 flex max-w-sm items-center gap-3 rounded-lg border border-black/10 bg-[#0b1416] px-4 py-3 text-left font-mono text-xs text-white/70">
              <span className="flex-none text-[var(--primary)]">$</span>
              <span className="flex-1 truncate">pip install resonanceops</span>
              <IconCheck className="h-3.5 w-3.5 flex-none text-white/40" />
            </div>

            <Link
              href={buttonHref}
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[var(--primary)] py-1.5 pl-6 pr-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--on-primary)] shadow-[0_0_0_1px_rgba(0,146,160,0.4),0_0_24px_rgba(0,146,160,0.22)] transition-shadow hover:shadow-[0_0_0_1px_rgba(0,146,160,0.55),0_0_32px_rgba(0,146,160,0.32)]"
            >
              {buttonLabel}
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--on-primary)]/15 text-[var(--on-primary)] transition-transform duration-200 group-hover:translate-x-0.5">
                <IconArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
