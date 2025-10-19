import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TimelineItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  type: "session" | "deadline" | "event";
};

const typeStyles: Record<TimelineItem["type"], string> = {
  session: "bg-blue-100 text-blue-700",
  deadline: "bg-rose-100 text-rose-700",
  event: "bg-emerald-100 text-emerald-700",
};

const connectorStyles: Record<TimelineItem["type"], string> = {
  session: "border-blue-200",
  deadline: "border-rose-200",
  event: "border-emerald-200",
};

export function Timeline({
  title,
  items,
}: {
  title: string;
  items: TimelineItem[];
}) {
  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="relative space-y-6 border-l border-slate-200 pl-4">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={item.id}
                className={`relative space-y-2 ${isLast ? "pb-0" : "pb-6"}`}
              >
                <span
                  className={`absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full border-2 bg-white text-xs font-semibold ${connectorStyles[item.type]} ${typeStyles[item.type]}`}
                >
                  {item.type[0].toUpperCase()}
                </span>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${typeStyles[item.type]}`}
                    >
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">{item.description}</p>
                </div>
                {!isLast && (
                  <div
                    className={`absolute left-[-1px] top-9 h-[calc(100%-1.75rem)] border-l ${connectorStyles[item.type]}`}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}
