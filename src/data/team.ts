export interface TeamMember {
  name: string;
  role: string;
  group: "Founders" | "Executive Team";
  bio: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Krishna Chaitanya Suraparaju",
    role: "Founder & Managing Director",
    group: "Founders",
    bio: "Cybersecurity strategist and entrepreneur who founded the organization in 2009 and led its 2017 transformation into a nationwide Managed Security Services and digital forensics leader at Sequri Pvt. Ltd.",
  },
  {
    name: "Praveen Kumar Suraparaju",
    role: "Chairman & Co-Founder",
    group: "Founders",
    bio: "Provides strategic governance, global partnership oversight, and institutional expansion across India, the United States, the United Kingdom, and public-sector engagements.",
  },
  {
    name: "Krishna Chaitanya Reddivari",
    role: "Executive Leadership — Security Operations & Architecture",
    group: "Executive Team",
    bio: "Leads enterprise security architecture design, infrastructure hardening, and managed SOC delivery across multi-cloud and hybrid environments.",
  },
  {
    name: "Madhu Ambali",
    role: "Executive Leadership — Compliance & GRC",
    group: "Executive Team",
    bio: "Oversees Governance, Risk, and Compliance (GRC), ISO/IEC 27001 ISMS implementations, and statutory security audits.",
  },
  {
    name: "Buchi Babu Kandunoori",
    role: "Executive Leadership — Penetration Testing & VAPT",
    group: "Executive Team",
    bio: "Directs offensive security assessments, application/network VAPT, and DevSecOps security testing programs.",
  },
  {
    name: "Rudra Matsa",
    role: "Executive Leadership — Incident Response & Forensics",
    group: "Executive Team",
    bio: "Heads cybercrime investigation support, digital forensics labs, and rapid network decontamination operations.",
  },
  {
    name: "Chandrasekhar Pitchakuntla",
    role: "Executive Leadership — Training & CyberLab R&D",
    group: "Executive Team",
    bio: "Drives cybersecurity research, practitioner training programs, and academic-industry forensic lab collaborations.",
  },
];

export const TIMELINE = [
  {
    year: "2009",
    title: "Origin & Foundation",
    description:
      "Founded with a mission to make enterprise-grade cybersecurity and digital forensics accessible.",
  },
  {
    year: "2017",
    title: "Restructuring & SMB Managed Security",
    description:
      "Restructured in November 2017 by Krishna Chaitanya Suraparaju and Praveen Kumar Suraparaju, becoming one of the first to deliver Managed Security Services to the SMB sector.",
  },
  {
    year: "2018",
    title: "Global OEM Partnerships & Market Recognition",
    description:
      "Established technical collaborations with Microsoft, IBM, and Sophos, and was listed in QyReports' Global Managed Network Service Market Forecast (2018–2025).",
  },
  {
    year: "2019",
    title: "Government & Law Enforcement Recognition",
    description:
      "Received appreciation and awards from the Ministry of Home Affairs and the Telangana State Government, and partnered with NALSAR University on the Ctrl-Z Cyber Forensic Lab.",
  },
  {
    year: "2020–2021",
    title: "Multi-Vertical Scale",
    description:
      "Expanded into Defense, Education, and Pharmaceuticals—surpassing 2,000+ Security Assessments, 225+ Compliance Audits, and 200+ Cybercrime Cases Resolved.",
  },
  {
    year: "2022–Present",
    title: "CyberLab R&D & Rebrand to Sequri",
    description:
      "Advanced CyberLab R&D and unified our enterprise Managed Security Services and Certified Security Practitioner (CSP) training under Sequri (sequri.in).",
  },
];
