"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Shield, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";

const COMPANY_LINKS = [
  { label: "About Sequri", href: "/about" },
  { label: "Why Sequri", href: "/why-sequri" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Leadership & Team", href: "/team" },
  { label: "Clientele & Partners", href: "/clientele" },
  { label: "Careers", href: "/careers" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "company" | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white shadow-sm">
            <Shield className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-tight text-navy">
              SEQURI
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
              Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() =>
                setOpenDropdown(openDropdown === "services" ? null : "services")
              }
              aria-expanded={openDropdown === "services"}
              aria-haspopup="true"
              className="inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-brand transition-colors cursor-pointer"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  openDropdown === "services" ? "rotate-180 text-brand" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {openDropdown === "services" && (
              <div className="absolute left-0 top-full z-[60] pt-2">
                <div className="w-80 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  <Link
                    href="/services"
                    onClick={closeMenus}
                    className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-brand hover:bg-blue-50"
                  >
                    All Managed Security Services →
                  </Link>
                  <div className="my-1 border-t border-slate-100" />
                  {SERVICES.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      onClick={closeMenus}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand"
                    >
                      <div className="font-medium text-navy">{svc.shortTitle}</div>
                      <div className="line-clamp-1 text-xs text-slate-500">
                        {svc.tagline}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("company")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              onClick={() =>
                setOpenDropdown(openDropdown === "company" ? null : "company")
              }
              aria-expanded={openDropdown === "company"}
              aria-haspopup="true"
              className="inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-brand transition-colors cursor-pointer"
            >
              Company
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  openDropdown === "company" ? "rotate-180 text-brand" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {openDropdown === "company" && (
              <div className="absolute left-0 top-full z-[60] pt-2">
                <div className="w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {COMPANY_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenus}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/case-studies"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="/blog"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Insights
          </Link>
          <Link
            href="/faq"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-brand transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-brand transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
          >
            Free Security Audit
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) closeMenus();
          }}
          className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 max-h-[80vh] overflow-y-auto"
        >
          <div>
            <p className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Services
            </p>
            <div className="mt-1 space-y-1">
              <Link
                href="/services"
                className="block rounded-lg px-2 py-2 text-sm font-semibold text-brand"
              >
                All Services
              </Link>
              {SERVICES.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="block rounded-lg px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                >
                  {svc.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Company
            </p>
            <div className="mt-1 space-y-1">
              {COMPANY_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-1">
            <Link
              href="/case-studies"
              className="block rounded-lg px-2 py-1.5 text-sm font-medium text-slate-700"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="block rounded-lg px-2 py-1.5 text-sm font-medium text-slate-700"
            >
              Insights & Blog
            </Link>
            <Link
              href="/faq"
              className="block rounded-lg px-2 py-1.5 text-sm font-medium text-slate-700"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white"
            >
              Schedule a Free Security Audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
