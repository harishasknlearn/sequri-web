import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { CASE_STUDIES } from "@/data/case-studies";
import { BLOG_POSTS } from "@/data/blog";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Complete visual sitemap of Sequri (sequri.in).",
};

export default function SitemapPage() {
  return (
    <>
      <PageHero
        badge="Navigation"
        title="Sequri Website Sitemap"
        description="Complete directory of all pages, managed security services, case studies, and resources."
        breadcrumbs={[{ label: "Sitemap" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="font-display text-lg font-bold text-navy">Company</h2>
              <ul className="mt-4 space-y-2 text-sm text-brand">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About Sequri</Link></li>
                <li><Link href="/why-sequri" className="hover:underline">Why Sequri</Link></li>
                <li><Link href="/our-approach" className="hover:underline">Our Approach</Link></li>
                <li><Link href="/team" className="hover:underline">Leadership & Team</Link></li>
                <li><Link href="/clientele" className="hover:underline">Clientele & Partners</Link></li>
                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact & Free Audit</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-navy">Services</h2>
              <ul className="mt-4 space-y-2 text-sm text-brand">
                <li><Link href="/services" className="hover:underline">All Services</Link></li>
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:underline">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-navy">Case Studies</h2>
              <ul className="mt-4 space-y-2 text-sm text-brand">
                <li><Link href="/case-studies" className="hover:underline">All Case Studies</Link></li>
                {CASE_STUDIES.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/case-studies/${c.slug}`} className="hover:underline">
                      {c.client}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-bold text-navy">Insights & Legal</h2>
              <ul className="mt-4 space-y-2 text-sm text-brand">
                <li><Link href="/blog" className="hover:underline">Insights & Blog</Link></li>
                {BLOG_POSTS.map((b) => (
                  <li key={b.slug}>
                    <Link href={`/blog/${b.slug}`} className="hover:underline">
                      {b.title}
                    </Link>
                  </li>
                ))}
                <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
