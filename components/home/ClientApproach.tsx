import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  {
    number: "01",
    title: "Understanding",
    description:
      "Taking time to understand our client's circumstances, objectives and concerns.",
  },
  {
    number: "02",
    title: "Advising",
    description:
      "Providing clear, practical and legally sound advice to enable informed decisions.",
  },
  {
    number: "03",
    title: "Protecting",
    description:
      "Identifying legal and transactional risks and taking appropriate steps to protect our clients' interests.",
  },
  {
    number: "04",
    title: "Executing",
    description:
      "Approaching each matter with diligence, attention to detail and commitment to achieving the client's lawful objectives.",
  },
  {
    number: "05",
    title: "Communicating",
    description:
      "Maintaining clear, timely and professional communication throughout the engagement.",
  },
];

export default function ClientApproach() {
  return (
    <section className="bg-cream py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <SectionHeading
            eyebrow="Our Client-Centric Approach"
            title="The client is at the heart of our practice."
          />

          <div className="border-t border-line">
            {principles.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.05}>
                <div className="grid gap-4 border-b border-line py-7 sm:grid-cols-[70px_180px_1fr] sm:items-start sm:gap-6">
                  <span className="font-serif text-sm text-gold-dark">
                    {item.number}
                  </span>

                  <h3 className="font-serif text-2xl text-ink">{item.title}</h3>

                  <p className="max-w-lg text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
