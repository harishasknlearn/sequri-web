import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  FileCheck2,
  Layers,
  Activity,
  Siren,
  Network,
  Code2,
  ArrowRight,
  Check,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Managed Security Services",
  description:
    "Explore Sequri's Managed Security Services: Security Testing & VAPT, Compliance Verification & ISO 27001, Security Architecture, 24/7 SOC, Incident Response, Network Decontamination, and Secure SDLC.",
};

const ICON_MAP = {
  ShieldCheck,
  FileCheck2,
  Layers,
  Activity,
  Siren,
  Network,
  Code2,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Managed Security Services"
        title="End-to-End Cybersecurity Solutions Built for Resilience"
        description="Whether you need offensive penetration testing, ISO/IEC 27001 compliance readiness, or round-the-clock SOC monitoring, Sequri delivers measurable protection."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {SERVICES.map((svc) => {
              const Icon = ICON_MAP[svc.icon];
              return (
                <div
                  key={svc.slug}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:border-brand/40 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h2 className="font-display text-2xl font-bold text-navy">
                        {svc.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {svc.summary}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {svc.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
                          <Check className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div className="flex flex-wrap gap-1.5">
                      {svc.standards.slice(0, 3).map((st) => (
                        <span
                          key={st}
                          className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-600"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                    >
                      Explore
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
