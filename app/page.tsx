import { SiteClient } from "@/components/site-client";
import { company, products, services } from "@/data/site";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.name,
    description: company.description,
    url: "https://patana5traders.com",
    email: company.email,
    telephone: `+91${company.phone}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kadapa District",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN"
    },
    sameAs: [company.linkedin],
    makesOffer: products.map((product) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: product.name,
        category: product.category,
        description: product.description,
        countryOfOrigin: "India"
      }
    })),
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
