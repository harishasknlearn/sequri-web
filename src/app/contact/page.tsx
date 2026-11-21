import type { Metadata } from "next";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Contact & Free Security Audit",
  description:
    "Contact Sequri's India, US, or UK offices to schedule a free cybersecurity consultation or security audit.",
};

const NEXT_STEPS = [
  {
    step: "1",
    title: "We schedule a call at your convenience",
    desc: "Our security advisor connects with you to understand your timeline and priorities.",
  },
  {
    step: "2",
    title: "We conduct a discovery & consulting meeting",
    desc: "We review your infrastructure scope, compliance goals, and threat landscape.",
  },
  {
    step: "3",
    title: "We prepare a tailored proposal",
    desc: "You receive a clear roadmap, deliverables, and transparent engagement model.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Enquire About Cybersecurity for Your Organization"
        description="We're happy to answer any questions you may have and help you determine how Sequri's services best fit your needs."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Offices & Process */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-navy">
                  Call Our Global Offices
                </h2>
                <div className="mt-5 space-y-4">
                  {SITE_CONFIG.offices.map((o) => (
                    <div
                      key={o.region}
                      className="rounded-xl border border-slate-200 bg-white p-5"
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-brand">
                        {o.region}
                      </div>
                      <a
                        href={o.phoneHref}
                        className="mt-1 inline-flex items-center gap-2 font-display text-xl font-bold text-navy hover:text-brand"
                      >
                        <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                        {o.phone}
                      </a>
                      <p className="mt-1.5 flex items-start gap-2 text-xs text-slate-500">
                        <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                        {o.address}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email Us
                  </div>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="mt-1 inline-flex items-center gap-2 font-display text-lg font-bold text-brand hover:underline"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-navy">
                  What Happens Next?
                </h3>
                <div className="mt-4 space-y-4">
                  {NEXT_STEPS.map((s) => (
                    <div key={s.step} className="flex items-start gap-3">
                      <CheckCircle2
                        className="h-5 w-5 text-brand shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-sm font-semibold text-navy">{s.title}</div>
                        <p className="text-xs text-slate-600">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
