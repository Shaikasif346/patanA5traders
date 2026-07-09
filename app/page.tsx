import { SiteClient } from "@/components/site-client";
import { company, services } from "@/data/site";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.name,
    description: company.description,
    url: "https://www.patana5traders.com",
    email: company.email,
    telephone: `+91${company.phone}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kadapa District",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN"
    },
    sameAs: [company.linkedin],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Import Export Services",
      itemListElement: services.map(([name, description]) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          description
        }
      }))
    }
  };

  return (
    <>
      <SiteClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
