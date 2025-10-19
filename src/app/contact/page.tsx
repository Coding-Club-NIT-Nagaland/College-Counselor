"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
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
              Get in touch
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                Talk to the CollegeCounselor team.
              </h1>
              <p className="text-lg text-slate-600">
                Whether you have product questions, partnership ideas, or press requests, reach out
                and we will respond within 2 business days.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              <dl className="space-y-4 text-sm text-slate-600">
                <div className="space-y-1">
                  <dt className="font-semibold text-slate-900">Email</dt>
                  <dd>team@collegecounselor.ai</dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-semibold text-slate-900">Support hours</dt>
                  <dd>Mon–Sat, 9:00am to 7:00pm IST</dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-semibold text-slate-900">Locations</dt>
                  <dd>Bengaluru · Pune (remote-first)</dd>
                </div>
              </dl>
            </div>
          </header>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
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
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="topic">
                  Topic
                </label>
                <Input id="topic" name="topic" placeholder="Partnership inquiry" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Share more details so we can assist you better."
                  required
                />
              </div>
              <Button className="w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
