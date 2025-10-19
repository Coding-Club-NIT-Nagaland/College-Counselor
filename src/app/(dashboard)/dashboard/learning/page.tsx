import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  mockAchievements,
  mockLearningModules,
  mockResources,
  mockTracks,
} from "@/data/mock-data";

export default function LearningPage() {
  const activeTrack = mockTracks[0];
  const modules = mockLearningModules[activeTrack.id] ?? [];

  return (
    <div className="space-y-8">
      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-xl">Your learning hub</CardTitle>
          <p className="text-sm text-slate-600">
            Stay consistent with curated tracks, quick quizzes, and mentor nudges.
          </p>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {mockTracks.map((track) => (
            <div
              key={track.id}
              className="rounded-2xl border border-slate-200 p-4 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">{track.title}</p>
                <Badge variant={track.id === activeTrack.id ? "success" : "outline"}>
                  {track.level}
                </Badge>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                {track.modules} modules · {track.duration}
              </p>
              <div className="mt-4 h-2 w-full rounded-full bg-slate-200">
                <div
                  className="h-2 rounded-full bg-blue-600"
                  style={{ width: `${track.progress}%` }}
                />
              </div>
              <p className="mt-2 text-xs font-medium text-blue-600">
                {track.progress}% complete
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-xl">Modules in progress</CardTitle>
          <p className="text-sm text-slate-600">
            Complete all lessons to unlock mentor AMA hours.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {modules.map((module) => (
            <div
              key={module.id}
              className="rounded-2xl border border-slate-200 p-4"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{module.title}</p>
                  <p className="text-xs text-slate-500">{module.duration}</p>
                </div>
                <Badge
                  variant={
                    module.status === "completed"
                      ? "success"
                      : module.status === "locked"
                      ? "outline"
                      : "warning"
                  }
                >
                  {module.status === "completed"
                    ? "Completed"
                    : module.status === "locked"
                    ? "Unlock next"
                    : "In progress"}
                </Badge>
              </div>
              <div className="mt-4 space-y-3">
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-3 text-xs"
                  >
                    <div>
                      <p className="font-semibold text-slate-900">{lesson.title}</p>
                      <p className="text-slate-500">{lesson.type}</p>
                    </div>
                    <button className="text-blue-600">
                      {lesson.completed ? "Review" : "Start"} →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-xl">Daily micro tasks</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {mockResources.map((resource) => (
            <div
              key={resource.id}
              className="rounded-2xl border border-slate-200 p-4 text-sm"
            >
              <p className="font-semibold text-slate-900">{resource.title}</p>
              <p className="mt-1 text-xs text-slate-500">
                {resource.type} · {resource.duration}
              </p>
              <p className="mt-3 text-xs font-semibold text-blue-600">
                Continue →
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-xl">Achievements & streaks</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-3xl font-bold text-slate-900">14-day streak 🔥</p>
            <p className="mt-2 text-sm text-slate-600">
              Complete today's quiz to extend your streak and unlock a bonus mentor AMA slot.
            </p>
            <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
              Complete daily task
            </button>
          </div>
          <div className="space-y-3">
            {mockAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="rounded-2xl border border-slate-200 p-4 text-sm"
              >
                <p className="font-semibold text-slate-900">{achievement.title}</p>
                <p className="mt-1 text-xs text-slate-500">{achievement.description}</p>
                <p className="mt-1 text-xs text-slate-400">Earned on {achievement.earnedOn}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
