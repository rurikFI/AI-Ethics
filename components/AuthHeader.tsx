import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/SignOutButton";

export default async function AuthHeader() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_24%),linear-gradient(to_bottom,#f8fbff,white)]">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-6 rounded-[12px] px-6 py-4 transition-all duration-300 hover:-hover:rounded-[12px] hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold tracking-tight text-slate-950">
              BLUEBELL ETHICAL
            </Link>

            <nav className="hidden items-center gap-5 text-sm text-slate-600 md:flex">
              <Link href="/" className="transition hover:text-slate-950">
                Home
              </Link>
              <Link href="/solutions" className="transition hover:text-slate-950">
                Solutions
              </Link>
              <Link href="/pricing" className="transition hover:text-slate-950">
                Pricing
              </Link>
              <Link href="/about" className="transition hover:text-slate-950">
                About
              </Link>
              <Link href="/faq" className="transition hover:text-slate-950">
                FAQ
              </Link>
              <Link href="/contact" className="transition hover:text-slate-950">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
                >
                  Dashboard
                </Link>
                <SignOutButton />
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-semibold text-slate-700 transition hover:text-slate-950"
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Create account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
