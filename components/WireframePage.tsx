import Link from "next/link";

type WireframeSection = {
  title: string;
  description: string;
  bullets?: string[];
};

type WireframeLink = {
  href: string;
  label: string;
};

type WireframePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: WireframeSection[];
  links?: WireframeLink[];
};

export default function WireframePage({
  eyebrow,
  title,
  description,
  sections,
  links = [],
}: WireframePageProps) {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)] text-slate-950">
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.10),transparent_24%),linear-gradient(to_bottom,#f8fbff,white)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>

          {links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Placeholder
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {section.description}
              </p>

              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl bg-slate-50 px-4 py-3">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
