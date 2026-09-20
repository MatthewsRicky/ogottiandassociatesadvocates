import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { expertise } from "@/data/expertise";

export default function ExpertisePreview() {
  return (
    <section className="bg-paper py-24 sm:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Our Expertise"
          title="Legal guidance across matters that matter."
          description="Our practice brings together legal knowledge, practical judgment and close attention to the circumstances of each client."
        />

        <div className="mt-16 border-t border-line">
          {expertise.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.04}>
              <Link
                href={`/expertise#${item.number}`}
                className="group grid gap-5 border-b border-line py-7 transition-colors hover:bg-cream sm:grid-cols-[70px_1fr_auto] sm:items-center sm:px-4"
              >
                <span className="font-serif text-sm text-gold-dark">
                  {item.number}
                </span>

                <div>
                  <h3 className="font-serif text-2xl text-ink transition-colors group-hover:text-gold-dark sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                    {item.shortDescription}
                  </p>
                </div>

                <span className="hidden text-xl text-gold transition-transform duration-300 group-hover:translate-x-1 sm:block">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9">
          <Link
            href="/expertise"
            className="inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold-dark"
          >
            View All Areas of Expertise
            <span className="text-gold">→</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
