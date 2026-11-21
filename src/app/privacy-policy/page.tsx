import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Sequri Pvt. Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        description={`How ${SITE_CONFIG.legalName} collects, protects, and processes personal and organizational information.`}
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 text-sm leading-relaxed text-slate-600">
          <p>
            {SITE_CONFIG.legalName} (&ldquo;Sequri&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;)
            is committed to safeguarding the privacy and security of information shared
            with us through <strong>sequri.in</strong> and our Managed Security Services.
          </p>
          <h2 className="font-display text-xl font-bold text-navy pt-2">
            1. Information We Collect
          </h2>
          <p>
            When you request a security audit, consultation, or contact our team, we
            collect business contact details such as your name, organization, phone
            number, company email, and project scope.
          </p>
          <h2 className="font-display text-xl font-bold text-navy pt-2">
            2. How We Use Information
          </h2>
          <p>
            We use submitted information strictly to respond to your inquiry, deliver
            requested cybersecurity assessments or managed services, and fulfill legal
            and ISO/IEC 27001 compliance obligations. We never sell personal data to third
            parties.
          </p>
          <h2 className="font-display text-xl font-bold text-navy pt-2">
            3. Data Security & Retention
          </h2>
          <p>
            As an ISO/IEC 27001:2013 certified organization, we enforce strict access
            controls, encryption, and retention policies to protect all client and
            inquiry records.
          </p>
          <h2 className="font-display text-xl font-bold text-navy pt-2">
            4. Contact
          </h2>
          <p>
            For privacy inquiries, contact us at{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand font-semibold hover:underline">
              {SITE_CONFIG.email}
            </a>{" "}
            or write to {SITE_CONFIG.offices[0].address}.
          </p>
        </div>
      </section>
    </>
  );
}
