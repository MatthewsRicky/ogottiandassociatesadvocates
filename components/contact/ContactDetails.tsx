import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { firm } from "@/data/firm";

export default function ContactDetails() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold-dark">
              Visit Us
            </p>

            <address className="mt-5 not-italic text-base leading-8 text-ink">
              {firm.address.building}
              <br />
              {firm.address.floor}
              <br />
              {firm.address.road}
              <br />
              {firm.address.town}
            </address>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold-dark">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-3 text-base">
              <a
                href={`tel:${firm.contact.phone.replace(/\s/g, "")}`}
                className="text-ink transition-colors hover:text-gold-dark"
              >
                {firm.contact.phone}
              </a>

              <a
                href={`mailto:${firm.contact.primaryEmail}`}
                className="text-ink transition-colors hover:text-gold-dark"
              >
                {firm.contact.primaryEmail}
              </a>

              <a
                href={`mailto:${firm.contact.partnerEmail}`}
                className="text-ink transition-colors hover:text-gold-dark"
              >
                {firm.contact.partnerEmail}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold-dark">
              Office Hours
            </p>

            <div className="mt-5 text-base leading-8 text-muted">
              <p>{firm.hours.weekdays}</p>
              <p className="mt-2">{firm.hours.weekends}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
