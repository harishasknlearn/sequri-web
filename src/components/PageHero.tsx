import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ badge, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #010ED0 0%, transparent 45%), radial-gradient(circle at 80% 70%, #38BDF8 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((bc, idx) => (
              <span key={idx} className="inline-flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                {bc.href ? (
                  <Link href={bc.href} className="hover:text-white transition-colors">
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-slate-200">{bc.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <span className="inline-flex items-center rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
          {badge}
        </span>
        <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
