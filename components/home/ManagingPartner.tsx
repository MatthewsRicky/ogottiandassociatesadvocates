import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { managingPartner } from "@/data/team";
import Image from "next/image";

export default function ManagingPartner() {
  return (
    <section className="bg-ink py-24 text-cream sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
              <Image
                src="/images/team/leonida.jpeg"
                alt="Leonida Atieno Ogotti, Founder and Managing Partner"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(184,154,90,0.14),transparent_45%)]" />

              <div className="absolute inset-8 border border-gold/20" />

              <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <div className=" bg-black/70 p-2 md:p-6 rounded-xl">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-gold">
                    Managing Partner
                  </p>

                  <p className="mt-4 font-serif text-3xl leading-tight text-cream/80">
                    Leonida
                    <br />
                    Atieno Ogotti
                  </p>

                  <div className="mx-auto mt-6 h-px w-12 bg-gold" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
              About the Managing Partner
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              {managingPartner.name}
            </h2>

            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-cream/45">
              {managingPartner.role}
            </p>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-cream/60">
              <p>{managingPartner.shortBio}</p>

              <p>
                As Managing Partner, Leonida takes a hands-on approach to the
                Firm's work, placing particular emphasis on understanding each
                client's objectives before developing an appropriate legal
                strategy.
              </p>
            </div>

            <blockquote className="mt-9 border-l border-gold pl-6 font-serif text-xl leading-8 text-cream/80">
              “{managingPartner.philosophy}”
            </blockquote>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-light"
            >
              Meet the Firm
              <span>→</span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}