import WireframePage from "@/components/WireframePage";

export default function PrivacyPage() {
  return (
    <WireframePage
      eyebrow="Legal"
      title="Privacy policy wireframe"
      description="This is the placeholder structure for your privacy policy page."
      sections={[
        {
          title: "What you collect",
          description:
            "Describe the categories of personal data you collect and why you collect them.",
          bullets: [
            "Account information",
            "Usage data",
            "Support or contact submissions",
          ],
        },
        {
          title: "How data is used",
          description:
            "Explain how personal data supports product delivery, support, and security.",
          bullets: [
            "Account access",
            "Service improvement",
            "Security and fraud prevention",
          ],
        },
        {
          title: "Sharing and processors",
          description:
            "List the main service providers and why data is shared with them.",
          bullets: [
            "Hosting provider",
            "Authentication provider",
            "Future billing provider",
          ],
        },
        {
          title: "User rights and contact",
          description:
            "Explain rights requests and how users can contact you about privacy concerns.",
          bullets: [
            "Access or deletion request",
            "Data correction request",
            "Privacy contact email",
          ],
        },
      ]}
      links={[
        { href: "/legal/terms", label: "Terms" },
        { href: "/contact", label: "Contact" },
      ]}
    />
  );
}
