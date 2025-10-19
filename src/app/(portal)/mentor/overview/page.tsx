import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  mockMentorRequests,
  mockSessions,
  mockTracks,
} from "@/data/mock-data";

export default function MentorOverviewPage() {
  const upcoming = mockSessions.filter((session) => session.status === "upcoming");
  const pendingRequests = mockMentorRequests.filter((request) => request.status === "pending");
  const activeTrack = mockTracks[0];

  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-3">
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Sessions this week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-slate-900">{upcoming.length}</p>
            <p className="mt-2 text-sm text-slate-600">
              Ensure your calendar slots are up to date.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              New requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-slate-900">{pendingRequests.length}</p>
            <p className="mt-2 text-sm text-slate-600">
              Respond to build your response rate badge.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Featured resource
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold text-slate-900">{activeTrack.title}</p>
            <p className="mt-1 text-xs text-slate-500">
              {activeTrack.modules} modules · {activeTrack.duration}
            </p>
            <p className="mt-3 text-xs font-semibold text-blue-600">View learner progress →</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-xl">Pending requests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingRequests.length === 0 ? (
              <p className="text-sm text-slate-600">
                You're all caught up. New requests will appear here.
              </p>
            ) : (
              pendingRequests.map((request) => (
                <div
                  key={request.id}
                  className="rounded-2xl border border-slate-200 p-4 text-sm"
                >
                  <p className="font-semibold text-slate-900">{request.student}</p>
                  <p className="mt-1 text-xs text-slate-500">{request.topic}</p>
                  <p className="mt-2 text-xs text-slate-500">Preferred: {request.preferredSlot}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs font-semibold text-blue-600">
                    <button>Accept →</button>
                    <button className="text-slate-500">Suggest time →</button>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-xl">Upcoming sessions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcoming.length === 0 ? (
              <p className="text-sm text-slate-600">
                No sessions scheduled. Open more slots to get booked.
              </p>
            ) : (
              upcoming.map((session) => (
                <div
                  key={session.id}
                  className="rounded-2xl border border-slate-200 p-4 text-sm"
                >
                  <p className="font-semibold text-slate-900">{session.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{session.date} · {session.time}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs font-semibold text-blue-600">
                    <button>Open briefing →</button>
                    <button className="text-slate-500">Reschedule →</button>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
