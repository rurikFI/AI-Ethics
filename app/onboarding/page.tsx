import WireframePage from "@/components/WireframePage";

export default function OnboardingPage() {
  return (
    <WireframePage
      eyebrow="Onboarding"
      title="Onboarding flow wireframe"
      description="This page is the placeholder for the first-time setup flow after account creation or before full product access."
      sections={[
        {
          title: "Welcome step",
          description:
            "Introduce the product briefly and tell the user what they will achieve in onboarding.",
          bullets: [
            "Welcome message",
            "Expected setup time",
            "Primary next button",
          ],
        },
        {
          title: "Profile and company setup",
          description:
            "Collect the minimum information you need to personalize the experience.",
          bullets: [
            "Name and role",
            "Company size",
            "Main use case",
          ],
        },
        {
          title: "Recommended path",
          description:
            "Guide the user to the right starting checklist, template, or solution.",
          bullets: [
            "Suggested starting resource",
            "Suggested dashboard action",
            "Suggested onboarding checklist",
          ],
        },
        {
          title: "Completion step",
          description:
            "End with a clear route into the dashboard or library.",
          bullets: [
            "Go to dashboard",
            "Open first checklist",
            "Book onboarding help",
          ],
        },
      ]}
      links={[
        { href: "/dashboard", label: "Dashboard" },
        { href: "/library", label: "Library" },
      ]}
    />
  );
}
