import Hero from "@/components/home/Hero";
import FirmIntro from "@/components/home/FirmIntro";
import ExpertisePreview from "@/components/home/ExpertisePreview";
import ManagingPartner from "@/components/home/ManagingPartner";
import ClientApproach from "@/components/home/ClientApproach";
import DevelopersInvestors from "@/components/home/DevelopersInvestors";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FirmIntro />
      <ExpertisePreview />
      <ManagingPartner />
      <ClientApproach />
      <DevelopersInvestors />
      <FinalCTA />
    </>
  );
}
