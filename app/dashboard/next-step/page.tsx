import DashboardSectionPage from "@/components/DashboardSectionPage";

export default function DashboardNextStepPage() {
  return (
    <DashboardSectionPage
      eyebrow="Next step"
      title="Recommended next step"
      description="This page should tell the member exactly what the next highest-value action is, instead of making them decide from scratch."
      cards={[
        {
          title: "Recommended action",
          description:
            "Show the single best next move based on onboarding stage or progress.",
          points: [
            "Current recommended checklist",
            "Why this step matters now",
            "Direct action button",
          ],
        },
        {
          title: "What happens after",
          description:
            "Reduce hesitation by explaining the immediate outcome of completing the step.",
          points: [
            "What gets unlocked next",
            "Expected time required",
            "What success looks like",
          ],
        },
      ]}
    />
  );
}
