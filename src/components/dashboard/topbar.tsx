"use client";

import Link from "next/link";

export function DashboardTopbar() {
  return (
    <div className="sticky top-16 z-40 flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Student dashboard
        </p>
        <h1 className="text-xl font-semibold text-slate-900">
          Welcome back, User 👋
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/dashboard/profile"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Update profile
        </Link>
        <Link
          href="/dashboard/mentorship"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Book mentor
        </Link>
      </div>
    </div>
  );
}
