"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = [
  "Product suggestion",
  "Mentor experience",
  "Bug report",
  "Learning tracks",
  "Other",
];

export default function FeedbackPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <header className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
              Feedback hub
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                Help us improve CollegeCounselor.
              </h1>
              <p className="text-lg text-slate-600">
                Share suggestions, wins, or blockers. We review each submission to shape the product
                roadmap and mentor experience.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              <p className="text-sm text-slate-600">
                Looking for urgent support? Reach us at <span className="font-semibold text-slate-900">support@collegecounselor.ai</span> or use the live chat inside your dashboard.
              </p>
            </div>
          </header>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="name">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Priya Sharma" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="category">
                  Category
                </label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                    >
                      <input
                        className="h-4 w-4 rounded border-slate-300"
                        defaultChecked={category === "Product suggestion"}
                        name="category"
                        type="radio"
                        value={category}
                      />
                      {category}
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="message">
                  Share your thoughts
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Tell us what's working well or what you'd like to see improved."
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="consent">
                  Share feedback with mentors?
                </label>
                <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <input className="h-4 w-4 rounded border-slate-300" id="consent" name="consent" type="checkbox" />
                  Allow my feedback to be referenced anonymously in mentor updates.
                </label>
              </div>
              <Button className="w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Submitting..." : "Submit feedback"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
