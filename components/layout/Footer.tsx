"use client"

import Link from "next/link";
import Container from "@/components/ui/Container";
import { firm } from "@/data/firm";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:py-20">
          <div>
            <div className="flex items-center gap-3">
              {/* <span className="flex h-10 w-10 items-center justify-center border border-gold text-[11px] font-medium tracking-[0.08em] text-gold">
                LA
              </span> */}

              <Image
                src={"/images/logo.png"}
                alt="Main Firm logo"
                width={60}
                height={25}
              />

              <div>
                <p className="font-serif text-xl">L.A. Ogotti</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-cream/45">
                  & Associates Advocates
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-7 text-cream/55">
              Professional legal services delivered with integrity, diligence
              and commitment.
            </p>

            <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-gold">
              Dedicated to You, Committed to Integrity
            </p>
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/about"
                className="text-sm text-cream/60 transition-colors hover:text-gold"
              >
                About the Firm
              </Link>

              <Link
                href="/expertise"
                className="text-sm text-cream/60 transition-colors hover:text-gold"
              >
                Our Expertise
              </Link>

              <Link
                href="/clients"
                className="text-sm text-cream/60 transition-colors hover:text-gold"
              >
                Our Clients
              </Link>

              <Link
                href="/contact"
                className="text-sm text-cream/60 transition-colors hover:text-gold"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
              Visit the Firm
            </p>

            <address className="mt-5 not-italic text-sm leading-7 text-cream/60">
              {firm.address.building}
              <br />
              {firm.address.floor}
              <br />
              {firm.address.road}
              <br />
              {firm.address.town}
            </address>

            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${firm.contact.phone.replace(/\s/g, "")}`}
                className="text-cream/60 transition-colors hover:text-gold"
              >
                {firm.contact.phone}
              </a>

              <a
                href={`mailto:${firm.contact.primaryEmail}`}
                className="text-cream/60 transition-colors hover:text-gold"
              >
                {firm.contact.primaryEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[10px] uppercase tracking-[0.12em] text-cream/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} L.A. Ogotti & Associates Advocates</p>

          <p>Professional Legal Services · Diani Beach, Kenya</p>
        </div>
      </Container>
    </footer>
  );
}
