import WireframePage from "@/components/WireframePage";

export default function SolutionsPage() {
  return (
    <WireframePage
      eyebrow="Solutions"
      title="Solution overview wireframe"
      description="Use this page to explain who the product is for, what pains it removes, and how each solution package maps to a customer type."
      sections={[
        {
          title: "Hero and positioning",
          description:
            "Lead with one clear promise, a short proof statement, and a primary call to action.",
          bullets: [
            "Headline for the core business problem",
            "Short explainer for target customer",
            "Primary CTA and secondary CTA",
          ],
        },
        {
          title: "Solution blocks",
          description:
            "Break your offer into 2 to 4 solution groups so people can self-identify quickly.",
          bullets: [
            "Small teams or founders",
            "Growing companies with compliance needs",
            "Advisory or service-led support",
          ],
        },
        {
          title: "How it works",
          description:
            "Show a simple step-by-step path from first contact to result.",
          bullets: [
            "Step 1: Understand the problem",
            "Step 2: Deliver the right assets",
            "Step 3: Keep teams moving safely",
          ],
        },
        {
          title: "Proof and trust",
          description:
            "Reserve space for case studies, testimonials, certifications, or outcome metrics.",
          bullets: [
            "Customer logos or sectors served",
            "Before and after outcomes",
            "Security or compliance proof points",
          ],
        },
      ]}
      links={[
        { href: "/pricing", label: "Pricing" },
        { href: "/contact", label: "Contact" },
      ]}
    />
  );
}
