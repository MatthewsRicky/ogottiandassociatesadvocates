import type { Metadata } from "next";
import ClientsHero from "@/components/clients/ClientsHero";
import ClientGroups from "@/components/clients/ClientGroups";
import ClientApproach from "@/components/clients/ClientApproach";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "L.A. Ogotti & Associates Advocates provides legal services to individuals, families, businesses, entrepreneurs, property developers, investors and organisations.",
};

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientGroups />
      <ClientApproach />
      <FinalCTA />
    </>
  );
}
