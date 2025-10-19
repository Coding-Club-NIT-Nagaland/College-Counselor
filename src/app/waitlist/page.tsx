"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WaitlistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="space-y-6 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
            Join the waitlist
          </span>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Be the first to access new CollegeCounselor features.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            We are rolling out advanced counseling insights, mentor programs, and learning tracks. Share a
            few details and we will send you early access updates.
          </p>
        </div>

        <form className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl" onSubmit={handleSubmit}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700" htmlFor="name">
                Full name
              </label>
              <Input id="name" name="name" placeholder="Priya Sharma" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                Email address
              </label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700" htmlFor="exam">
                Entrance exam / rank
              </label>
              <Input id="exam" name="exam" placeholder="JEE Main · AIR 14,500" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700" htmlFor="goal">
                What do you want early access to?
              </label>
              <Input id="goal" name="goal" placeholder="Mentor program, AI predictions, etc." />
            </div>
          </div>
          <Button className="mt-8 w-full sm:w-auto" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Joining..." : "Join waitlist"}
          </Button>
        </form>
      </div>
    </div>
  );
}
