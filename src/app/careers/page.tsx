import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Sequri's cybersecurity engineering, 24/7 SOC, penetration testing, and GRC advisory teams.",
};

const OPEN_ROLES = [
  {
    title: "SOC Analyst (Tier 1 / Tier 2)",
    location: "Hyderabad, India (Hybrid)",
    type: "Full-time",
    summary:
      "Monitor SIEM telemetry, triage security alerts, conduct threat hunting, and coordinate rapid incident containment for global enterprise clients.",
  },
  {
    title: "Penetration Tester / VAPT Specialist",
    location: "Hyderabad / Remote",
    type: "Full-time",
    summary:
      "Execute manual and automated security assessments across web applications, APIs, cloud environments, and corporate networks.",
  },
  {
    title: "GRC & ISO 27001 Lead Auditor",
    location: "Hyderabad / US / UK Remote",
    type: "Full-time",
    summary:
      "Guide enterprise clients through ISMS implementation, gap assessments, GDPR/HIPAA/PCI-DSS readiness, and third-party vendor risk audits.",
  },
  {
    title: "Digital Forensics & Incident Responder",
    location: "Hyderabad, India",
    type: "Full-time",
    summary:
      "Support cybercrime investigations, forensic evidence acquisition, malware eradication, and Network Decontamination (NDaS) engagements.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        badge="Careers"
        title="Build Your Cybersecurity Career at Sequri"
        description="Join a team of penetration testers, SOC analysts, forensic investigators, and GRC architects protecting organizations worldwide."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-navy">
              Open Positions
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Interested in joining Sequri? Reach out to{" "}
              <a href="mailto:info@sequri.in" className="font-semibold text-brand hover:underline">
                info@sequri.in
              </a>{" "}
              or apply via our contact desk.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-brand">
                      <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                      {role.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {role.location}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-navy">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {role.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                  >
                    Apply / Inquire
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
