import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function StatCards() {
  const stats = [
    {
      title: "Admission probability",
      value: "78%",
      description: "Across 6 shortlisted programs for Round 2.",
      badge: "Live",
    },
    {
      title: "Mentor sessions",
      value: "2 upcoming",
      description: "Prep agendas and share notes with mentors.",
      badge: "Schedule",
    },
    {
      title: "Learning streak",
      value: "14 days",
      description: "Complete today's micro task to keep the streak.",
      badge: "Streak",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50"
        >
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle className="text-sm font-semibold text-slate-900">
                {stat.title}
              </CardTitle>
              <CardDescription className="mt-2 text-xs text-slate-500">
                {stat.description}
              </CardDescription>
            </div>
            <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              {stat.badge}
            </span>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
