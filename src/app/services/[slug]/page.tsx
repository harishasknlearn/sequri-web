import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { PageHero } from "@/components/PageHero";
import { ConsultationForm } from "@/components/ConsultationForm";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        badge="Managed Security Service"
        title={service.title}
        description={service.tagline}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-10">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                <h2 className="font-display text-lg font-bold text-navy">
                  Key Capabilities
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2
                        className="h-5 w-5 text-brand shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-2 self-center">
                    Standards:
                  </span>
                  {service.standards.map((st) => (
                    <span
                      key={st}
                      className="rounded-md bg-white border border-slate-200 px-2.5 py-1 font-mono text-xs font-medium text-navy"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              {service.sections.map((sec) => (
                <div key={sec.heading} className="space-y-4">
                  <h2 className="font-display text-2xl font-bold text-navy">
                    {sec.heading}
                  </h2>
                  <p className="text-base leading-relaxed text-slate-600">{sec.body}</p>
                  {sec.bullets && (
                    <ul className="space-y-2.5 pt-2">
                      {sec.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                        >
                          <CheckCircle2
                            className="h-4 w-4 text-brand shrink-0 mt-1"
                            aria-hidden="true"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Back to all services
                </Link>
              </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <ConsultationForm defaultService={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
