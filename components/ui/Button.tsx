import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "gold" | "outline" | "light";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "gold",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300";

  const variants = {
    gold: "bg-gold text-ink hover:bg-gold-light",
    outline: "border border-gold/60 text-gold hover:bg-gold hover:text-ink",
    light: "bg-cream text-ink hover:bg-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
