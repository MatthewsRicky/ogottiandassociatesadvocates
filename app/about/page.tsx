import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import FirmStory from "@/components/about/FirmStory";
import ManagingPartnerProfile from "@/components/about/ManagingPartnerProfile";
import TeamSection from "@/components/about/TeamSection";
import ProfessionalStandards from "@/components/about/ProfessionalStandards";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Learn about L.A. Ogotti & Associates Advocates, our Managing Partner, team and professional approach.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FirmStory />
      <ManagingPartnerProfile />
      <TeamSection />
      <ProfessionalStandards />
      <FinalCTA />
    </>
  );
}
