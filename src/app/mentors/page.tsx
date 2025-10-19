import { MentorList } from "@/components/dashboard/mentor-list";

const highlights = [
  {
    title: "Verified alumni",
    description: "Every mentor is verified with college IDs and rating safeguards.",
  },
  {
    title: "Targeted expertise",
    description: "Find mentors for branch change, internships, SOP reviews, and more.",
  },
  {
    title: "Flexible sessions",
    description: "Book 1:1 calls, group AMAs, or async feedback on your own schedule.",
  },
];

const metrics = [
  { label: "Mentors", value: "85+" },
  { label: "Colleges represented", value: "40" },
  { label: "Avg. rating", value: "4.8/5" },
];

export default function MentorsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 bg-white px-4 py-16 sm:px-6">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
            Mentor marketplace
          </span>
          <div className="space-y-5">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Learn from seniors who have already walked your path.
            </h1>
            <p className="text-lg text-slate-600">
              Browse mentors by college, branch, and skills. Book personalized sessions or join community AMAs to stay ahead during counseling and your first year.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-3">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-center">
                  <p className="text-xl font-semibold text-slate-900">{item.value}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#directory"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                View mentors
              </a>
              <a
                href="/auth/signup"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Become a mentor
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-lg backdrop-blur">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-100 bg-slate-50/60 p-4 transition hover:border-blue-200 hover:bg-blue-50/50"
            >
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="directory" className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900">Explore the directory</h2>
          <p className="text-sm text-slate-600">Filter by interest areas, session formats, or alumni networks that match your goals.</p>
        </div>
        <MentorList title="Featured mentors" />
      </section>
    </div>
  );
}
