import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-20 text-center">
      <div className="max-w-lg space-y-6">
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
          404
        </span>
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
          We couldn’t find that page.
        </h1>
        <p className="text-lg text-slate-600">
          The link may be broken or the page might have moved. Head back to the homepage or explore
          our resources and mentorship network.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Go to homepage
          </Link>
          <Link
            href="/dashboard/overview"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Student dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
