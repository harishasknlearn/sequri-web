import type { Metadata } from "next";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Why Sequri",
  description:
    "Cyber resilience redefined. Understand the business risks of inadequate cybersecurity and how Sequri protects your brand, people, assets, and profits.",
};

const CONSEQUENCES = [
  {
    title: "Operational Disruption",
    desc: "Cybersecurity incidents can halt core business operations, leading to severe downtime and lost productivity.",
  },
  {
    title: "Ransomware Attacks",
    desc: "Adversaries encrypt mission-critical systems and demand extortion payments for data release.",
  },
  {
    title: "Disruption of Services",
    desc: "Distributed denial-of-service (DDoS) and infrastructure attacks take customer-facing platforms offline.",
  },
  {
    title: "Compliance Violations",
    desc: "Inadequate controls result in breaches of ISO 27001, GDPR, HIPAA, PCI-DSS, and local data protection laws.",
  },
  {
    title: "Data Breaches",
    desc: "Unauthorized access to customer and financial records causes direct financial loss and reputational damage.",
  },
  {
    title: "Intellectual Property Theft",
    desc: "Exfiltration of proprietary source code and R&D undermines competitive market advantage.",
  },
  {
    title: "Identity Theft",
    desc: "Stolen credentials allow attackers to pivot across cloud accounts, email, and financial systems.",
  },
  {
    title: "Regulatory Penalties",
    desc: "Weak security posture invites regulatory scrutiny, statutory fines, and legal liability.",
  },
];

export default function WhySequriPage() {
  return (
    <>
      <PageHero
        badge="Why Sequri"
        title="Cyber Resilience Redefined: Unveiling the Sequri Difference"
        description="Empowering your defense against digital threats with proactive threat intelligence, 24/7 monitoring, and ISO-certified engineering."
        breadcrumbs={[{ label: "Why Sequri" }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              The Risk Landscape
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy">
              Consequences of Inadequate Cybersecurity Measures
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Cybersecurity encompasses the practices, technologies, and processes
              designed to safeguard confidentiality, integrity, and availability. Without
              layered defenses, organizations face compounding business risks:
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONSEQUENCES.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <AlertTriangle className="h-5 w-5 text-amber-600" aria-hidden="true" />
                <h3 className="mt-3 font-display text-base font-bold text-navy">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-blue-200 bg-blue-50/70 p-8 sm:p-12">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy">
                  The Sequri Solution
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700">
                  We provide robust, measurable solutions to eliminate weak cybersecurity
                  practices. Through advanced encryption, zero-trust access controls,
                  24/7 SOC monitoring, VAPT, and incident response, Sequri prevents data
                  breaches and ransomware attacks—minimizing financial losses and
                  protecting your reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
