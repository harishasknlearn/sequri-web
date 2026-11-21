import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/case-studies";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Verified cybersecurity case studies from Sequri Pvt. Ltd.: Apisero ISO 27001, Indian School of Business (ISB), NALSAR Cyber Forensic Lab, and Republic of Gabon.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        badge="Case Studies"
        title="Real-World Cyber Resilience & Measurable Impact"
        description="Explore how Sequri helps enterprises, universities, and public-sector institutions eliminate vulnerabilities, achieve ISO certification, and recover from incidents."
        breadcrumbs={[{ label: "Case Studies" }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-brand">
                      {cs.industry}
                    </span>
                    <span className="font-mono text-xs text-slate-500">{cs.client}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-navy group-hover:text-brand transition-colors">
                    {cs.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {cs.summary}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="font-mono text-xs font-semibold text-navy">
                    {cs.impactMetric}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Read study
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
