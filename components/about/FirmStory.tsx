import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FirmStory() {
  return (
    <section className="bg-cream py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <SectionHeading
            eyebrow="Who We Are"
            title="Professional counsel, grounded in understanding."
          />

          <Reveal delay={0.1}>
            <div className="space-y-7 text-base leading-8 text-muted">
              <p className="text-xl leading-9 text-ink sm:text-2xl sm:leading-10">
                L.A. Ogotti & Associates Advocates was established in April 2025
                as a boutique legal practice serving clients across a range of
                personal, property, commercial and contentious matters.
              </p>

              <p>
                The Firm works with individuals, families, entrepreneurs,
                businesses, property developers, investors, companies and other
                organisations.
              </p>

              <p>
                Our approach begins with understanding the client's
                circumstances and objectives. We then apply sound professional
                judgment, careful attention to detail and practical legal advice
                to help protect our clients' lawful interests.
              </p>

              <p>
                We believe that effective legal representation requires more
                than technical knowledge. It requires accessibility,
                responsiveness, confidentiality, diligence and a genuine
                commitment to the matter entrusted to us.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
