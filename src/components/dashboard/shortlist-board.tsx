import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const columns: Array<{ key: "likely" | "target" | "reach"; title: string; tone: string }> = [
  { key: "likely", title: "Likely", tone: "text-emerald-600" },
  { key: "target", title: "Target", tone: "text-blue-600" },
  { key: "reach", title: "Reach", tone: "text-amber-600" },
];

type ShortlistData = Record<
  "likely" | "target" | "reach",
  Array<{
    id: string;
    name: string;
    program: string;
    probability: number;
    closingRank: number;
    trend: string;
    fees: string;
    location: string;
  }>
>;

const trendLabel: Record<string, string> = {
  rising: "▲ Rising demand",
  falling: "▼ Decreasing demand",
  stable: "• Stable trend",
};

export function ShortlistBoard({ data }: { data: ShortlistData }) {
  return (
    <div className="-mx-4 overflow-x-auto pb-2 md:mx-0 md:overflow-visible md:pb-0">
      <div className="flex flex-row gap-4 px-4 md:grid md:grid-cols-3 md:gap-6 md:px-0">
        {columns.map((column) => (
          <Card
            key={column.key}
            className="flex h-full w-[280px] shrink-0 flex-col rounded-3xl border border-slate-200/80 bg-white px-5 py-4 shadow-sm md:w-full"
          >
            <CardHeader className="space-y-3 p-0">
              <CardTitle className="flex items-center justify-between text-base">
                <span>{column.title}</span>
                <Badge variant="outline" className={`${column.tone} text-[11px] font-semibold`}>
                  {data[column.key].length} options
                </Badge>
              </CardTitle>
              <CardDescription className="text-xs text-slate-500">
                Based on the last 3 years of closing ranks and your preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4 p-0">
              {data[column.key].map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 space-y-1">
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        {item.program}
                      </p>
                    </div>
                    <Badge variant="success" className="bg-emerald-100 text-emerald-700">
                      {(item.probability * 100).toFixed(0)}%
                    </Badge>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="rounded-xl bg-white px-3 py-2">
                      <p className="font-semibold text-slate-900">Closing rank</p>
                      <p className="tabular-nums">{item.closingRank.toLocaleString()}</p>
                    </div>
                    <div className="rounded-xl bg-white px-3 py-2">
                      <p className="font-semibold text-slate-900">Location</p>
                      <p>{item.location}</p>
                    </div>
                    <div className="rounded-xl bg-white px-3 py-2">
                      <p className="font-semibold text-slate-900">Trend</p>
                      <p>{trendLabel[item.trend]}</p>
                    </div>
                    <div className="rounded-xl bg-white px-3 py-2">
                      <p className="font-semibold text-slate-900">Fees</p>
                      <p>{item.fees}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-blue-600">
                    <span>View college details</span>
                    <span aria-hidden>→</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}