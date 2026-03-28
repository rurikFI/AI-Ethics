import WireframePage from "@/components/WireframePage";

export default function TermsPage() {
  return (
    <WireframePage
      eyebrow="Legal"
      title="Terms of service wireframe"
      description="This placeholder gives you the main sections for a practical terms page."
      sections={[
        {
          title: "Service scope",
          description:
            "Define what the service includes, what is provided as-is, and any use limitations.",
          bullets: [
            "What users get access to",
            "Acceptable use boundaries",
            "What is not guaranteed",
          ],
        },
        {
          title: "Accounts and access",
          description:
            "Set expectations around login security, account ownership, and suspension.",
          bullets: [
            "User responsibility",
            "Account security",
            "Suspension rights",
          ],
        },
        {
          title: "Payments and cancellations",
          description:
            "Prepare this area now so it can be completed when Stripe subscriptions go live.",
          bullets: [
            "Billing terms",
            "Renewal terms",
            "Cancellation handling",
          ],
        },
        {
          title: "Liability and governing terms",
          description:
            "Reserve space for liability language and the governing law clause.",
          bullets: [
            "Limitation of liability",
            "Dispute handling",
            "Governing law",
          ],
        },
      ]}
      links={[
        { href: "/legal/privacy", label: "Privacy" },
        { href: "/faq", label: "FAQ" },
      ]}
    />
  );
}
