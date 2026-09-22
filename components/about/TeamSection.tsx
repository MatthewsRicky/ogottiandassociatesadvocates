import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { associates, legalAssistant, managingPartner } from "@/data/team";

function InitialsCard({
  name,
  role,
  initials,
}: {
  name: string;
  role: string;
  initials: string;
}) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(184,154,90,0.16),transparent_45%)]" />

      <div className="absolute inset-6 border border-gold/15 sm:inset-8" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-7xl tracking-[-0.05em] text-gold/80 sm:text-8xl">
          {initials}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink via-ink/85 to-transparent px-6 pb-6 pt-16 sm:px-8 sm:pb-8">
        <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-gold">
          {role}
        </p>

        <p className="mt-2 font-serif text-2xl leading-tight text-cream">
          {name}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="bg-paper py-24 sm:py-32 lg:py-40">
      <Container>
        {/* Section introduction */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-dark">
              Our People
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-ink sm:text-5xl lg:text-6xl">
              A focused team,
              <br />
              committed to your matter.
            </h2>

            <p className="mt-7 text-base leading-8 text-muted">
              Our team brings together legal experience, practical judgment and
              dedicated support across the matters entrusted to the Firm.
            </p>
          </div>
        </Reveal>

        {/* Managing Partner */}
        <div className="mt-20 border-t border-line pt-10 sm:mt-24">
          <Reveal>
            <div className="mb-10 flex items-center gap-5">
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-dark">
                01
              </span>

              <span className="h-px w-10 bg-gold/50" />

              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-muted">
                Managing Partner
              </p>
            </div>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
                {/* Replace this path if the final image location changes */}
                <img
                  src="/images/team/leonida.jpeg"
                  alt={`${managingPartner.name}, ${managingPartner.role}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(184,154,90,0.12),transparent_45%)]" />

                <div className="absolute inset-6 border border-gold/20 sm:inset-8" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-gold-dark">
                  {managingPartner.qualification}
                </p>

                <h3 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.025em] text-ink sm:text-5xl">
                  {managingPartner.name}
                </h3>

                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
                  {managingPartner.role}
                </p>

                <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
                  {managingPartner.shortBio}
                </p>

                <div className="mt-8 space-y-3 border-l border-gold/50 pl-6">
                  {managingPartner.education.map((item) => (
                    <p key={item} className="text-sm leading-7 text-ink/70">
                      {item}
                    </p>
                  ))}

                  <p className="pt-1 text-sm leading-7 text-ink/70">
                    {managingPartner.admission}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Associates */}
        <div className="mt-28 border-t border-line pt-10 sm:mt-36">
          <Reveal>
            <div className="mb-10 flex items-center gap-5">
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-dark">
                02
              </span>

              <span className="h-px w-10 bg-gold/50" />

              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-muted">
                Our Associates
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {associates.map((associate, index) => {
              const initials = associate.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2);

              return (
                <Reveal key={associate.name} delay={index * 0.08}>
                  <article>
                    <InitialsCard
                      name={associate.name}
                      role={associate.role}
                      initials={initials}
                    />

                    <div className="pt-6">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gold-dark">
                        {associate.admission}
                      </p>

                      <p className="mt-5 text-sm leading-7 text-muted">
                        {associate.shortBio}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                        {associate.practiceAreas.map((area) => (
                          <span
                            key={area}
                            className="text-[9px] uppercase tracking-[0.16em] text-ink/55"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Legal Support */}
        <div className="mt-28 border-t border-line pt-10 sm:mt-36">
          <Reveal>
            <div className="mb-10 flex items-center gap-5">
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-dark">
                03
              </span>

              <span className="h-px w-10 bg-gold/50" />

              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-muted">
                Legal Support
              </p>
            </div>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
            <Reveal>
              <InitialsCard
                name={legalAssistant.name}
                role={legalAssistant.role}
                initials={legalAssistant.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h3 className="font-serif text-4xl tracking-[-0.025em] text-ink sm:text-5xl">
                  {legalAssistant.name}
                </h3>

                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
                  {legalAssistant.role}
                </p>

                <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
                  {legalAssistant.shortBio}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {legalAssistant.responsibilities.map((responsibility) => (
                    <div
                      key={responsibility}
                      className="border-t border-line pt-3"
                    >
                      <p className="text-sm leading-6 text-ink/70">
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
