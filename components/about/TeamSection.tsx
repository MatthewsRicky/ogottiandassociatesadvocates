import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { legalAssistant } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="bg-paper py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-dark">
              Legal Support
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl">
              Supporting the practice with care and precision.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-line">
              <div className="grid gap-8 border-b border-line py-10 sm:grid-cols-[180px_1fr]">
                <div>
                  <div className="flex aspect-[4/5] items-center justify-center bg-cream">
                    <span className="font-serif text-4xl text-gold-dark">
                      CM
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gold-dark">
                    {legalAssistant.role}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
                    {legalAssistant.name}
                  </h3>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
                    {legalAssistant.shortBio}
                  </p>

                  <div className="mt-7 space-y-2">
                    {legalAssistant.responsibilities.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-muted"
                      >
                        <span className="text-gold">—</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
