import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { managingPartner } from "@/data/team";

export default function ManagingPartner() {
  return (
    <section className="bg-ink py-24 text-cream sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          {/* Portrait */}
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
              <Image
                src="/images/team/leonida.jpeg"
                alt={`${managingPartner.name}, ${managingPartner.role}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(184,154,90,0.14),transparent_45%)]" />

              <div className="absolute inset-6 border border-gold/20 sm:inset-8" />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <div className="bg-ink/85 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-gold">
                    Managing Partner
                  </p>

                  <p className="mt-2 font-serif text-xl leading-tight text-cream">
                    Leonida Atieno Ogotti
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
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

            <p className="mt-8 max-w-2xl text-base leading-8 text-cream/60">
              {managingPartner.shortBio}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-cream/60">
              As Managing Partner, Leonida takes a hands-on approach to the
              Firm&apos;s work and places particular emphasis on understanding
              each client&apos;s objectives before developing an appropriate
              legal strategy.
            </p>

            <blockquote className="mt-9 max-w-2xl border-l border-gold pl-6 font-serif text-xl leading-8 text-cream/80">
              “Clients deserve lawyers who are accessible, responsive,
              meticulous and committed to their matters.”
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
