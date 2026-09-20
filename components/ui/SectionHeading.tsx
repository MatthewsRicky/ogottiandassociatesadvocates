import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="max-w-3xl">
        <p
          className={`mb-5 text-[10px] font-medium uppercase tracking-[0.28em] ${
            light ? "text-gold-light" : "text-gold-dark"
          }`}
        >
          {eyebrow}
        </p>

        <h2
          className={`font-serif text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`mt-6 max-w-2xl text-base leading-8 ${
              light ? "text-cream/65" : "text-muted"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
