import type { Metadata } from "next";
import { FAQS } from "@/data/faq";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Sequri Pvt. Ltd., Managed Security Services, VAPT, ISO 27001 audits, and Incident Response.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about Sequri Pvt. Ltd., our Managed Security Services, and how we protect your organization."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
