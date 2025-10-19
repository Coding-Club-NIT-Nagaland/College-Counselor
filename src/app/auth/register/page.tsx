"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 shadow-sm">
            Join CollegeCounselor
          </span>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Create your account in minutes.
          </h1>
          <p className="text-lg text-slate-600">
            Set up your profile to unlock AI predictions, mentor sessions, and personalized learning
            plans.
          </p>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Smart college shortlist tailored to your rank and preferences.</li>
              <li>• Mentor matchmaking with verified alumni.</li>
              <li>• Learning streaks and curated resources to stay ahead.</li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-md space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
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
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="password">
                    Password
                  </label>
                  <Input id="password" name="password" type="password" placeholder="••••••••" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="confirmPassword">
                    Confirm password
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="exam">
                  Primary exam / rank
                </label>
                <Input id="exam" name="exam" placeholder="JEE Main · AIR 14,500" />
              </div>
              <Button className="w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Creating account..." : "Create account"}
              </Button>
            </form>
          </div>
          <p className="text-center text-sm text-slate-600">
            Already have an account? <Link className="font-semibold text-blue-600" href="/auth/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
