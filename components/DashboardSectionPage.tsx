type DashboardSectionPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: Array<{
    title: string;
    description: string;
    points: string[];
  }>;
};

export default function DashboardSectionPage({
  eyebrow,
  title,
  description,
  cards,
}: DashboardSectionPageProps) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {cards.map((card) => (
          <section
            key={card.title}
            className="rounded-[24px] border border-slate-200 bg-[linear-gradient(to_bottom,#ffffff,#f8fbff)] p-6"
          >
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">
              {card.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {card.description}
            </p>
            <ul className="mt-5 space-y-3">
              {card.points.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 shadow-sm ring-1 ring-slate-100"
                >
                  {point}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
