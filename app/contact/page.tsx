import WireframePage from "@/components/WireframePage";

export default function ContactPage() {
  return (
    <WireframePage
      eyebrow="Contact"
      title="Contact page wireframe"
      description="Use this page for lead capture, support requests, and direct contact options."
      sections={[
        {
          title: "Primary contact form",
          description:
            "Place the main form here with the minimum fields needed to qualify the request.",
          bullets: [
            "Name and email",
            "Company or role",
            "Reason for contacting you",
          ],
        },
        {
          title: "Support and sales paths",
          description:
            "Give users a clear route depending on what they need from you.",
          bullets: [
            "General questions",
            "Product demo or discovery call",
            "Existing customer support",
          ],
        },
        {
          title: "Response expectations",
          description:
            "Set basic expectations so contacting you feels low-friction and professional.",
          bullets: [
            "Typical response time",
            "Best email or channel",
            "Business hours or availability",
          ],
        },
        {
          title: "Trust and reassurance",
          description:
            "Add a short note about privacy, no spam, or what happens after submission.",
          bullets: [
            "We only reply to your request",
            "No newsletter signup by default",
            "Privacy policy link nearby",
          ],
        },
      ]}
      links={[
        { href: "/faq", label: "Read FAQ" },
        { href: "/legal/privacy", label: "Privacy" },
      ]}
    />
  );
}
