import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { signOut } from "@/app/auth/actions";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-4 text-slate-600">Logged in as: {user.email}</p>

      <form action={signOut} className="mt-8">
        <button className="rounded-xl border px-4 py-2 font-semibold">
          Sign out
        </button>
      </form>
    </main>
  );
}