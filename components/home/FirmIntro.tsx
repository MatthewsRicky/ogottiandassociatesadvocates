import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FirmIntro() {
  return (
    <section className="bg-cream py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <SectionHeading
            eyebrow="Who We Are"
            title="A boutique practice built around your interests."
          />

          <Reveal delay={0.1}>
            <div>
              <p className="text-xl leading-9 text-ink sm:text-2xl sm:leading-10">
                L.A. Ogotti & Associates Advocates is a boutique law firm
                established in April 2025, with its offices located at Kirsch
                Plaza along Diani Beach Road.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
                The Firm provides professional legal services to individuals,
                families, entrepreneurs, businesses, property developers,
                investors, companies and other organisations.
              </p>

              <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
                Our practice is founded on a simple but meaningful principle:
                understanding each client's objectives, exercising sound
                professional judgment and remaining committed to protecting
                their lawful interests.
              </p>

              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-4 border-b border-gold pb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold-dark"
              >
                Learn More About the Firm
                <span className="text-gold">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
