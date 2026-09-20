import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-end overflow-hidden bg-ink text-cream sm:min-h-[820px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(184,154,90,0.14),transparent_30%)]" />

        <div className="absolute right-[8%] top-[25%] hidden h-72 w-72 rounded-full border border-gold/10 lg:block" />
        <div className="absolute right-[13%] top-[30%] hidden h-56 w-56 rounded-full border border-gold/10 lg:block" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-24">
        <div className="grid items-end gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
              Advocates · Commissioners for Oaths · Notaries Public
            </p>

            <h1 className="max-w-4xl font-serif text-5xl leading-[0.96] tracking-[-0.035em] sm:text-6xl lg:text-8xl">
              Legal counsel with <span className="text-gold">clarity,</span>{" "}
              integrity & purpose.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-cream/60 sm:text-lg">
              Professional legal services for individuals, families,
              entrepreneurs, businesses, property developers, investors and
              organisations.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/expertise">Explore Our Expertise</Button>

              <Button href="/contact" variant="outline">
                Contact the Firm
              </Button>
            </div>
          </div>

          <div className="border-l border-gold/30 pl-6 lg:mb-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Our Philosophy
            </p>

            <p className="mt-5 max-w-xs font-serif text-2xl leading-snug text-cream/90">
              “Dedicated to You, Committed to Integrity.”
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-cream/50 transition-colors hover:text-gold"
            >
              Discover the Firm
              <span className="text-gold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
