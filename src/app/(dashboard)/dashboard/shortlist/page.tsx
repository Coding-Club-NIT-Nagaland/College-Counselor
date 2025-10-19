import { ShortlistBoard } from "@/components/dashboard/shortlist-board";
import { NotificationPanel } from "@/components/dashboard/notification-panel";
import { Timeline } from "@/components/dashboard/timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  mockShortlist,
  mockSessions,
  mockNotifications,
  mockCounselingTimeline,
} from "@/data/mock-data";

const shortlistFilters = ["All", "High probability", "New additions", "Needs review"];

const shortlistInsights = [
  {
    title: "Stay on track",
    description: "Confirm document uploads for colleges marked as Target before 24 Oct.",
  },
  {
    title: "Expand your reach",
    description: "Explore 3 more institutes in the Reach column to diversify your backup plan.",
  },
  {
    title: "Share with mentor",
    description: "Send this shortlist to your mentor before the upcoming strategy call.",
  },
];

export default function ShortlistPage() {
  const upcomingSessions = mockSessions.filter((session) => session.status === "upcoming");
  const upcomingTimeline = mockCounselingTimeline.slice(0, 4);

  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
          Shortlist workspace
        </span>
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Fine-tune your college shortlist with clarity.
          </h1>
          <p className="text-lg text-slate-600">
            Review probability, trends, and fees to decide which programs to focus on next. Share
            your selections with mentors for quick feedback.
          </p>
        </div>
      </header>

      <section className="grid gap-8 xl:grid-cols-[1.6fr_1fr]">
        <Card className="rounded-4xl border border-slate-200/80 bg-white/95 shadow-lg">
          <CardHeader className="flex flex-col gap-5 border-b border-slate-100/80 pb-5">
            <div className="flex flex-col gap-2">
              <CardTitle className="text-xl font-semibold text-slate-900">
                Your shortlist overview
              </CardTitle>
              <p className="text-sm text-slate-500">
                Sort colleges by probability buckets and track decision readiness at each level.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {shortlistFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className="rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                >
                  {filter}
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ShortlistBoard data={mockShortlist} />
          </CardContent>
        </Card>
        <div className="flex flex-col gap-6">
          <Card className="rounded-4xl border border-slate-200/80 bg-white shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Shortlist insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600">
              {shortlistInsights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-100 bg-slate-50/70 p-4"
                >
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="rounded-4xl border border-slate-200/80 bg-white shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Upcoming sessions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingSessions.length === 0 ? (
                <p className="text-sm text-slate-600">
                  No mentor sessions booked. Add a session to discuss this shortlist.
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
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.4fr_1fr]">
        <NotificationPanel
          title="Recent activity"
          notifications={mockNotifications.slice(0, 5)}
        />
        <Card className="rounded-4xl border border-slate-200/80 bg-white shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-slate-900">
              Next milestones
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <Timeline title="" items={upcomingTimeline} />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
