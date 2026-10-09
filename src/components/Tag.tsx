type Variant = "cyan" | "violet" | "amber" | "pink";

const variants: Record<Variant, string> = {
  cyan: "tag-cyan",
  violet: "tag-violet",
  amber: "tag-amber",
  pink: "tag-pink",
};

export function Tag({
  children,
  variant = "cyan",
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
