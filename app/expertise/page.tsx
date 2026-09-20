import type { Metadata } from "next";
import ExpertiseHero from "@/components/expertise/ExpertiseHero";
import ExpertiseGrid from "@/components/expertise/ExpertiseGrid";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Our Expertise",
  description:
    "Explore the legal practice areas of L.A. Ogotti & Associates Advocates, including real estate, commercial law, employment, succession, litigation and family law.",
};

export default function ExpertisePage() {
  return (
    <>
      <ExpertiseHero />
      <ExpertiseGrid />
      <FinalCTA />
    </>
  );
}
