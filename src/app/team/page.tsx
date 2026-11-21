import type { Metadata } from "next";
import { UserCheck, Shield } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/team";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Leadership & Team",
  description:
    "Meet the founders and executive cybersecurity leadership driving Sequri Pvt. Ltd.",
};

export default function TeamPage() {
  const founders = TEAM_MEMBERS.filter((m) => m.group === "Founders");
  const executives = TEAM_MEMBERS.filter((m) => m.group === "Executive Team");

  return (
    <>
      <PageHero
        badge="Our Team"
        title="The Visionary Minds Behind Sequri"
        description="Our experts hail from cybersecurity, network architecture, compliance, and digital forensics—delivering a holistic approach to safeguarding your digital assets."
        breadcrumbs={[{ label: "Leadership & Team" }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Founders */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Founders
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy">
              Founding Leadership
            </h2>
            <p className="mt-2 text-base text-slate-600">
              The founders who drive innovation, inspire our team, and shape the future of
              cybersecurity.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {founders.map((m) => (
                <div
                  key={m.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                    <Shield className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand">
                    {m.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Team */}
          <div className="mt-16 border-t border-slate-200 pt-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Executive Leadership
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy">
              Meet Our Executive Team
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {executives.map((m) => (
                <div
                  key={m.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand">
                    <UserCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-navy">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-brand">{m.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.bio}</p>
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
