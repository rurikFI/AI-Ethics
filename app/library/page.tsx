import WireframePage from "@/components/WireframePage";

export default function LibraryPage() {
  return (
    <WireframePage
      eyebrow="Library"
      title="Library wireframe"
      description="This is the placeholder for the members area where templates, checklists, and future resources will live."
      sections={[
        {
          title: "Filter and browse",
          description:
            "Top area for search, category filters, and featured resources.",
          bullets: [
            "Search by keyword",
            "Filter by checklist or template",
            "Sort by newest or most useful",
          ],
        },
        {
          title: "Featured checklists",
          description:
            "Show a small set of high-value checklist cards that lead into detail pages.",
          bullets: [
            "Readiness checklist",
            "Compliance review checklist",
            "Team rollout checklist",
          ],
        },
        {
          title: "Featured templates",
          description:
            "List the most important templates with a clear reason to open them.",
          bullets: [
            "Policy template",
            "Risk assessment template",
            "Internal communication template",
          ],
        },
        {
          title: "Member actions",
          description:
            "Reserve space for save, download, duplicate, or mark-complete actions.",
          bullets: [
            "Save to dashboard",
            "Download asset",
            "Track completion",
          ],
        },
      ]}
      links={[
        { href: "/library/checklists/readiness-checklist", label: "Checklist detail" },
        { href: "/library/templates/policy-template", label: "Template detail" },
      ]}
    />
  );
}
