import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="bg-navy py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand to-navy p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
              Free Security Audit & Discovery
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Enquire about cybersecurity for your organization.
            </h2>
            <p className="mt-4 text-base text-slate-200">
              We&apos;re happy to answer any questions you may have and help determine how
              Sequri&apos;s Managed Security Services, VAPT, or GRC programs best fit your
              needs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-navy shadow-sm hover:bg-slate-100 transition-colors"
              >
                Schedule a Free Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={SITE_CONFIG.offices[0].phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4 text-cyan" aria-hidden="true" />
                {SITE_CONFIG.offices[0].phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
