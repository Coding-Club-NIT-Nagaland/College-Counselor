import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockMentors } from "@/data/mock-data";

export function MentorList({ title = "Mentor directory" }: { title?: string }) {
  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 text-sm md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 text-center text-lg font-semibold leading-[48px] text-blue-600">
                {mentor.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{mentor.name}</p>
                <p className="text-xs text-slate-500">
                  {mentor.college} · {mentor.branch}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-500">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-2 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 text-xs md:items-end">
              <p className="text-slate-500">Rating {mentor.rating.toFixed(1)} ★</p>
              <p className="text-slate-500">{mentor.sessions} sessions</p>
              <p className="font-medium text-blue-600">{mentor.price}</p>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700">
                View availability
              </button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
