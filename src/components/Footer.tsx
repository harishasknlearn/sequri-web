import Link from "next/link";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { SERVICES } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-obsidian text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
                <Shield className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <div className="font-display text-xl font-bold tracking-tight">SEQURI</div>
                <div className="text-[11px] uppercase tracking-wider text-cyan">
                  Pvt. Ltd.
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              {SITE_CONFIG.tagline}. An {SITE_CONFIG.certification} certified Managed
              Security Services organization helping enterprises safeguard their brand,
              people, assets, and profits since {SITE_CONFIG.founded}.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {SITE_CONFIG.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Managed Security Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-slate-400 hover:text-cyan transition-colors"
                  >
                    {svc.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company & Resources
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan transition-colors">
                  About Sequri
                </Link>
              </li>
              <li>
                <Link href="/why-sequri" className="text-slate-400 hover:text-cyan transition-colors">
                  Why Sequri
                </Link>
              </li>
              <li>
                <Link href="/our-approach" className="text-slate-400 hover:text-cyan transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-400 hover:text-cyan transition-colors">
                  Leadership & Team
                </Link>
              </li>
              <li>
                <Link href="/clientele" className="text-slate-400 hover:text-cyan transition-colors">
                  Clientele & Partners
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-cyan transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-cyan transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-cyan transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-cyan transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Offices Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Global Offices
            </h3>
            <div className="mt-4 space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-cyan mt-0.5" aria-hidden="true" />
                <span>{SITE_CONFIG.offices[0].address}</span>
              </div>
              <div className="space-y-1.5">
                {SITE_CONFIG.offices.map((o) => (
                  <div key={o.region} className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                    <a href={o.phoneHref} className="hover:text-white transition-colors">
                      <span className="text-slate-500">{o.region.split(" ")[0]}:</span>{" "}
                      {o.phone}
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © 2026 {SITE_CONFIG.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
