import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, AlertCircle, Wrench } from "lucide-react";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/data/case-studies";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <PageHero
        badge={study.industry}
        title={study.title}
        description={study.summary}
        breadcrumbs={[
          { label: "Case Studies", href: "/case-studies" },
          { label: study.client },
        ]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="rounded-xl border border-blue-200 bg-blue-50/70 px-6 py-4 font-mono text-sm font-semibold text-brand">
            Impact Highlight: {study.impactMetric}
          </div>

          <div>
            <div className="flex items-center gap-2 text-navy">
              <AlertCircle className="h-5 w-5 text-amber-600" aria-hidden="true" />
              <h2 className="font-display text-2xl font-bold">Challenges Faced</h2>
            </div>
            <ul className="mt-4 space-y-3">
              {study.challenge.map((item) => (
                <li key={item} className="text-base leading-relaxed text-slate-600 pl-4 border-l-2 border-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 text-navy">
              <Wrench className="h-5 w-5 text-brand" aria-hidden="true" />
              <h2 className="font-display text-2xl font-bold">Sequri Solution</h2>
            </div>
            <ul className="mt-4 space-y-3">
              {study.solution.map((item) => (
                <li key={item} className="text-base leading-relaxed text-slate-600 pl-4 border-l-2 border-brand/40">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8">
            <h2 className="font-display text-2xl font-bold text-navy">
              Results & Benefits
            </h2>
            <ul className="mt-4 space-y-3">
              {study.results.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-base text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to all case studies
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
