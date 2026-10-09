import Link from "next/link";

type Variant = "primary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 font-mono uppercase tracking-[0.04em]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--primary)] text-[var(--on-primary)] shadow-[0_0_0_1px_rgba(0,146,160,0.4),0_0_24px_rgba(0,146,160,0.25)] hover:bg-[var(--primary-dark)]",
  outline:
    "border border-[var(--border-strong)] bg-transparent text-[var(--fg)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
  ghost: "text-[var(--fg-muted)] hover:text-[var(--fg)]",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
