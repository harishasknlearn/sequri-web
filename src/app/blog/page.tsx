import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Insights & Blog",
  description:
    "Cybersecurity insights, threat intelligence, and GRC best practices from Sequri's research and SOC teams.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Insights & Research"
        title="Sequri Cybersecurity Blog"
        description="Practical analysis on threat intelligence, email defense, managed security services, and enterprise governance."
        breadcrumbs={[{ label: "Insights" }]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-md bg-blue-50 px-2.5 py-1 font-semibold text-brand">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-bold text-navy group-hover:text-brand transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Read article
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
