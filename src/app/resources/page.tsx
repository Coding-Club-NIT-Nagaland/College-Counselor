import { ResourceGrid } from "@/components/dashboard/resource-grid";

const sections = [
  {
    title: "Coding Foundations",
    description: "Essential concepts, quick challenges, and curated playlists to get comfortable with programming.",
    action: "Start learning",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Pattern-based practice sets and interview-style problems with mentor commentary.",
    action: "Practice problems",
  },
  {
    title: "Web Development",
    description: "Walkthroughs, workshops, and projects covering frontend to full-stack.",
    action: "Build projects",
  },
];

const highlights = [
  {
    title: "Learning formats",
    points: [
      "Mentor-led workshops and AMAs",
      "Self-paced playlists with check-ins",
      "Weekly practice sets by difficulty",
    ],
  },
  {
    title: "Tools included",
    points: [
      "Progress tracking across tracks",
      "Downloadable templates and notes",
      "Bookmark sync with your dashboard",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 bg-white px-4 py-16 sm:px-6">
      <header className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
            Learning library
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Handpicked resources for every stage of your journey.
            </h1>
            <p className="text-lg text-slate-600">
              Explore bite-sized lessons, quizzes, and projects aligned with your track. Bookmark resources to sync with your dashboard.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#collections"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Browse collections
            </a>
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Continue where you left
            </a>
          </div>
        </div>
        <div className="space-y-5 rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-lg backdrop-blur">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="rounded-3xl border border-slate-100 bg-slate-50/60 p-5">
              <p className="text-sm font-semibold text-slate-900">{highlight.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {highlight.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </header>

      <section id="collections" className="grid gap-8 md:grid-cols-3">
        {sections.map((section) => (
          <div
            key={section.title}
            className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
          >
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
              <p className="text-sm text-slate-600">{section.description}</p>
            </div>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              {section.action}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </section>

      <section className="space-y-12">
        <ResourceGrid title="Recommended for you" />
        <ResourceGrid title="Trending this week" />
      </section>
    </div>
  );
}
