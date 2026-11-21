import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { SERVICES } from "@/data/services";
import { CASE_STUDIES } from "@/data/case-studies";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.domain;
  const staticRoutes = [
    "",
    "/about",
    "/why-sequri",
    "/our-approach",
    "/team",
    "/clientele",
    "/careers",
    "/services",
    "/case-studies",
    "/blog",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
    "/sitemap",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${base}/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...CASE_STUDIES.map((c) => ({
      url: `${base}/case-studies/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...BLOG_POSTS.map((b) => ({
      url: `${base}/blog/${b.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
