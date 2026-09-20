import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const standards = [
  {
    number: "01",
    title: "Integrity",
    description:
      "Acting honestly and maintaining the ethical standards expected of the legal profession.",
  },
  {
    number: "02",
    title: "Professionalism",
    description:
      "Approaching every engagement with sound judgment, respect and professional discipline.",
  },
  {
    number: "03",
    title: "Confidentiality",
    description:
      "Treating client information and legal matters with the discretion and confidentiality they require.",
  },
  {
    number: "04",
    title: "Diligence",
    description:
      "Giving each matter careful attention and pursuing the client's lawful objectives with commitment.",
  },
  {
    number: "05",
    title: "Accountability",
    description:
      "Taking responsibility for our work and maintaining clear, professional communication.",
  },
  {
    number: "06",
    title: "Client Service",
    description:
      "Remaining accessible and responsive throughout the course of the client's engagement with the Firm.",
  },
];

export default function ProfessionalStandards() {
  return (
    <section className="bg-cream py-24 sm:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Our Standards"
          title="Principles that guide our practice."
        />

        <div className="mt-16 grid border-t border-line md:grid-cols-2 lg:grid-cols-3">
          {standards.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.04}>
              <div className="border-b border-line p-7 sm:p-8">
                <span className="font-serif text-sm text-gold-dark">
                  {item.number}
                </span>

                <h3 className="mt-6 font-serif text-2xl text-ink">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
