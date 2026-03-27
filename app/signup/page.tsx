import { signUp } from "@/app/auth/actions";

export default function SignUpPage({
  searchParams,
}: {
  searchParams?: { error?: string };
}) {
  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-semibold">Create account</h1>

      {searchParams?.error && (
        <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
          {searchParams.error}
        </p>
      )}

      <form action={signUp} className="mt-8 space-y-4">
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
          Sign up
        </button>
      </form>
    </main>
  );
}