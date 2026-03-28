import WireframePage from "@/components/WireframePage";

export default function PricingPage() {
  return (
    <WireframePage
      eyebrow="Pricing"
      title="Pricing page wireframe"
      description="This placeholder is structured for a clean pricing page with plan comparison, risk reduction, and a strong upgrade path."
      sections={[
        {
          title: "Plan table",
          description:
            "Define 2 to 3 plans with names, intended customer, monthly price, and the main reason to choose each one.",
          bullets: [
            "Starter plan",
            "Growth plan",
            "Custom or enterprise plan",
          ],
        },
        {
          title: "Feature comparison",
          description:
            "List the capabilities that matter most so the plans are easy to compare.",
          bullets: [
            "Number of users or seats",
            "Library or checklist access",
            "Support level and onboarding",
          ],
        },
        {
          title: "Objection handling",
          description:
            "Answer the practical concerns right under pricing so fewer people bounce.",
          bullets: [
            "Billing frequency",
            "Cancellation terms",
            "Refund or trial policy",
          ],
        },
        {
          title: "Final call to action",
          description:
            "Give each plan an action and make the next step obvious.",
          bullets: [
            "Start free",
            "Book a call",
            "Contact sales",
          ],
        },
      ]}
      links={[
        { href: "/signup", label: "Create account" },
        { href: "/faq", label: "Read FAQ" },
      ]}
    />
  );
}
