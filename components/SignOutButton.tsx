"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function SignOutButton() {
  async function handleSignOut() {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <button
      onClick={handleSignOut}
      className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
    >
      Sign out
    </button>
  );
}
