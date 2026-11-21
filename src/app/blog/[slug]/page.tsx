import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blog";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        badge={`${post.category} • ${post.readTime}`}
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { label: "Insights", href: "/blog" },
          { label: post.category },
        ]}
      />

      <article className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
          {post.paragraphs.map((para, idx) => (
            <p key={idx} className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {para}
            </p>
          ))}

          <div className="border-t border-slate-200 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
