import DashboardSectionPage from "@/components/DashboardSectionPage";

export default function DashboardChecklistProgressPage() {
  return (
    <DashboardSectionPage
      eyebrow="Checklist progress"
      title="Checklist progress"
      description="Use this page to track what has been started, what is blocked, and what is complete across the member's checklists."
      cards={[
        {
          title: "Progress overview",
          description:
            "Summarize the current state of all active checklist work in one place.",
          points: [
            "Completed items count",
            "In-progress items count",
            "Blocked items or missing information",
          ],
        },
        {
          title: "Active checklist list",
          description:
            "List each checklist with status, last updated date, and a continue action.",
          points: [
            "Checklist name",
            "Status badge",
            "Continue checklist button",
          ],
        },
      ]}
    />
  );
}
