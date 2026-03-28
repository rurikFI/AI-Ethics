"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const groups = [
  {
    title: "Workspace",
    items: [
      { href: "/dashboard/start", label: "Start" },
      { href: "/dashboard/next-step", label: "Next step" },
      { href: "/dashboard/checklist-progress", label: "Checklist progress" },
      { href: "/dashboard/document-package", label: "Document package" },
      { href: "/dashboard/updates", label: "Updates" },
    ],
  },
  {
    title: "Help",
    items: [{ href: "/dashboard/contact-support", label: "Contact / support" }],
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:w-72 lg:self-start">
      <div className="border-b border-slate-200 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Dashboard
        </p>
        <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
          Member workspace
        </h2>
      </div>

      <nav className="mt-5 space-y-6">
        {groups.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {group.title}
            </p>
            <div className="mt-3 space-y-1">
              {group.items.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      active
                        ? "block rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                        : "block rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
