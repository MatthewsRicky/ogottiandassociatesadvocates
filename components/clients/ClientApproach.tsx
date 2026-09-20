import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ClientApproach() {
  return (
    <section className="bg-charcoal py-24 text-cream sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <SectionHeading
            eyebrow="Our Approach"
            title="Every matter begins with understanding."
            description="We seek to understand the client's objectives before advising on the appropriate legal approach."
            light
          />

          <Reveal delay={0.1}>
            <div className="space-y-7 text-base leading-8 text-cream/60">
              <p>
                Legal matters rarely exist in isolation. A property transaction
                can involve commercial considerations. A business decision can
                create employment or contractual implications. Family and
                succession matters can require both legal and personal
                sensitivity.
              </p>

              <p>
                Our client-centric approach therefore places emphasis on
                understanding the wider circumstances surrounding each matter.
              </p>

              <p>
                We aim to provide clear advice, identify relevant risks, protect
                our clients' lawful interests and execute each matter with
                diligence and attention to detail.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
