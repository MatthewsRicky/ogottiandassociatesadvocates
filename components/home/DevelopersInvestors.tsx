import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  "Due Diligence",
  "Acquisition",
  "Negotiation",
  "Documentation",
  "Completion",
  "Registration",
];

export default function DevelopersInvestors() {
  return (
    <section className="bg-charcoal py-24 text-cream sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-24">
          <SectionHeading
            eyebrow="Developers & Investors"
            title="Legal support for property and investment."
            description="Diani and the wider Coast region continue to present opportunities in real estate, hospitality, tourism and commercial investment."
            light
          />

          <Reveal delay={0.1}>
            <p className="text-base leading-8 text-cream/60">
              We understand that property development and investment require
              careful consideration of title, ownership, due diligence,
              contractual obligations, regulatory requirements, transaction
              structures and potential risks.
            </p>

            <p className="mt-6 text-base leading-8 text-cream/60">
              Our Firm seeks to provide dependable legal support from initial
              due diligence and negotiation through documentation, completion
              and registration, as well as ongoing legal advisory services where
              required.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service} delay={index * 0.05}>
              <div className="border-b border-white/10 px-1 py-6 sm:px-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-cream/85">
                    {service}
                  </span>

                  <span className="text-gold">↗</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
