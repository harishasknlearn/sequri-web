export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  paragraphs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "world-is-cyber-bleeding",
    title: "World Is Cyber Bleeding: Lessons from Critical Infrastructure Vulnerabilities",
    category: "Cybersecurity Topics",
    readTime: "5 min read",
    excerpt:
      "From Heartbleed (CVE-2014-0160) to modern supply-chain exploits, foundational software libraries remain high-value targets for adversaries.",
    paragraphs: [
      "When Heartbleed (CVE-2014-0160) was discovered in OpenSSL—a foundational cryptographic library powering web servers, operating systems, email, and instant messaging—it exposed how a single memory-handling flaw can jeopardize millions of organizations simultaneously.",
      "Years later, the underlying lesson remains urgent: organizations often focus exclusively on perimeter firewalls while overlooking the open-source dependencies, TLS configurations, and legacy services running inside their stack.",
      "Proactive Vulnerability Assessment and Penetration Testing (VAPT), continuous patch management, and 24/7 SOC telemetry are no longer optional compliance checkboxes—they are essential survival controls for modern digital enterprises.",
      "At Sequri Pvt. Ltd., our security engineering and CyberLab research teams help organizations continuously inventory, test, and harden both custom applications and underlying infrastructure before critical vulnerabilities can be weaponized.",
    ],
  },
  {
    slug: "4-cybersecurity-takeaways-largest-data-breach",
    title: "4 Cybersecurity Takeaways from Major Large-Scale Data Breaches",
    category: "Threat Intelligence",
    readTime: "6 min read",
    excerpt:
      "Analyzing how misconfigured cloud storage, unmonitored APIs, and weak access controls lead to massive citizen and enterprise data exposure.",
    paragraphs: [
      "Large-scale data breaches rarely stem from exotic zero-day exploits. Most trace back to fundamental hygiene failures: exposed administrative dashboards, unencrypted data stores, overly permissive IAM roles, and unmonitored APIs.",
      "1. Enforce Least-Privilege Access & Zero Trust: Never assume internal networks or cloud buckets are safe from lateral movement. Segment sensitive databases and enforce multi-factor authentication everywhere.",
      "2. Encrypt Data at Rest and in Transit: Even if an unauthorized party exfiltrates storage snapshots, strong encryption and proper key management render stolen records unusable.",
      "3. Monitor Continuously with a 24/7 SOC: Early detection of anomalous data egress can turn a catastrophic multi-terabyte breach into a contained incident.",
      "4. Conduct Regular Independent VAPT & Compliance Audits: Periodic third-party penetration tests uncover configuration drift and shadow APIs before attackers find them.",
    ],
  },
  {
    slug: "top-5-tips-solving-email-security",
    title: "Top 5 Tips for Solving the Enterprise Email Security Problem",
    category: "Security Operations",
    readTime: "4 min read",
    excerpt:
      "Email remains the #1 initial access vector for ransomware and business email compromise. Here is how to harden your organization's inbox.",
    paragraphs: [
      "Over 80% of successful cyber intrusions begin with a phishing email, credential-harvesting link, or malicious attachment. Technical controls alone—or user training alone—are insufficient on their own.",
      "1. Deploy DMARC, DKIM, and SPF with Strict Enforcement: Prevent domain spoofing and protect both employees and external customers from impersonation.",
      "2. Pair MFA with Phishing-Resistant Authentication: Hardware security keys or FIDO2 passkeys neutralize credential-harvesting proxy attacks.",
      "3. Sandbox Attachments & Inspect Links at Time-of-Click: Modern malware often weaponizes delayed payload delivery after initial inbox scanning.",
      "4. Run Continuous Security Awareness & Phishing Simulations: Empower employees to recognize social engineering and report suspicious messages in one click.",
      "5. Integrate Email Telemetry into Your SOC: Correlating email alerts with endpoint and identity logs allows rapid containment if a user does click.",
    ],
  },
  {
    slug: "key-players-global-managed-network-service-market",
    title: "The Evolution of Managed Network & Security Services for Growing Enterprises",
    category: "Information Security Market",
    readTime: "5 min read",
    excerpt:
      "Why mid-market and enterprise organizations are shifting from fragmented point tools to unified Managed Security Services.",
    paragraphs: [
      "Recognized in the Global Managed Network Service Market Forecast (2018–2025) by QyReports, Sequri pioneered accessible Managed Security Services for both SMBs and large enterprises.",
      "As hybrid cloud adoption accelerates, internal IT teams face an impossible staffing gap. Managing SIEM correlation, vulnerability scanning, endpoint detection, and regulatory audits in-house requires round-the-clock specialists.",
      "Partnering with an ISO/IEC 27001:2013 certified Managed Security Service Provider (MSSP) gives organizations immediate access to 24/7 SOC analysts, incident responders, and GRC auditors at a predictable operational cost.",
    ],
  },
  {
    slug: "what-you-shouldnt-be-doing-cybersecurity",
    title: "What You Shouldn't Be Doing with Your Cybersecurity Strategy",
    category: "Leadership & GRC",
    readTime: "5 min read",
    excerpt:
      "Common anti-patterns—from treating compliance as security to ignoring third-party vendor risk—that leave organizations exposed.",
    paragraphs: [
      "Mistake 1: Treating Annual Compliance as Complete Security. Passing an audit once a year proves you met a baseline at a single point in time—it does not protect you from tomorrow's ransomware campaign.",
      "Mistake 2: Ignoring Third-Party & Supply-Chain Risk. Attackers frequently compromise smaller vendors to pivot into larger enterprise targets.",
      "Mistake 3: Delaying Incident Response Planning Until a Breach Occurs. Having an Incident Response retainer, tested backups, and a Network Decontamination playbook cuts recovery time dramatically.",
      "Mistake 4: Neglecting Developer & Remote Endpoint Hygiene. Unmanaged workstations and unreviewed CI/CD pipelines expose intellectual property.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
