import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { managingPartner } from "@/data/team";

export default function ManagingPartnerProfile() {
  return (
    <section className="bg-ink py-24 text-cream sm:py-32 lg:py-40">
      <Container>
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
              Leadership
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              The Managing Partner
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
          {/* Replace the image path with your actual Leonida image path */}
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
              <img
                src="/images/team/leonida.jpeg"
                alt={managingPartner.name}
                className="h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-5 border border-white/15" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
              {managingPartner.qualification}
            </p>

            <h3 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              {managingPartner.name}
            </h3>

            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-cream/45">
              {managingPartner.role}
            </p>

            <div className="mt-9 space-y-6 text-base leading-8 text-cream/60">
              <p>{managingPartner.shortBio}</p>

            

              <p>
                Leonida founded the Firm in April 2025 with a philosophy centred
                on accessible, responsive and meticulous legal representation.
              </p>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
                Education & Admission
              </p>

              <div className="mt-5 space-y-3 text-sm leading-7 text-cream/60">
                {managingPartner.education.map((item) => (
                  <p key={item}>{item}</p>
                ))}

                <p>{managingPartner.admission}</p>
              </div>
            </div>

          </Reveal>
        </div>
      </Container>
    </section>
  );
}
