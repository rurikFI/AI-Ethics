import WireframePage from "@/components/WireframePage";

type TemplateDetailPageProps = {
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

export default async function TemplateDetailPage({
  params,
}: TemplateDetailPageProps) {
  const { slug } = await params;

  return (
    <WireframePage
      eyebrow="Template detail"
      title={`${formatSlug(slug)} wireframe`}
      description="Use this page for the full template detail view, including context, the editable template body, and supporting instructions."
      sections={[
        {
          title: "Template summary",
          description:
            "Explain when to use the template, what it solves, and who should adapt it.",
          bullets: [
            "Recommended use case",
            "Owner or audience",
            "What to customize first",
          ],
        },
        {
          title: "Template body",
          description:
            "Reserve the main area for the actual template content or editor.",
          bullets: [
            "Heading structure",
            "Editable text blocks",
            "Version notes",
          ],
        },
        {
          title: "Implementation notes",
          description:
            "Add guidance so users know how to adapt and apply the template correctly.",
          bullets: [
            "How to roll it out",
            "What to review legally",
            "Common mistakes to avoid",
          ],
        },
        {
          title: "Download and save",
          description:
            "Later this area can support copying, exporting, or saving to the user's workspace.",
          bullets: [
            "Copy template",
            "Download document",
            "Save to dashboard",
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
