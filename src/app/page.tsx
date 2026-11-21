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
  Award,
  CheckCircle2,
  Building2,
  Lock,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { SERVICES } from "@/data/services";
import { CASE_STUDIES } from "@/data/case-studies";
import { TEAM_MEMBERS } from "@/data/team";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CtaBanner } from "@/components/CtaBanner";

const ICON_MAP = {
  ShieldCheck,
  FileCheck2,
  Layers,
  Activity,
  Siren,
  Network,
  Code2,
};

export default function HomePage() {
  const founders = TEAM_MEMBERS.filter((m) => m.group === "Founders");

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-obsidian text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, #010ED0 0%, transparent 45%), radial-gradient(circle at 85% 30%, #38BDF8 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              Sequri Pvt. Ltd. • {SITE_CONFIG.certification} Certified
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl leading-[1.08]">
              A Holistic Approach to Safeguarding Your Business Assets
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Build comprehensive security architectures for your organizational data and
              systems. We help enterprises protect their brand, people, assets, and profits
              with 24/7 Managed Security Services, VAPT, GRC compliance, and rapid
              incident response.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-dark transition-colors"
              >
                Schedule a Free Audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
            {SITE_CONFIG.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                  <AnimatedCounter target={m.value} suffix={m.suffix} />
                </div>
                <p className="mt-1.5 text-xs font-medium text-slate-400 sm:text-sm">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Partners Strip */}
      <section className="border-b border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Global Top Players — QyReports Survey • OEM & Cloud Ecosystem Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-600">
              {SITE_CONFIG.partners.map((p) => (
                <span key={p} className="tracking-tight">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Verticals of Cybersecurity */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              What We Do
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              4 Verticals of Cybersecurity
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We help organizations protect their brand, people, assets, and profits
              across four integrated pillars.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SITE_CONFIG.verticals.map((v, idx) => (
              <Link
                key={v.title}
                href={v.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg"
              >
                <span className="font-mono text-xs font-semibold text-brand">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-navy group-hover:text-brand transition-colors">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Security Services Grid */}
      <section id="services" className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Our Solutions
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Comprehensive Managed Security Services
              </h2>
              <p className="mt-3 text-base text-slate-600">
                From offensive penetration testing and ISO 27001 audits to 24/7 SOC
                monitoring and network decontamination.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc) => {
              const Icon = ICON_MAP[svc.icon];
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-navy group-hover:text-brand transition-colors">
                      {svc.shortTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {svc.summary}
                    </p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Industry Focus
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Trusted Across Regulated & High-Growth Sectors
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Sequri has positioned itself as a premier choice for organizations looking
              for tailored security solutions across India and around the globe.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SITE_CONFIG.industries.map((ind) => (
              <div
                key={ind.name}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6"
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="h-5 w-5 text-brand" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold text-navy">{ind.name}</h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {ind.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan">
                Proven Impact
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Featured Case Studies
              </h2>
              <p className="mt-3 text-base text-slate-300">
                Real-world engagements across enterprise ITES, premier universities,
                cyber forensics, and national infrastructure.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan hover:underline"
            >
              All case studies
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.slice(0, 3).map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:border-cyan/40 hover:bg-white/10"
              >
                <div>
                  <span className="inline-block rounded-md bg-cyan/10 px-2.5 py-1 text-xs font-semibold text-cyan">
                    {cs.industry}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-cyan transition-colors">
                    {cs.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {cs.summary}
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4 text-xs font-mono text-cyan">
                  {cs.impactMetric}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Heritage */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                Leadership & Heritage
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Certified Excellence, Licensed Assurance Since 2009
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Founded in 2009 and restructured in 2017, our team has earned
                recognition from the Ministry of Home Affairs, the Telangana State
                Government, and leading global enterprises.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" aria-hidden="true" />
                  ISO/IEC 27001:2013 Certified Managed Security Services Provider
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" aria-hidden="true" />
                  Ctrl-Z Cyber Forensic Lab partner with NALSAR University of Law
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" aria-hidden="true" />
                  Global presence across India, United States, and United Kingdom
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  Meet Our Team
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-slate-50 transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {founders.map((f) => (
                <div
                  key={f.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white font-display font-bold">
                    <Lock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">
                    {f.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {f.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.bio}</p>
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
