import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SignOutButton from "@/components/SignOutButton";

export default async function AuthHeader() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold tracking-tight text-slate-950">
            BLUEBELL ETHICAL
          </Link>

          <nav className="hidden items-center gap-5 text-sm text-slate-600 md:flex">
            <Link href="/" className="transition hover:text-slate-950">
              Home
            </Link>
            <Link href="/about" className="transition hover:text-slate-950">
              About
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
    </header>
  );
}
