import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MentorList } from "@/components/dashboard/mentor-list";
import { mockSessions } from "@/data/mock-data";

export default function MentorshipPage() {
  const upcoming = mockSessions.filter((session) => session.status === "upcoming");
  const history = mockSessions.filter((session) => session.status !== "upcoming");

  return (
    <div className="space-y-8">
      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-xl">Find the right mentor</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
          <div className="md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Search by college or mentor name
            </label>
            <Input className="mt-2" placeholder="Try 'NIT CSE career roadmap'" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Skills focus
            </label>
            <Input className="mt-2" placeholder="Branch change, internships..." />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Session type
            </label>
            <Input className="mt-2" placeholder="Mock counseling, resume review" />
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-xl">Your sessions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Upcoming
            </p>
            {upcoming.length === 0 ? (
              <p className="mt-3 text-sm text-slate-600">
                Book a mentor to stay aligned before counseling deadlines.
              </p>
            ) : (
              upcoming.map((session) => (
                <div key={session.id} className="mt-4 space-y-2 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {session.title}
                  </p>
                  <p className="text-xs text-slate-500">{session.mentor}</p>
                  <p className="text-xs text-slate-500">
                    {session.date} · {session.time}
                  </p>
                  <button className="text-xs font-semibold text-blue-600">
                    Join call →
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Recent history
            </p>
            {history.length === 0 ? (
              <p className="mt-3 text-sm text-slate-600">
                Past sessions will appear here for quick rebooking.
              </p>
            ) : (
              history.map((session) => (
                <div key={session.id} className="mt-4 space-y-2 rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    {session.title}
                  </p>
                  <p className="text-xs text-slate-500">{session.mentor}</p>
                  <p className="text-xs text-slate-500">
                    {session.date} · {session.time}
                  </p>
                  <div className="flex items-center justify-between text-xs text-blue-600">
                    <button className="font-semibold">Rate session →</button>
                    <button className="font-semibold">Book again →</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      <MentorList title="Recommended mentors" />
    </div>
  );
}
