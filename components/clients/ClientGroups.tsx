import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const clientGroups = [
  {
    number: "01",
    title: "Individuals & Families",
    description:
      "Legal advice and representation for personal, property, family, succession and other individual legal matters.",
  },
  {
    number: "02",
    title: "Property Developers",
    description:
      "Legal support across property acquisition, due diligence, development transactions, documentation and registration.",
  },
  {
    number: "03",
    title: "Property Investors",
    description:
      "Advice relating to property ownership, transactions, due diligence, contracts and investment structures.",
  },
  {
    number: "04",
    title: "Companies & Corporates",
    description:
      "Commercial and corporate legal services covering contracts, compliance, transactions and general corporate advisory.",
  },
  {
    number: "05",
    title: "Entrepreneurs & SMEs",
    description:
      "Practical legal support for businesses navigating contracts, structures, employment matters and commercial relationships.",
  },
  {
    number: "06",
    title: "Executors, Administrators & Beneficiaries",
    description:
      "Legal assistance with succession, probate, grants, estate administration and related matters.",
  },
  {
    number: "07",
    title: "Local & International Clients",
    description:
      "Professional legal services for clients based in Kenya and those with interests or transactions requiring legal support in the country.",
  },
];

export default function ClientGroups() {
  return (
    <section className="bg-cream py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="border-t border-line">
          {clientGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 0.04}>
              <div className="grid gap-5 border-b border-line py-9 sm:grid-cols-[80px_280px_1fr] sm:items-start sm:gap-8">
                <span className="font-serif text-sm text-gold-dark">
                  {group.number}
                </span>

                <h2 className="font-serif text-2xl text-ink sm:text-3xl">
                  {group.title}
                </h2>

                <p className="max-w-xl text-sm leading-7 text-muted">
                  {group.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
