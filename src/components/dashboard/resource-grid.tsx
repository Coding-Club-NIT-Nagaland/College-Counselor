import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockResources } from "@/data/mock-data";

export function ResourceGrid({ title }: { title: string }) {
  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
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
            <p className="mt-3 text-xs font-semibold text-blue-600">View →</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
