import type { Metadata } from "next";

const siteUrl = "https://ogottilaw.co.ke";

export const siteMetadata = {
  name: "L.A. Ogotti & Associates Advocates",
  description:
    "Boutique legal practice providing professional legal services to individuals, families, businesses, property developers, investors and organisations in Kenya.",
  url: siteUrl,
};

export function createMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,

    metadataBase: new URL(siteUrl),

    alternates: {
      canonical: siteUrl,
    },

    openGraph: {
      type: "website",
      locale: "en_KE",
      url: siteUrl,
      siteName: siteMetadata.name,
      title: `${title} | ${siteMetadata.name}`,
      description,
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteMetadata.name}`,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
