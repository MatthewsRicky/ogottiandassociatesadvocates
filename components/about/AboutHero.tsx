import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-24 pt-40 text-cream sm:pb-32 sm:pt-48 lg:pb-40">
      <div className="absolute inset-0">
        <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full border border-gold/10" />
        <div className="absolute right-[0%] top-[25%] h-[320px] w-[320px] rounded-full border border-gold/10" />
      </div>

      <Container className="relative">
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
            About the Firm
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.96] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
            A legal practice built around{" "}
            <span className="text-gold">people, purpose and trust.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-cream/60 sm:text-lg">
            L.A. Ogotti & Associates Advocates is a boutique law firm
            established to provide thoughtful, professional and practical legal
            services to individuals, families, businesses, investors and
            organisations.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
