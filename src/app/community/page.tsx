export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6">
        <header className="space-y-4 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
            Community
          </span>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Connect with mentors and peers.
          </h1>
          <p className="text-lg text-slate-600">
            Join AMAs, group study rooms, and mentor-led workshops designed to keep you on track.
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Community spaces</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>• Weekly AMA with mentors covering counseling tactics.</li>
            <li>• Branch-specific discussion rooms moderated by alumni.</li>
            <li>• Accountability pods to keep your learning streak alive.</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">How to join</h2>
          <p className="text-sm text-slate-600">
            Access the community via the dashboard sidebar or email us at
            <span className="font-semibold text-slate-900"> community@collegecounselor.ai</span> for
            invites to specific groups.
          </p>
        </section>
      </div>
    </div>
  );
}
