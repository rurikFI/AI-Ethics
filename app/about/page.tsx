import WireframePage from "@/components/WireframePage";

export default function AboutPage() {
  return (
    <WireframePage
      eyebrow="About"
      title="About page wireframe"
      description="Use this page to explain why the company exists, what it believes, and why customers should trust it."
      sections={[
        {
          title: "Company story",
          description:
            "Explain the problem that led to the business and why this work matters.",
          bullets: [
            "Founder or company origin",
            "Why this market matters now",
            "What changed in the industry",
          ],
        },
        {
          title: "Mission and values",
          description:
            "State the principles behind the product so the company feels intentional and trustworthy.",
          bullets: [
            "Clarity over jargon",
            "Practical compliance over theory",
            "Confidence for teams adopting AI",
          ],
        },
        {
          title: "Who this is for",
          description:
            "Define your target customer segments and the types of teams that benefit most.",
          bullets: [
            "Founders and small teams",
            "Growing businesses with compliance pressure",
            "Teams that need policy and process support",
          ],
        },
        {
          title: "Trust signals",
          description:
            "Reserve this space for credentials, experience, customer outcomes, or industry-specific expertise.",
          bullets: [
            "Professional background",
            "Customer outcomes or quotes",
            "Relevant legal or policy expertise",
          ],
        },
      ]}
      links={[
        { href: "/solutions", label: "Solutions" },
        { href: "/contact", label: "Contact" },
      ]}
    />
  );
}
