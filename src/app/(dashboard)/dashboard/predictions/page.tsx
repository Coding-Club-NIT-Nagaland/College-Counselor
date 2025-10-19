"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { ShortlistBoard } from "@/components/dashboard/shortlist-board";
import { mockShortlist } from "@/data/mock-data";

const preferenceOptions = [
  { label: "All", value: "all" },
  { label: "Tier 1", value: "tier1" },
  { label: "Tier 2", value: "tier2" },
  { label: "Metropolitan", value: "metro" },
];

const roundOptions = [
  { label: "Round 1", value: "r1" },
  { label: "Round 2", value: "r2" },
  { label: "Special", value: "special" },
];

export default function PredictionsPage() {
  const [selectedPreference, setSelectedPreference] = useState("all");
  const [selectedRound, setSelectedRound] = useState("r1");

  return (
    <div className="space-y-8">
      <Card className="rounded-3xl border-blue-100 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-xl text-blue-900">
            Update your prediction inputs
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-900/70">
              Exam rank
            </p>
            <p className="mt-1 text-lg font-semibold text-blue-900">12,436</p>
            <p className="text-xs text-blue-900/70">JEE Main · GEN</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-900/70">
              Preferred program
            </p>
            <p className="mt-1 text-lg font-semibold text-blue-900">CSE / IT</p>
            <p className="text-xs text-blue-900/70">Open to ECE alternatives</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-900/70">
              Location focus
            </p>
            <ToggleGroup
              options={preferenceOptions}
              value={selectedPreference}
              onChange={setSelectedPreference}
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-900/70">
              Counseling round
            </p>
            <ToggleGroup
              options={roundOptions}
              value={selectedRound}
              onChange={setSelectedRound}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Snapshot
              </p>
              <span className="text-xl font-semibold text-slate-900">
                Your admission outlook
              </span>
            </div>
            <Badge variant="success">High confidence</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Probability score
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-900">78%</p>
            <p className="mt-2 text-sm text-slate-600">
              Higher than 2022-24 averages for 4 programs you&apos;re targeting.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Suggestion
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Consider adding `NIT Warangal (ECE)` and `IIIT Bangalore (CSA)` to strengthen your target list.
            </p>
            <p className="mt-3 text-xs font-medium text-blue-600">View details →</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Actionable next step
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Book a mentor session for a mock counseling run-through before Round 2 lock-in.
            </p>
            <p className="mt-3 text-xs font-medium text-blue-600">Schedule mentor →</p>
          </div>
        </CardContent>
      </Card>

      <ShortlistBoard data={mockShortlist} />

      <Card className="rounded-3xl">
        <CardHeader>
          <CardTitle className="text-xl">Probability insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Rank vs closing trend
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Your rank beats the closing rank for `NIT Surathkal (CSE)` in 3 of the last 4 years.
              </p>
              <p className="mt-3 text-xs text-blue-600">View historical chart →</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Category advantage
              </p>
              <p className="mt-2 text-sm text-slate-600">
                GEN seat availability in preferred institutes increased by 6% this year, boosting Likely outcomes.
              </p>
              <p className="mt-3 text-xs text-blue-600">See seat matrix →</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Personalized recommendation
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Prep for competitive interviews: start `DSA Sprint Week` in the learning hub and share your shortlist with mentors for deeper guidance.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-blue-600">
              <span>Start sprint →</span>
              <span>Share shortlist →</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
