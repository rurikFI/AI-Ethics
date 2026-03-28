import DashboardSectionPage from "@/components/DashboardSectionPage";

export default function DashboardStartPage() {
  return (
    <DashboardSectionPage
      eyebrow="Start"
      title="Dashboard start"
      description="This is the main landing area for members. Use it to orient people quickly, show what is unlocked, and make the first action obvious."
      cards={[
        {
          title: "Welcome block",
          description:
            "A short intro that tells the member what this dashboard is for and what to do first.",
          points: [
            "Short welcome message",
            "What this membership includes",
            "Primary first action button",
          ],
        },
        {
          title: "Your essentials",
          description:
            "Pin the most important items so a new member can move immediately.",
          points: [
            "Go to next step",
            "Open current checklist",
            "View document package",
          ],
        },
      ]}
    />
  );
}
