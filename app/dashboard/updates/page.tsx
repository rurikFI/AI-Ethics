import DashboardSectionPage from "@/components/DashboardSectionPage";

export default function DashboardUpdatesPage() {
  return (
    <DashboardSectionPage
      eyebrow="Updates"
      title="Product and content updates"
      description="Use this page to keep members informed about new resources, changed documents, and product improvements."
      cards={[
        {
          title: "Recent updates",
          description:
            "List the latest changes in reverse chronological order so members can scan them quickly.",
          points: [
            "New checklist added",
            "Template updated",
            "Dashboard improvement shipped",
          ],
        },
        {
          title: "What changed for you",
          description:
            "Translate updates into practical member impact instead of just listing releases.",
          points: [
            "What needs review",
            "What can be reused immediately",
            "What to do next if relevant",
          ],
        },
      ]}
    />
  );
}
