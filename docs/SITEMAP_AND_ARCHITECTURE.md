# Sequri (`sequri.in`) — Sitemap & Next.js Architecture Plan

> **Rebrand Context**: Cycops Business Solutions (`cycops.info` / `cycops.co.in`) has rebranded to **Sequri** (`https://sequri.in/`). This document maps all verified content from `WEBSITE_CONTENT_INVENTORY.md` into a modern, high-performance Next.js App Router architecture.

---

## 1. Brand & Rebrand Guidelines
- **Brand Name**: **Sequri** (formerly *Cycops Business Solutions*)
- **Domain**: `https://sequri.in`
- **Tagline**: *Cybersecurity for a Digital World* / *Cyber Resilience Redefined*
- **Core Metrics (Verified from Cycops History)**:
  - **2,000+** Security Assessments Completed
  - **225+** Compliance Audits Done
  - **200+** Cases of Cybercrime Resolved
  - **ISO/IEC 27001:2013** Certified Organization
  - **Founded**: 2009 (Restructured 2017)
- **4 Verticals of Cybersecurity**:
  1. **Training** — Empowering individuals and teams to be industry-ready (including CSP / Certified Security Practitioner).
  2. **Services** — End-to-end Managed Security Services, VAPT, GRC, SOC, and Incident Response.
  3. **Research** — Threat intelligence, CyberLab R&D, and regulatory research.
  4. **Development** — Ready-to-implement security architectures and DevSecOps solutions.
- **Global Offices**:
  - **India (HQ)**: 3rd Floor, Anuradha Nilayam, Ayyappa Society, Hyderabad, Telangana, India – 500084 | `+91 91333 32822`
  - **United States**: `+1-469 394 2542`
  - **United Kingdom**: `+3-7593 396576`
  - **Email**: `info@sequri.in` (migrated from `info@cycops.co.in`)

---

## 2. Planned Sitemap (24+ Routes)

### Top-Level & Core Pages
| Route | Page Title | Legacy URL(s) Mapped | Purpose |
| :--- | :--- | :--- | :--- |
| `/` | Home | `cycops.info/` | Hero, 4 Verticals, Key Metrics, 6 Core Services, Industry Focus, Leadership/Trust, Case Studies Preview, Consultation CTA |
| `/about` | About Sequri | `/about-us/` | Company story (2009–Present), ISO/IEC 27001:2013, 4 Verticals, Timeline Milestones |
| `/why-sequri` | Why Sequri | `/why-cycops/` | Consequences of inadequate cybersecurity, Sequri's defense-in-depth value proposition |
| `/our-approach` | Our Approach | `/our-approach/` | 4-phase methodology: Discover, Assess, Architect & Remediate, Monitor 24/7 |
| `/team` | Leadership & Team | `/team/` | Founders (Krishna Chaitanya Suraparaju, Praveen Kumar Suraparaju) & Executive Team |
| `/clientele` | Clientele & Partners | `/clientele/` | Enterprise, Government, Defense, Education clients & OEM partners (Microsoft, IBM, Sophos, AWS, Google Cloud) |
| `/careers` | Careers | `/careers/` | Open cybersecurity roles, culture, and application CTA |
| `/contact` | Contact & Free Audit | `/contact/` | Interactive Consultation Form, Global Office Cards (India, US, UK), "What Happens Next?" steps |

### Services (`/services/*`)
| Route | Service Name | Legacy URL(s) Mapped |
| :--- | :--- | :--- |
| `/services` | All Managed Security Services | `#services` |
| `/services/security-testing` | Security Testing & VAPT (Web, App, Network, Wi-Fi) | `/security-testing/`, `/vulnerability-assessment-and-penetration-testing/`, `/wifi-vulnerability-assessment/` |
| `/services/compliance-verification` | Compliance Verification & ISMS Audit (ISO 27001, GRC) | `/compliance-verification/`, `/isms-audit-and-implementation-service/` |
| `/services/security-architecture` | Security Architecture Design & Implementation | `/security-architecture-design-implementation/` |
| `/services/soc-management` | 24/7 SOC Management | `/soc-management/` |
| `/services/incident-response` | Security Incident Response & Forensics | `/security-incident-response/` |
| `/services/network-decontamination` | Network Decontamination | `/network-decontamination/` |
| `/services/secure-sdlc` | Secure Software Development (DevSecOps) | `/secure-software-development-implementation/` |

### Resources & Insights
| Route | Page Title | Legacy URL(s) Mapped | Purpose |
| :--- | :--- | :--- | :--- |
| `/case-studies` | Case Studies | `/case-studies/` | Filterable showcase of verified Sequri/Cycops engagements |
| `/case-studies/[slug]` | Case Study Detail | NALSAR Forensic Lab, Gabon Security Assessment, ISB, Apisero ISO 27001, etc. | Challenge, Solution, Impact & Metrics |
| `/blog` | Security Insights & Blog | `/blog/` | Curated cybersecurity articles (excluding old WordPress theme demo posts) |
| `/blog/[slug]` | Article Detail | China Data Breach Takeaways, Email Security Tips, World Is Cyber Bleeding, etc. | Clean long-form reading experience |
| `/faq` | Frequently Asked Questions | `/faq/` | Interactive accordion FAQ covering VAPT, SOC, Compliance, and Engagement models |

### Legal & Technical SEO
| Route | Purpose |
| :--- | :--- |
| `/privacy-policy` | Privacy Policy (updated for Sequri) |
| `/terms-conditions` | Terms & Conditions (updated for Sequri) |
| `/sitemap` | Human-readable HTML Sitemap |
| `/sitemap.xml` | Dynamic Next.js `MetadataRoute.Sitemap` |
| `/robots.txt` | Dynamic Next.js `MetadataRoute.Robots` |

---

## 3. Technical & Design Architecture
- **Framework**: Next.js 16 (App Router) with React 19, TypeScript, Tailwind CSS v4
- **Typography**: `Inter Tight` (headings) + `Inter` / `JetBrains Mono` (body & technical badges) via `next/font/google`
- **Visual Identity**:
  - Brand Primary: `#010ED0` (Cobalt Security Blue — carried over from `cycops.info` CSS tokens) & `#38BDF8` (Cyber Cyan accents)
  - Dark Enterprise Surface: `#050816` / `#0A0D31` (Deep Navy) paired with crisp `#FFFFFF` / `#F8FAFC` light sections for high-contrast readability
  - Icons: `lucide-react`
- **Accessibility & Performance**:
  - WCAG 2.1 AA contrast, semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`), skip-to-content link, keyboard-accessible menus and accordions
  - Static generation (`generateStaticParams`) for all service, case study, and blog routes for sub-second TTFB
