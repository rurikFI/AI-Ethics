import WireframePage from "@/components/WireframePage";

export default function FaqPage() {
  return (
    <WireframePage
      eyebrow="FAQ"
      title="FAQ wireframe"
      description="Use this page to reduce friction before signup, onboarding, and later subscription decisions."
      sections={[
        {
          title: "Account questions",
          description:
            "Cover login, signup, email confirmation, password reset, and account access basics.",
          bullets: [
            "How do I create an account?",
            "Do I need to confirm my email?",
            "What if I cannot log in?",
          ],
        },
        {
          title: "Product questions",
          description:
            "Explain what the product includes and what users can expect in the library and dashboard.",
          bullets: [
            "What is included in the subscription?",
            "How often is the library updated?",
            "Who is this product for?",
          ],
        },
        {
          title: "Billing questions",
          description:
            "Prepare this section now even if Stripe is not integrated yet.",
          bullets: [
            "How will billing work?",
            "Can I cancel anytime?",
            "Will there be team plans?",
          ],
        },
        {
          title: "Support questions",
          description:
            "Set expectations around response time and where people get help.",
          bullets: [
            "How do I contact support?",
            "Do you offer onboarding help?",
            "Where do I report a bug?",
          ],
        },
      ]}
      links={[
        { href: "/contact", label: "Contact" },
        { href: "/pricing", label: "Pricing" },
      ]}
    />
  );
}
