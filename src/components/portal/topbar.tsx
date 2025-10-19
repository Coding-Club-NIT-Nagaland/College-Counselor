import type { ReactNode } from "react";

export function PortalTopbar({
  title,
  subtitle,
  cta,
}: {
  title: string;
  subtitle: string;
  cta?: ReactNode;
}) {
  return (
    <div className="sticky top-16 z-30 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white px-6 py-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {subtitle}
        </p>
        <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
      </div>
      {cta ? <div className="flex items-center gap-3">{cta}</div> : null}
    </div>
  );
}
