import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Award, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { CASE_STUDIES } from "@/data/case-studies";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Clientele & Partners",
  description:
    "Trusted by enterprises, premier universities, and government agencies across India, the US, UK, and Africa.",
};

const FEATURED_CLIENTS = [
  { name: "Indian School of Business (ISB)", sector: "Education & Research" },
  { name: "NALSAR University of Law", sector: "Cyber Forensics & Academia" },
  { name: "Apisero, Inc.", sector: "ITES & Global Consulting" },
  { name: "Republic of Gabon", sector: "Government & Public Sector" },
  { name: "Ministry of Home Affairs (Recognition)", sector: "Defense & Law Enforcement" },
  { name: "Telangana State Government (Recognition)", sector: "Public Sector" },
];

export default function ClientelePage() {
  return (
    <>
      <PageHero
        badge="Our Clientele"
        title="Trusted by Enterprises, Universities & Public Institutions"
        description="Sequri has positioned itself as a premier choice for top-level organizations seeking comprehensive security solutions across India and around the globe."
        breadcrumbs={[{ label: "Clientele & Partners" }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Clients */}
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">
              Highlighted Organizations & Recognitions
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_CLIENTS.map((c) => (
                <div
                  key={c.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <Building2 className="h-5 w-5 text-brand" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-lg font-bold text-navy">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {c.sector}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* OEM Partners */}
          <div className="rounded-2xl border border-slate-200 bg-navy p-8 sm:p-10 text-white">
            <div className="flex items-center gap-2 text-cyan text-xs font-semibold uppercase tracking-wider">
              <Award className="h-4 w-4" aria-hidden="true" />
              Technology & Platform Partnerships
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold">
              Collaborating with Leading Security & Cloud OEMs
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Our technical collaborations with global technology leaders help Sequri
              deliver cutting-edge managed security operations and cloud defense.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {SITE_CONFIG.partners.map((p) => (
                <span
                  key={p}
                  className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Case Studies CTA */}
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-xl font-bold text-navy">
                Explore {CASE_STUDIES.length} Verified Client Case Studies
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                See how we helped ISB, Apisero, NALSAR, and global enterprises achieve
                measurable resilience.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
            >
              View Case Studies
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
