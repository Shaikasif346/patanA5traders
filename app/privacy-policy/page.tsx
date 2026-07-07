import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${company.name}`
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="July 7, 2026">
      <section>
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Information We Collect</h2>
        <p className="mt-3">
          We may collect contact details, company information, product requirements, destination country, quantity,
          messages, and communication preferences when you submit an inquiry or contact us.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">How We Use Information</h2>
        <p className="mt-3">
          Information is used to respond to inquiries, prepare quotations, coordinate sourcing, support export or import
          documentation, and improve customer service.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Contact</h2>
        <p className="mt-3">
          For privacy questions, contact {company.email} or call +91 {company.phone}.
        </p>
      </section>
    </LegalPage>
  );
}
