import { firm } from "@/data/firm";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: firm.name,
    description:
      "Boutique legal practice providing professional legal services to individuals, families, businesses, property developers, investors and organisations.",
    telephone: firm.contact.phone,
    email: firm.contact.primaryEmail,

    address: {
      "@type": "PostalAddress",
      streetAddress: `${firm.address.building}, ${firm.address.floor}, ${firm.address.road}`,
      addressLocality: "Diani Beach",
      addressCountry: "KE",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
