import type { Metadata } from "next";
import { Award, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { TIMELINE } from "@/data/team";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Sequri",
  description:
    "Founded in 2009, Sequri Pvt. Ltd. is an ISO/IEC 27001:2013 certified Managed Security Services organization headquartered in Hyderabad, India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Safeguarding Your Digital World Since 2009"
        description="Sequri Pvt. Ltd. is an ISO/IEC 27001:2013 certified Managed Security Services organization operating nationwide and globally."
        breadcrumbs={[{ label: "About Sequri" }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Our Story
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy">
                Dedicated to Delivering Cybersecurity Excellence
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Formed in 2009 and restructured in November 2017 by{" "}
                <strong>Krishna Chaitanya Suraparaju</strong> and{" "}
                <strong>Praveen Kumar Suraparaju</strong>, our organization became one of
                the first to deliver enterprise-grade Managed Security Services to the
                SMB and mid-market sector—now unified under the{" "}
                <strong>Sequri</strong> brand.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Headquartered in Hyderabad, India, with offices serving the United States
                and United Kingdom, Sequri is{" "}
                <strong>{SITE_CONFIG.certification} certified</strong> and operates across
                four integrated verticals: Training, Services, Research, and Development.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {SITE_CONFIG.verticals.map((v) => (
                  <span
                    key={v.title}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-navy"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" />
                    {v.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {SITE_CONFIG.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="font-display text-3xl font-bold text-brand">
                    {m.value.toLocaleString()}
                    {m.suffix}
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-700">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Milestones
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy">
              Everyone Has a Story. Here Is Ours.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TIMELINE.map((item) => (
              <div
                key={item.year}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 font-mono text-xs font-bold text-brand">
                  <Award className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.year}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
