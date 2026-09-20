import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { expertise } from "@/data/expertise";

export default function ExpertiseGrid() {
  return (
    <section className="bg-paper py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="border-t border-line">
          {expertise.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.04}>
              <article
                id={item.number}
                className="scroll-mt-28 border-b border-line py-12 sm:py-16"
              >
                <div className="grid gap-8 lg:grid-cols-[90px_0.8fr_1fr] lg:gap-12">
                  <span className="font-serif text-lg text-gold-dark">
                    {item.number}
                  </span>

                  <div>
                    <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
                      {item.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-muted">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm leading-8 text-muted">
                      {item.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-3 border-b border-gold pb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold-dark"
                    >
                      Discuss Your Matter
                      <span className="text-gold">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
