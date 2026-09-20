"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { firm } from "@/data/firm";
import Image from "next/image";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Our Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-20" : "h-24"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
          >
            {/* <span className="flex h-9 w-9 items-center justify-center border border-gold text-[11px] font-medium tracking-[0.08em] text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
              LA
            </span> */}
            <Image
            src={"/images/logo.png"}
            alt="Main Firm logo"
            width={60}
            height={25} 
            />

            <span className="hidden sm:block">
              <span className="block font-serif text-lg leading-none text-cream">
                L.A. Ogotti
              </span>

              <span className="mt-1 block text-[8px] uppercase tracking-[0.2em] text-cream/55">
                & Associates Advocates
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] font-medium uppercase tracking-[0.18em] text-cream/75 transition-colors duration-300 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="border border-gold/70 px-5 py-3 text-[9px] font-medium uppercase tracking-[0.16em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
            >
              Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>

            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-px w-5 bg-gold transition-transform duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2 block h-px w-5 bg-gold transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-4 block h-px w-5 bg-gold transition-transform duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute inset-x-0 top-full border-t border-white/10 bg-ink/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <div className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.15em] text-cream/80 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit bg-gold px-5 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-gold-light"
            >
              Request a Consultation
            </Link>
          </div>

          <p className="mt-8 text-xs leading-6 text-cream/40">
            {firm.address.building}, {firm.address.floor}
            <br />
            {firm.address.road}, {firm.address.town}
          </p>
        </nav>
      </div>
    </header>
  );
}
