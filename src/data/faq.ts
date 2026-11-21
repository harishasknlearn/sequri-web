export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Services" | "Compliance" | "Incident Response";
}

export const FAQS: FaqItem[] = [
  {
    category: "General",
    question: "What makes Sequri Pvt. Ltd. different from traditional IT vendors?",
    answer:
      "Founded in 2009 and restructured in 2017, Sequri Pvt. Ltd. (sequri.in) is an ISO/IEC 27001:2013 certified team of cybersecurity architects, SOC analysts, forensic investigators, and GRC auditors—unifying enterprise Managed Security Services and cybersecurity practitioner training under one roof.",
  },
  {
    category: "General",
    question: "Which industries does Sequri serve?",
    answer:
      "We serve Defense & Law Enforcement, Information Technology, Pharma & Healthcare, Education Institutions, Banking & Finance, and ITES/Enterprise BPO organizations across India, the United States, the United Kingdom, and Africa.",
  },
  {
    category: "Services",
    question: "What is included in Sequri's Security Testing & VAPT service?",
    answer:
      "Our Vulnerability Assessment and Penetration Testing (VAPT) covers web applications, REST/GraphQL APIs, mobile apps, internal and external network perimeters, cloud infrastructure, and corporate Wi-Fi networks. Every engagement includes manual exploit validation, dual-track executive/technical reports, and post-remediation verification.",
  },
  {
    category: "Services",
    question: "How does 24/7 SOC Management work without an in-house security team?",
    answer:
      "Sequri's Security Operations Center integrates with your existing firewalls, endpoints, cloud workloads, and identity providers. Our analysts monitor telemetry 24/7/365, filter out false positives, hunt for stealthy threats, and execute rapid containment—saving you the cost of recruiting and retaining a round-the-clock internal team.",
  },
  {
    category: "Compliance",
    question: "Can Sequri help our organization achieve ISO/IEC 27001 certification?",
    answer:
      "Yes. As an ISO/IEC 27001:2013 certified organization ourselves, we guide clients through gap analysis, ISMS policy creation, risk assessment, technical control implementation, internal audits, and third-party vendor risk assessments—as demonstrated in our work with Apisero, Inc. and the Indian School of Business (ISB).",
  },
  {
    category: "Compliance",
    question: "Which regulatory frameworks and standards do you support?",
    answer:
      "Our GRC and architecture specialists support ISO/IEC 27001, GDPR, HIPAA, PCI-DSS, PIMS, SOC 2, NIST CSF, OWASP, and ISO/IEC/IEEE 90003:2018 for secure software development.",
  },
  {
    category: "Incident Response",
    question: "What is Network Decontamination as a Service (NDaS)?",
    answer:
      "NDaS is our specialized service for organizations recovering from active or suspected compromises. We perform deep network scanning, isolate infected hosts, eradicate malware and persistent backdoors, remediate damaged configurations, and harden the network to prevent re-infection.",
  },
  {
    category: "Incident Response",
    question: "How quickly can we start with a Free Security Audit or Consultation?",
    answer:
      "Submit a request on our Contact page or call our India HQ (+91 91333 32822), US (+1-469 394 2542), or UK (+3-7593 396576) office. We schedule a discovery call at your convenience, assess your environment and goals, and deliver a tailored proposal.",
  },
];
