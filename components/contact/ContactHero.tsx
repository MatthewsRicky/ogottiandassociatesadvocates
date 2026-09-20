import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function ContactHero() {
  return (
    <section className="bg-ink pb-24 pt-40 text-cream sm:pb-32 sm:pt-48 lg:pb-40">
      <Container>
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
            Contact the Firm
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.96] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
            Let's discuss your <span className="text-gold">legal matter.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-cream/60 sm:text-lg">
            Contact L.A. Ogotti & Associates Advocates to discuss your
            circumstances and arrange a consultation.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
