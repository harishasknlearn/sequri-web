import type { Metadata } from "next";
import { Search, ShieldAlert, Layers, Activity } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Sequri's four-phase cybersecurity methodology: Discover, Assess, Architect & Remediate, and Monitor 24/7.",
};

const PHASES = [
  {
    step: "01",
    title: "Discovery & Threat Modeling",
    icon: Search,
    description:
      "We map your business objectives, crown-jewel data assets, cloud/on-prem topology, and regulatory obligations (ISO 27001, GDPR, HIPAA, PCI-DSS).",
  },
  {
    step: "02",
    title: "Offensive & Compliance Assessment",
    icon: ShieldAlert,
    description:
      "Our analysts execute manual-led VAPT across web apps, APIs, networks, and Wi-Fi alongside comprehensive ISMS and GRC gap audits.",
  },
  {
    step: "03",
    title: "Architecture & Decontamination",
    icon: Layers,
    description:
      "We remediate active compromises via Network Decontamination (NDaS), harden DevSecOps pipelines, and deploy defense-in-depth security architectures.",
  },
  {
    step: "04",
    title: "24/7 SOC & Continuous Resilience",
    icon: Activity,
    description:
      "Round-the-clock SIEM correlation, threat hunting, patch governance, and incident response retainers keep your organization protected as threats evolve.",
  },
];

export default function OurApproachPage() {
  return (
    <>
      <PageHero
        badge="Methodology"
        title="Our Holistic Approach to Cyber Resilience"
        description="Combining Training, Services, Research, and Development into a repeatable four-phase security lifecycle."
        breadcrumbs={[{ label: "Our Approach" }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {PHASES.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.step}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-2xl font-bold text-slate-300">
                      {p.step}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-navy">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 border-t border-slate-200 pt-14">
            <h2 className="font-display text-2xl font-bold text-navy">
              4 Verticals Powering Every Engagement
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SITE_CONFIG.verticals.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="font-display text-lg font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
