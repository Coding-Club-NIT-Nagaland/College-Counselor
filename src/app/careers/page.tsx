export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
        <header className="space-y-4 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
            Careers
          </span>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Build the future of college counseling.
          </h1>
          <p className="text-lg text-slate-600">
            Join a distributed team of educators, engineers, and mentors helping students make
            confident decisions.
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Our values</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>• Empathy for every student&apos;s journey.</li>
            <li>• Data transparency and responsible AI.</li>
            <li>• Bias-free mentorship and inclusive communities.</li>
            <li>• Rapid iteration with student, mentor, and parent feedback.</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Open roles</h2>
          <p className="text-sm text-slate-600">
            We are building product, data, content, and mentorship teams. Tell us why you want to
            work at CollegeCounselor and share your portfolio or resume with
            <span className="font-semibold text-slate-900"> careers@collegecounselor.ai</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
