"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const oauthProviders = [
  { name: "Google", href: "#" },
  { name: "GitHub", href: "#" }
];

export default function LoginPage() {
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
            Welcome back
          </span>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Sign in to continue your counseling journey.
          </h1>
          <p className="text-lg text-slate-600">
            Access your shortlist, sync mentor sessions, and track your learning streak from any
            device.
          </p>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              New here? <Link className="font-semibold text-blue-600" href="/auth/register">Create an account</Link> to get personalized predictions and mentor support.
            </p>
          </div>
        </div>

        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                Email address
              </label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700" htmlFor="password">
                Password
              </label>
              <Input id="password" name="password" type="password" placeholder="••••••••" required />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input className="h-4 w-4 rounded border-slate-300" type="checkbox" />
                Remember me
              </label>
              <Link className="font-semibold text-blue-600" href="#">
                Forgot password?
              </Link>
            </div>
            <Button className="w-full" disabled={isSubmitting} type="submit">
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="mt-6 space-y-4">
            <p className="text-center text-xs uppercase tracking-wide text-slate-500">
              Or continue with
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {oauthProviders.map((provider) => (
                <Button key={provider.name} className="w-full" type="button" variant="secondary">
                  {provider.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
