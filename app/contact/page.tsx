import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ConsultationForm from "@/components/contact/ConsultationForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact L.A. Ogotti & Associates Advocates in Diani Beach, Kenya to discuss your legal matter or request a consultation.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <ConsultationForm />
    </>
  );
}
