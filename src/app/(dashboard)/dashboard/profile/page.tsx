import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const preferences = {
  location: "Metro cities, South India",
  budget: "₹2.5L / year",
  branches: ["CSE", "IT", "ECE"],
  campusVibe: "Research-focused, startup culture",
};

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-xl">Student details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Full name
            </label>
            <Input className="mt-2" value="Priya Mehta" readOnly />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Exam & rank
            </label>
            <Input className="mt-2" value="JEE Main · 12,436" readOnly />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Category
            </label>
            <Input className="mt-2" value="GEN" readOnly />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Email
            </label>
            <Input className="mt-2" value="priya@example.com" readOnly />
          </div>
        </CardContent>
        <CardFooter>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
            Update details
          </button>
        </CardFooter>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-xl">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Location
            </p>
            <p className="mt-2 text-slate-700">{preferences.location}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Annual budget
            </p>
            <p className="mt-2 text-slate-700">{preferences.budget}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Target branches
            </p>
            <p className="mt-2 text-slate-700">{preferences.branches.join(", ")}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Campus vibe
            </p>
            <p className="mt-2 text-slate-700">{preferences.campusVibe}</p>
          </div>
        </CardContent>
        <CardFooter>
          <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
            Edit preferences
          </button>
        </CardFooter>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-xl">Saved shortlists</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div className="flex items-start justify-between rounded-2xl border border-slate-200 p-4">
            <div>
              <p className="font-semibold text-slate-900">Round 1 choices</p>
              <p className="text-xs text-slate-500">Updated Oct 12 · 9 programs</p>
            </div>
            <button className="text-xs font-semibold text-blue-600">View →</button>
          </div>
          <div className="flex items-start justify-between rounded-2xl border border-slate-200 p-4">
            <div>
              <p className="font-semibold text-slate-900">Scholarship-friendly list</p>
              <p className="text-xs text-slate-500">Updated Oct 9 · 6 programs</p>
            </div>
            <button className="text-xs font-semibold text-blue-600">View →</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
