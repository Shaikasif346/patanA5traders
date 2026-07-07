import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${company.name}`
};

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions" updated="July 7, 2026">
      <section>
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">General Terms</h2>
        <p className="mt-3">
          Quotations, product availability, prices, shipping timelines, packaging, samples, and documentation are subject
          to confirmation based on product type, supplier readiness, destination requirements, and agreed payment terms.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Orders and Payments</h2>
        <p className="mt-3">
          Orders are processed after written confirmation. Payment terms, inspection requirements, and delivery
          responsibilities must be agreed before shipment.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Trade Compliance</h2>
        <p className="mt-3">
          Buyers are responsible for destination-country import requirements unless otherwise agreed in writing.
        </p>
      </section>
    </LegalPage>
  );
}
