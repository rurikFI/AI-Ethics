"use client";

import { useState } from "react";
import Link from "next/link";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { getSafeRedirectPath } from "@/lib/auth/redirects";

type SignupFormProps = {
  nextPath?: string;
};

export default function SignupForm({ nextPath }: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createSupabaseBrowserClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const safeDestination = getSafeRedirectPath(nextPath);

    if (!data.session) {
      const loginUrl = new URL("/login", window.location.origin);
      loginUrl.searchParams.set("checkEmail", "1");

      if (safeDestination !== "/dashboard") {
        loginUrl.searchParams.set("next", safeDestination);
      }

      window.location.href = loginUrl.toString();
      return;
    }

    window.location.href = safeDestination;
  }

  const loginHref =
    nextPath && getSafeRedirectPath(nextPath) !== "/dashboard"
      ? `/login?next=${encodeURIComponent(getSafeRedirectPath(nextPath))}`
      : "/login";

  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-semibold">Create account</h1>
      <p className="mt-3 text-sm text-slate-600">
        Already have an account?{" "}
        <Link href={loginHref} className="font-semibold text-slate-900">
          Sign in
        </Link>
      </p>

      {error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border px-4 py-3"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border px-4 py-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>
      </form>
    </main>
  );
}
