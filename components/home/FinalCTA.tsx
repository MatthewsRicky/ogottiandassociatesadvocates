import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(184,154,90,0.1),transparent_40%)]" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
            Begin a Conversation
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-8xl">
            Legal matters require the right advice.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-cream/55 sm:text-lg">
            Whether you are navigating a property transaction, a business
            matter, a dispute or a personal legal concern, our Firm is available
            to discuss your circumstances.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-4 bg-gold px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light"
          >
            Contact the Firm
            <span>→</span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
