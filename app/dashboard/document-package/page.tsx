import DashboardSectionPage from "@/components/DashboardSectionPage";

export default function DashboardDocumentPackagePage() {
  return (
    <DashboardSectionPage
      eyebrow="Document package"
      title="Document package"
      description="This section is for the member's key templates, generated documents, and any packaged deliverables they need to download or review."
      cards={[
        {
          title: "Included documents",
          description:
            "Show the package contents clearly so members know what is available.",
          points: [
            "Policies and templates",
            "Checklist exports",
            "Supporting guidance documents",
          ],
        },
        {
          title: "Actions",
          description:
            "Place the core actions here so members can use the package without hunting around.",
          points: [
            "Download package",
            "Open individual document",
            "See latest update date",
          ],
        },
      ]}
    />
  );
}
