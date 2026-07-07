import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for PatanA5Traders"
};

export default function Disclaimer() {
  return (
    <LegalPage title="Disclaimer" updated="July 7, 2026">
      <section>
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Business Information</h2>
        <p className="mt-3">
          Website content is provided for general business information. Product images, specifications, certifications,
          availability, pricing, and timelines are representative and must be confirmed before any commercial commitment.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">External Services</h2>
        <p className="mt-3">
          Third-party services such as maps, freight partners, banks, inspection agencies, and government portals operate
          under their own terms and availability.
        </p>
      </section>
    </LegalPage>
  );
}
