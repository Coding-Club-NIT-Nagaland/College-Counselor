export default function PressPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
        <header className="space-y-4 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
            Press kit
          </span>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Media resources & press inquiries.
          </h1>
          <p className="text-lg text-slate-600">
            Access brand assets and connect with our communications team.
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Brand essentials</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>• Logos in PNG and SVG formats.</li>
            <li>• Product screenshots and dashboard previews.</li>
            <li>• Founder bios and HQ photography.</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Need a quote or interview?</h2>
          <p className="text-sm text-slate-600">
            Email <span className="font-semibold text-slate-900">press@collegecounselor.ai</span> with
            your publication, angle, and deadlines. We aim to respond within one business day.
          </p>
        </section>
      </div>
    </div>
  );
}
