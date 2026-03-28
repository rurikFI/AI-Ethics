import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import DashboardSidebar from "@/components/DashboardSidebar";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#ffffff,#f7fafc)] px-6 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
        <DashboardSidebar />
        <div>{children}</div>
      </div>
    </main>
  );
}
