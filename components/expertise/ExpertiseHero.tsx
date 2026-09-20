import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function ExpertiseHero() {
  return (
    <section className="bg-ink pb-24 pt-40 text-cream sm:pb-32 sm:pt-48 lg:pb-40">
      <Container>
        <Reveal>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
            Our Expertise
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.96] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
            Legal knowledge applied with{" "}
            <span className="text-gold">practical judgment.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-cream/60 sm:text-lg">
            We advise and represent clients across property, commercial,
            employment, succession, litigation and family-related matters.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
