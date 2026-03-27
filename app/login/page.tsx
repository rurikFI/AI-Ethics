import { signIn } from "@/app/auth/actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams?: { error?: string; checkEmail?: string };
}) {
  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-semibold">Sign in</h1>

      {searchParams?.checkEmail && (
        <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
          Check your email to confirm your account, then sign in.
        </p>
      )}

      {searchParams?.error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
          {searchParams.error}
        </p>
      )}

      <form action={signIn} className="mt-8 space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-xl border px-4 py-3"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full rounded-xl border px-4 py-3"
        />
        <button className="w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white">
          Sign in
        </button>
      </form>
    </main>
  );
}