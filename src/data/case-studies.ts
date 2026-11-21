export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  impactMetric: string;
  challenge: string[];
  solution: string[];
  results: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "apisero-iso-27001-managed-security",
    title: "Enhancing Security & Achieving ISO 27001 Certification for Apisero, Inc.",
    client: "Apisero, Inc.",
    industry: "ITES & Enterprise Consulting",
    summary:
      "With a global workforce of over 3,000 employees, Apisero partnered with our Managed Security Services team to deploy 24/7 SOC monitoring, achieve ISO 27001 certification, and complete 30+ vendor risk assessments.",
    impactMetric: "3,000+ Employees Protected • 30+ Vendor Audits",
    challenge: [
      "Maintaining an in-house 24/7 cybersecurity team across global locations was costly and difficult to staff.",
      "Consistently identifying and remediating vulnerabilities across a rapidly scaling IT infrastructure.",
      "Managing time-consuming third-party vendor risk assessments without slowing down business operations.",
    ],
    solution: [
      "Deployed 24/7 Security Operations Centre (SOC) monitoring for continuous threat detection and rapid incident response.",
      "Executed recurring vulnerability assessments and penetration testing (VAPT) across critical systems.",
      "Delivered end-to-end compliance advisory to achieve ISO/IEC 27001 certification.",
      "Conducted more than 30 third-party vendor risk assessments on behalf of Apisero's internal security team.",
    ],
    results: [
      "Substantial cost savings by eliminating the overhead of building an internal 24/7 SOC.",
      "Successfully achieved ISO/IEC 27001 certification, strengthening enterprise client trust.",
      "Accelerated vendor onboarding with standardized, thorough third-party risk evaluations.",
    ],
  },
  {
    slug: "indian-school-of-business-cybersecurity",
    title: "Enhancing Cybersecurity & Recovering 40 TB of Critical Data for Indian School of Business (ISB)",
    client: "Indian School of Business (ISB)",
    industry: "Education Industry",
    summary:
      "Comprehensive VAPT, security architecture design, GDPR/PIMS/ISO compliance auditing, patch management, and 40 TB critical data recovery for one of Asia's premier business schools.",
    impactMetric: "40 TB Critical Data Recovered • GDPR, PIMS & ISO",
    challenge: [
      "Identifying and rectifying vulnerabilities across a vast academic and administrative network and web application footprint.",
      "Designing a resilient security architecture to safeguard sensitive student, faculty, and research data.",
      "Meeting multi-framework compliance mandates including GDPR, PIMS, and ISO standards.",
      "Establishing structured patch management and recovering from a critical data loss event.",
    ],
    solution: [
      "Conducted thorough Vulnerability Assessment and Penetration Testing across network and web applications.",
      "Designed and implemented a defense-in-depth security architecture tailored for campus scale.",
      "Performed comprehensive compliance audits against GDPR, PIMS, and ISO requirements.",
      "Implemented enterprise patch management and executed emergency forensic data recovery.",
    ],
    results: [
      "Critical vulnerabilities identified and remediated, substantially lowering attack surface.",
      "Achieved alignment with GDPR, PIMS, and ISO data privacy standards.",
      "Successfully recovered 40 TB of critical institutional data during a data loss incident.",
    ],
  },
  {
    slug: "nalsar-ctrl-z-cyber-forensic-lab",
    title: "Establishing the State-of-the-Art Ctrl-Z Cyber Forensic Lab with NALSAR University",
    client: "NALSAR University of Law",
    industry: "Defense, Law Enforcement & Education",
    summary:
      "Joint initiative establishing the Ctrl-Z Cyber Forensic Laboratory at NALSAR's Shamirpet campus to advance digital evidence retrieval, cyber law training, and law enforcement consultation.",
    impactMetric: "Ctrl-Z Cyber Forensic Lab • Shamirpet Campus",
    challenge: [
      "Growing volume and complexity of cybercrimes requiring specialized digital evidence retrieval and legal admissibility.",
      "Shortage of practitioners trained at the intersection of Cyber Law, Cyber Crimes, and Digital Forensics.",
    ],
    solution: [
      "Established the Ctrl-Z Cyber Forensic Lab equipped with modern digital forensics hardware and software.",
      "Launched short-term and long-term certification courses, seminars, and hands-on workshops.",
      "Provided expert forensic consultation to law enforcement agencies and legal professionals.",
    ],
    results: [
      "Trained a new generation of skilled cyber forensic professionals and legal practitioners.",
      "Strengthened law enforcement and judicial capacity to handle complex cybercrime cases.",
      "Ongoing R&D advancing digital evidence analysis and documentation standards.",
    ],
  },
  {
    slug: "gabon-national-security-assessment",
    title: "Comprehensive National Security Assessment for the Republic of Gabon",
    client: "Government & Public Sector — Gabon",
    industry: "Defense & Law Enforcement",
    summary:
      "Large-scale security assessment and resilience evaluation across critical public-sector digital infrastructure for the Republic of Gabon.",
    impactMetric: "National-Scale Infrastructure Assessment",
    challenge: [
      "Evaluating cyber readiness and exposure across interconnected government and public-service digital systems.",
      "Identifying systemic architectural gaps and prioritizing remediation at national scale.",
    ],
    solution: [
      "Conducted comprehensive vulnerability assessments, architecture reviews, and threat modeling across key infrastructure.",
      "Delivered prioritized remediation roadmaps aligned with international cybersecurity standards.",
    ],
    results: [
      "Clear visibility into critical infrastructure risks and actionable hardening blueprints.",
      "Elevated national cyber resilience posture across audited public-sector systems.",
    ],
  },
  {
    slug: "fintech-healthcare-secure-sdlc",
    title: "Secure Software Development (DevSecOps) Implementation for Inc. 5000 Software Leader",
    client: "Inc. 5000 Financial & Healthcare Software Provider",
    industry: "Banking, Finance & Healthcare",
    summary:
      "Secured a 260+ developer engineering organization building mission-critical financial and healthcare platforms, aligning SDLC with ISO/IEC/IEEE 90003:2018 and ISO 27001 Annex A.14.",
    impactMetric: "260+ Engineers Secured • ISO 27001 Annex A.14",
    challenge: [
      "High-profile clients in manufacturing, government, finance, and healthcare demanded rigorous software supply-chain security.",
      "20% of the development workforce operated remotely on unmanaged workstations, risking IP exposure.",
    ],
    solution: [
      "Executed a full DevOps Assessment covering process, automation, measurement, and compromise assessment.",
      "Redesigned the secure development environment and embedded security gates across every lifecycle stage.",
      "Aligned engineering governance with ISO/IEC/IEEE 90003:2018, ISO/IEC 15408:2009, and ISO 27001 Annex A.14.",
    ],
    results: [
      "Protected core intellectual property and reduced software supply-chain attack surface.",
      "Met strict enterprise and government client compliance requirements.",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
