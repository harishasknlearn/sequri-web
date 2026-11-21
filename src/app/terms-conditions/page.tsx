import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for using Sequri (sequri.in) websites and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Terms & Conditions"
        description={`Terms governing the use of ${SITE_CONFIG.domain} and ${SITE_CONFIG.legalName} services.`}
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 text-sm leading-relaxed text-slate-600">
          <p>
            By accessing <strong>{SITE_CONFIG.domain}</strong>, you agree to comply with
            these Terms & Conditions and all applicable laws and regulations.
          </p>
          <h2 className="font-display text-xl font-bold text-navy pt-2">
            1. Scope of Cybersecurity Services
          </h2>
          <p>
            All penetration testing, vulnerability assessments, incident response, and
            managed SOC engagements are governed by mutually executed Master Service
            Agreements (MSA) and explicit written authorization rules of engagement.
          </p>
          <h2 className="font-display text-xl font-bold text-navy pt-2">
            2. Intellectual Property
          </h2>
          <p>
            All content, trademarks, methodologies, and brand materials for Sequri
            remain the intellectual property of{" "}
            {SITE_CONFIG.legalName}.
          </p>
          <h2 className="font-display text-xl font-bold text-navy pt-2">
            3. Contact
          </h2>
          <p>
            Questions regarding these terms may be directed to{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand font-semibold hover:underline">
              {SITE_CONFIG.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
