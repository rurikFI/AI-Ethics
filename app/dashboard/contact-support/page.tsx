import DashboardSectionPage from "@/components/DashboardSectionPage";

export default function DashboardContactSupportPage() {
  return (
    <DashboardSectionPage
      eyebrow="Contact / support"
      title="Contact and support"
      description="Use this page for member help requests, support channels, and guidance on where to ask which type of question."
      cards={[
        {
          title: "Support routes",
          description:
            "Give members a clear option depending on whether the issue is technical, product-related, or advisory.",
          points: [
            "Technical issue support",
            "Product usage question",
            "Request strategic guidance",
          ],
        },
        {
          title: "Response expectations",
          description:
            "Set expectations to keep support professional and predictable.",
          points: [
            "Usual reply time",
            "Best channel for urgent help",
            "What information to include",
          ],
        },
      ]}
    />
  );
}
