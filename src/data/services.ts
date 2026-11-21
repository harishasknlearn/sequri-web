export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  icon: "ShieldCheck" | "FileCheck2" | "Layers" | "Activity" | "Siren" | "Network" | "Code2";
  highlights: string[];
  standards: string[];
  sections: {
    heading: string;
    body: string;
    bullets?: string[];
  }[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "security-testing",
    title: "Security Testing & VAPT",
    shortTitle: "Security Testing",
    tagline: "Vulnerability Assessment & Penetration Testing across apps, networks, cloud, and Wi-Fi.",
    summary:
      "Identify exploitable weaknesses across your web applications, APIs, mobile apps, internal/external networks, and wireless infrastructure before adversaries do.",
    icon: "ShieldCheck",
    highlights: [
      "Web, Mobile & API Penetration Testing",
      "Internal & External Network VAPT",
      "Wi-Fi & Wireless Security Assessment",
      "Executive & Technical Remediation Reports",
    ],
    standards: ["OWASP Top 10", "PTES", "NIST SP 800-115", "OSSTMM"],
    sections: [
      {
        heading: "Comprehensive Vulnerability Assessment & Penetration Testing",
        body: "Sequri conducts deep manual and automated security testing that simulates real-world attacker behavior. Rather than stopping at automated scanner output, our certified analysts validate exploitability, chain vulnerabilities, and map business impact.",
        bullets: [
          "Black-box, gray-box, and white-box penetration testing engagements",
          "OWASP ASVS & Top 10 verification for web applications and REST/GraphQL APIs",
          "Wireless (Wi-Fi) perimeter assessment for rogue access points and weak encryption",
          "Re-testing and verification after remediation to confirm closure",
        ],
      },
      {
        heading: "Deliverables Built for Engineering & Leadership",
        body: "Every engagement concludes with dual-track reporting: a prioritized risk summary for executives and reproducible proof-of-concept steps with patch guidance for engineering teams.",
      },
    ],
  },
  {
    slug: "compliance-verification",
    title: "Compliance Verification & ISMS Audits",
    shortTitle: "Compliance Verification",
    tagline: "Governance, Risk, and Compliance (GRC) & IS Auditing Services.",
    summary:
      "Establish verifiable compliance with international security standards, regulatory mandates, and internal governance policies—including end-to-end ISO/IEC 27001 ISMS implementation.",
    icon: "FileCheck2",
    highlights: [
      "ISO/IEC 27001 ISMS Audit & Implementation",
      "GDPR, HIPAA, PCI-DSS & SOC 2 Readiness",
      "Third-Party Vendor Risk Assessments",
      "Policy Frameworks & Board-Level GRC",
    ],
    standards: ["ISO/IEC 27001", "GDPR", "HIPAA", "PCI-DSS", "PIMS"],
    sections: [
      {
        heading: "Securing Compliance, Safeguarding Success",
        body: "Our Governance, Risk, and Compliance (GRC) practice works closely with leadership and operational teams to design practical controls that satisfy auditors while strengthening real security posture.",
        bullets: [
          "Board Oversight & Risk Management: Structured frameworks to identify, assess, and mitigate operational and regulatory risk.",
          "Policies & Procedures: Tailored Information Security Management System (ISMS) documentation aligned to your workflows.",
          "Gap Analysis & Audit Preparation: End-to-end readiness for ISO/IEC 27001 certification and statutory audits.",
          "Vendor Risk Management: Scalable third-party security assessments for enterprise supply chains.",
        ],
      },
    ],
  },
  {
    slug: "security-architecture",
    title: "Security Architecture Design & Implementation",
    shortTitle: "Security Architecture",
    tagline: "Crafting resilient shields for hybrid, cloud, and enterprise digital landscapes.",
    summary:
      "Design and deploy defense-in-depth security architectures aligned to your business objectives, cloud footprint, and regulatory obligations.",
    icon: "Layers",
    highlights: [
      "Zero Trust Network Architecture",
      "Cloud & Hybrid Infrastructure Hardening",
      "Identity & Access Governance",
      "Compliance-by-Design Blueprints",
    ],
    standards: ["ISO 27001", "HIPAA", "GDPR", "PCI-DSS", "NIST CSF"],
    sections: [
      {
        heading: "Building Resilient Foundations for Digital Fortresses",
        body: "Security cannot be bolted on after deployment. Sequri's architects assess your current infrastructure, threat model critical data flows, and engineer layered controls across network segmentation, IAM, encryption, and endpoint defense.",
        bullets: [
          "Enterprise network segmentation and micro-segmentation blueprints",
          "Cloud security architecture across AWS, Microsoft Azure, and Google Cloud",
          "Privileged access management and cryptographic key governance",
          "Continuous alignment with ISO, HIPAA, GDPR, and PCI-DSS mandates",
        ],
      },
    ],
  },
  {
    slug: "soc-management",
    title: "24/7 SOC Management",
    shortTitle: "SOC Management",
    tagline: "Proactive monitoring, threat detection, and real-time response powered by our SOC Center.",
    summary:
      "Eliminate blind spots with round-the-clock security operations, SIEM correlation, threat hunting, and rapid triage without the overhead of building an in-house SOC.",
    icon: "Activity",
    highlights: [
      "24/7/365 Real-Time Threat Monitoring",
      "SIEM & SOAR Log Correlation",
      "Proactive Threat Hunting & Triage",
      "Executive Posture & SLA Reporting",
    ],
    standards: ["MITRE ATT&CK", "ISO 27001", "NIST CSF"],
    sections: [
      {
        heading: "Always-On Defense Without In-House Staffing Bottlenecks",
        body: "Building and staffing a 24/7 Security Operations Center requires specialized talent and continuous tooling investment. Sequri Managed SOC integrates directly with your endpoints, firewalls, cloud workloads, and identity providers to detect and contain threats in minutes.",
        bullets: [
          "Continuous telemetry ingestion from endpoints, servers, cloud, and network devices",
          "Tier-1, Tier-2, and Tier-3 analyst triage with false-positive suppression",
          "MITRE ATT&CK-mapped detection engineering and threat intelligence feeds",
          "Monthly executive briefings and audit-ready compliance logs",
        ],
      },
    ],
  },
  {
    slug: "incident-response",
    title: "Security Incident Response & Forensics",
    shortTitle: "Incident Response",
    tagline: "Rapid investigation, containment, eradication, and digital forensics.",
    summary:
      "Mitigate the damaging effects of cyberattacks and ransomware through structured containment, root-cause digital forensics, and complete business recovery.",
    icon: "Siren",
    highlights: [
      "Rapid Breach Containment & Eradication",
      "Digital Forensics & Evidence Preservation",
      "Ransomware Recovery & Data Restoration",
      "Post-Incident Hardening & Root-Cause RCA",
    ],
    standards: ["NIST SP 800-61", "ISO/IEC 27035", "Chain of Custody"],
    sections: [
      {
        heading: "Decisive Action When Every Minute Counts",
        body: "Backed by our heritage in cybercrime resolution and forensic lab partnerships, Sequri's Incident Response team steps in immediately to halt active intrusions, preserve legally admissible digital evidence, and restore critical operations.",
        bullets: [
          "Immediate triage and host/network isolation to stop lateral movement",
          "Forensic imaging, memory analysis, and timeline reconstruction",
          "Malware reverse engineering and persistence mechanism removal",
          "Structured post-incident review to prevent recurrence",
        ],
      },
    ],
  },
  {
    slug: "network-decontamination",
    title: "Network Decontamination (NDaS)",
    shortTitle: "Network Decontamination",
    tagline: "Swift identification, isolation, and thorough cleaning of compromised networks.",
    summary:
      "Network Decontamination as a Service (NDaS) removes entrenched malware, viruses, and unauthorized persistence from enterprise networks while restoring performance and integrity.",
    icon: "Network",
    highlights: [
      "Deep Network Scanning & Threat Discovery",
      "Malware & Persistence Eradication",
      "Damage Remediation & System Restoration",
      "Network Hardening & Latency Optimization",
    ],
    standards: ["Zero Trust", "NIST", "CIS Benchmarks"],
    sections: [
      {
        heading: "Purify Your Network & Restore Operational Confidence",
        body: "Even after an initial alert is closed, dormant backdoors and infected endpoints can quietly degrade performance or stage future attacks. Sequri's NDaS systematically scans, isolates, and sanitizes every segment of your network.",
        bullets: [
          "Full-spectrum network scanning and compromise assessment",
          "Targeted removal of malware, trojans, and unauthorized remote access tools",
          "Remediation of damaged configurations and compromised credentials",
          "Post-cleaning hardening that improves bandwidth efficiency and reduces latency",
        ],
      },
    ],
  },
  {
    slug: "secure-sdlc",
    title: "Secure Software Development (DevSecOps)",
    shortTitle: "Secure SDLC",
    tagline: "Embed security across every phase of your software development lifecycle.",
    summary:
      "Protect intellectual property, eliminate supply-chain risk, and ship compliant software with automated DevSecOps pipelines and ISO-aligned SDLC governance.",
    icon: "Code2",
    highlights: [
      "DevOps & CI/CD Security Assessment",
      "SAST, DAST & Dependency Scanning",
      "Remote Developer Workstation Hardening",
      "ISO/IEC/IEEE 90003 & ISO 27001 Annex A.14",
    ],
    standards: ["ISO/IEC/IEEE 90003:2018", "ISO/IEC 15408:2009", "ISO 27001 Annex A.14", "OWASP SAMM"],
    sections: [
      {
        heading: "Security Built Into Every Commit & Release",
        body: "Modern engineering teams ship fast—often across distributed, remote workstations. Sequri audits your DevOps tooling, source control, and build pipelines to protect intellectual property and catch vulnerabilities before code reaches production.",
        bullets: [
          "End-to-end DevOps process, tooling, and automation review",
          "Compromise assessment and hardening for distributed/remote developer environments",
          "Automated security gates integrated into CI/CD workflows",
          "Alignment with ISO/IEC/IEEE 90003:2018, ISO/IEC 15408:2009, and ISO 27001 Annex A.14",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
