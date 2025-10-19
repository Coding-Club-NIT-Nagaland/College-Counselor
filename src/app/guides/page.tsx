export default function GuidesPage() {
  const guides = [
    {
      title: "Counseling basics",
      description: "Understand rounds, seat allotment, and how to prepare documents in advance.",
      href: "/resources",
    },
    {
      title: "Branch change roadmap",
      description: "Hear from mentors who successfully switched branches and what worked for them.",
      href: "/mentors",
    },
    {
      title: "Kickstart coding",
      description: "Follow our curated beginner-friendly track to build a consistent coding habit.",
      href: "/resources",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        <header className="space-y-4 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
            Guides
          </span>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Deep dives to navigate each milestone.
          </h1>
          <p className="text-lg text-slate-600">
            Explore expert-written playbooks that combine counseling insights, mentor tips, and
            detailed checklists.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-slate-900">{guide.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{guide.description}</p>
              <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600" href={guide.href}>
                View guide
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
