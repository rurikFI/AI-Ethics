import WireframePage from "@/components/WireframePage";

type ChecklistDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default async function ChecklistDetailPage({
  params,
}: ChecklistDetailPageProps) {
  const { slug } = await params;

  return (
    <WireframePage
      eyebrow="Checklist detail"
      title={`${formatSlug(slug)} wireframe`}
      description="Use this page for the full checklist detail view, with the actual steps, context, downloads, and completion actions."
      sections={[
        {
          title: "Overview block",
          description:
            "Introduce the checklist, who it is for, and what outcome the user should expect.",
          bullets: [
            "What this checklist helps with",
            "Who should use it",
            "Estimated time to complete",
          ],
        },
        {
          title: "Checklist items",
          description:
            "This is the main working area for steps, status, and notes.",
          bullets: [
            "Section headings",
            "Individual tasks",
            "Optional completion progress",
          ],
        },
        {
          title: "Resources and links",
          description:
            "Add related templates, legal references, or support links beside the checklist.",
          bullets: [
            "Supporting template",
            "Related library items",
            "Contact support link",
          ],
        },
        {
          title: "Member actions",
          description:
            "Place save, export, or mark-complete actions at the end and in a sticky sidebar later.",
          bullets: [
            "Save progress",
            "Export to PDF",
            "Mark complete",
          ],
        },
      ]}
      links={[
        { href: "/library", label: "Back to library" },
        { href: "/dashboard", label: "Dashboard" },
      ]}
    />
  );
}
