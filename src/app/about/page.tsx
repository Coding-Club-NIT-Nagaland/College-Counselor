export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
        <header className="space-y-4 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
            Our story
          </span>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">About CollegeCounselor</h1>
          <p className="text-lg text-slate-600">
            We blend data, mentorship, and learning tracks so students can make confident choices and
            thrive from counseling to campus life.
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Why we exist</h2>
          <p className="text-sm text-slate-600">
            Counseling in India is complex — cutoffs shift every round, mentor access is limited, and reliable
            learning plans are scattered. Our team of alumni from NITs, IIITs, and IITs built CollegeCounselor to simplify every step. We use historical data, verified mentors, and curated upskilling
            tracks to guide students end-to-end.
          </p>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">What we focus on</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>• Transparent predictions across Likely, Target, and Reach colleges.</li>
            <li>• Mentor marketplace with vetted seniors offering 1:1 and group sessions.</li>
            <li>• Structured learning tracks with streaks, progress dashboards, and nudges.</li>
            <li>• Seamless handoff from counseling decisions to first-year success.</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Backed by mentors and alumni</h2>
          <p className="text-sm text-slate-600">
            Hundreds of mentors contribute real stories, mock interviews, SOP templates, and weekly AMAs.
            Students benefit from structured guidance and a community that keeps them accountable.
          </p>
        </section>
      </div>
    </div>
  );
}
