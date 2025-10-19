const posts = [
  {
    title: "How to interpret JoSAA round data",
    excerpt:
      "Map closing ranks to your profile, see movement across rounds, and decide which institutes to lock.",
    category: "Counseling",
    href: "/resources",
  },
  {
    title: "Mentor stories: From branch change to dream internships",
    excerpt: "Hear how seniors navigated the first year and the habits they recommend for freshers.",
    category: "Mentorship",
    href: "/mentors",
  },
  {
    title: "Study plans for balancing boards and entrance prep",
    excerpt: "Use time-boxed sprints, micro tasks, and streak tracking to stay consistent.",
    category: "Learning",
    href: "/resources",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6">
        <header className="space-y-4 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
            Insights
          </span>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">CollegeCounselor blog</h1>
          <p className="text-lg text-slate-600">
            Tutorials, case studies, and mentor playbooks to guide every step of your journey.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                {post.category}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">{post.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
              <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600" href={post.href}>
                Read more
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
