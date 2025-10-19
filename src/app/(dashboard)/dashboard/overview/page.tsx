import { StatCards } from "@/components/dashboard/dash-cards";
import { NotificationPanel } from "@/components/dashboard/notification-panel";
import { Timeline } from "@/components/dashboard/timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  mockMentors,
  mockResources,
  mockSessions,
  mockTracks,
  mockNotifications,
  mockCounselingTimeline,
} from "@/data/mock-data";

export default function OverviewPage() {
  const upcomingSessions = mockSessions.filter((session) => session.status === "upcoming");

  return (
    <div className="space-y-12">
      <StatCards />

      <section className="grid gap-8 xl:grid-cols-3">
        <Card className="rounded-4xl border border-slate-200/80 bg-white shadow-md xl:col-span-2">
          <CardHeader className="flex flex-col gap-2 pb-5">
            <CardTitle className="text-lg font-semibold text-slate-900">
              Upcoming sessions
            </CardTitle>
            <p className="text-xs text-slate-500">
              Stay on track with mentor calls and strategy check-ins scheduled this week. Review your
              choices in the shortlist workspace when plans change.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingSessions.length === 0 ? (
              <p className="text-sm text-slate-600">
                No sessions scheduled. Book a mentor to stay on track.
              </p>
            ) : (
              upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm"
                >
                  <p className="font-semibold text-slate-900">{session.title}</p>
                  <p className="mt-1 text-slate-600">{session.mentor}</p>
                  <p className="mt-2 text-xs text-slate-500">
                    {session.date} · {session.time}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>
        <NotificationPanel
          title="Activity & notifications"
          notifications={mockNotifications}
        />
      </section>

      <section className="grid gap-8 xl:grid-cols-3">
        <Card className="rounded-4xl border border-slate-200/80 bg-white shadow-md xl:col-span-2">
          <CardHeader className="flex flex-col gap-2 pb-5">
            <CardTitle className="text-lg font-semibold text-slate-900">
              Recommended mentors
            </CardTitle>
            <p className="text-xs text-slate-500">
              Handpicked mentors based on your target colleges and interests.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockMentors.slice(0, 3).map((mentor) => (
              <div
                key={mentor.id}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50/70 p-4 text-sm"
              >
                <div className="h-12 w-12 rounded-full bg-blue-100 text-center text-lg font-semibold leading-[48px] text-blue-600">
                  {mentor.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">{mentor.name}</p>
                    <p className="text-xs text-slate-500">{mentor.rating.toFixed(1)} ★</p>
                  </div>
                  <p className="text-xs text-slate-500">
                    {mentor.college} · {mentor.branch}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-500">
                    {mentor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white px-2 py-1 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs font-medium text-blue-600">
                    <span>{mentor.price}</span>
                    <span className="inline-flex items-center gap-1">
                      Book session
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="rounded-4xl border border-slate-200/80 bg-white shadow-md">
          <CardHeader className="pb-5">
            <CardTitle className="text-lg font-semibold text-slate-900">
              Learning progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockTracks.map((track) => (
              <div
                key={track.id}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-4 text-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900">{track.title}</p>
                  <span className="text-xs text-slate-500">{track.level}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {track.modules} modules · {track.duration}
                </p>
                <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: `${track.progress}%` }}
                  />
                </div>
                <p className="mt-2 text-xs font-semibold text-blue-600">
                  {track.progress}% complete
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.5fr_1fr]">
        <Card className="rounded-4xl border border-slate-200/80 bg-white shadow-md">
          <CardHeader className="flex flex-col gap-2 pb-5">
            <CardTitle className="text-lg font-semibold text-slate-900">
              Latest resources
            </CardTitle>
            <p className="text-xs text-slate-500">
              From playlists to worksheets curated with your goals in mind.
            </p>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {mockResources.slice(0, 3).map((resource) => (
              <div
                key={resource.id}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-4 text-sm transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <p className="font-semibold text-slate-900">{resource.title}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {resource.type} · {resource.duration}
                </p>
                <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                  View lesson
                  <span aria-hidden>→</span>
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Timeline
          title="Upcoming counseling timeline"
          items={mockCounselingTimeline}
        />
      </section>
    </div>
  );
}
