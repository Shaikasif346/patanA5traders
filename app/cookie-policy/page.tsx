import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for PatanA5Traders"
};

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" updated="July 7, 2026">
      <section>
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Use of Cookies</h2>
        <p className="mt-3">
          This website may use essential cookies, analytics technologies, or embedded third-party services such as maps to
          improve performance, security, and usability.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Managing Cookies</h2>
        <p className="mt-3">
          You can manage or block cookies through your browser settings. Blocking some cookies may affect website
          functionality.
        </p>
      </section>
    </LegalPage>
  );
}
