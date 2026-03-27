import Link from "next/link";

const features = [
  {
    title: "Built for clarity",
    description:
      "Present your product with strong hierarchy, focused copy, and clean visual structure.",
  },
  {
    title: "Designed for trust",
    description:
      "Use proof points, restrained styling, and consistent spacing to look credible from the first second.",
  },
  {
    title: "Ready to scale",
    description:
      "Start with a sharp marketing site now, then expand into dashboards, auth, APIs, and product flows later.",
  },
];

const stats = [
  { value: "Fast", label: "Loads quickly and feels modern" },
  { value: "Clean", label: "Minimal, readable, premium layout" },
  { value: "Modular", label: "Easy to extend into a full app" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_24%),linear-gradient(to_bottom,#f8fbff,white)]">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-6 lg:px-8">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-slate-900" />
              <span className="text-sm font-semibold tracking-tight">
                BLUEBELL ETHICAL
              </span>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
              <Link href="#features" className="transition hover:text-slate-900">
                Features
              </Link>
              <Link href="#proof" className="transition hover:text-slate-900">
                Proof
              </Link>
              <Link href="#cta" className="transition hover:text-slate-900">
                Contact
              </Link>
            </nav>
          </header>

          <div className="grid gap-14 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
                Stripe-inspired layout starter
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Bluebell Compliance
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Använd AI med mindre risk, mindre tvekan och mindre intern röra.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Start building
                </Link>

                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
                >
                  See features
                </Link>
              </div>

              <div className="mt-14 grid gap-6 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-semibold tracking-tight text-slate-950">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl" />

              <div className="relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_80px_rgba(15,23,42,0.10)]">
                <div className="rounded-[22px] border border-slate-200 bg-slate-950 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Overview
                      </p>
                      <h2 className="mt-2 text-xl font-semibold">
                        Product readiness
                      </h2>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                      Live
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4">
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <p className="text-sm text-slate-300">Positioning</p>
                      <p className="mt-2 text-lg font-medium">
                        Premium and credible
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <p className="text-sm text-slate-300">Structure</p>
                      <p className="mt-2 text-lg font-medium">
                        Hero, proof, features, CTA
                      </p>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-sky-400 p-4 text-slate-950">
                      <p className="text-sm font-medium/none opacity-80">
                        Next move
                      </p>
                      <p className="mt-2 text-lg font-semibold">
                        Replace placeholder copy with your real product message
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-sm text-slate-500">Visual system</p>
                    <p className="mt-2 font-semibold text-slate-900">
                      Soft gradients
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-sm text-slate-500">UX focus</p>
                    <p className="mt-2 font-semibold text-slate-900">
                      Clear conversion path
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-indigo-600">Features</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A clean foundation you can actually build on
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Start with a polished homepage structure, then extend it into a
            product site or real application as your project grows.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="h-10 w-10 rounded-2xl bg-slate-100" />
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="proof" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-indigo-600">Proof</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Strong products look trustworthy before they explain everything
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Good structure, good spacing, and good proof presentation create
                credibility immediately.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Focused hero"],
                ["02", "Clear feature hierarchy"],
                ["03", "Strong final CTA"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-slate-200 bg-white p-6"
                >
                  <div className="text-2xl font-semibold tracking-tight text-slate-950">
                    {num}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-[32px] bg-slate-950 px-8 py-14 text-white sm:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-sky-300">Get started</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Replace this starter with your real product and make it yours.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Keep the structure. Rewrite the message. Then iterate section by
              section until the site feels unmistakably like your company.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}