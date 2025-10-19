"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type PortalNavSection = {
  title: string;
  items: Array<{ href: string; label: string }>;
};

export function PortalSidebar({ sections }: { sections: PortalNavSection[] }) {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:block">
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {section.title}
            </p>
            <nav className="space-y-2">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-slate-100",
                    pathname === item.href ? "bg-slate-900 text-white" : "text-slate-600"
                  )}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-slate-400">→</span>
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}
