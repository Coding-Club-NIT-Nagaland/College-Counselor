"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = [
  {
    title: "Product",
    links: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/mentors", label: "Mentors" },
      { href: "/resources", label: "Resources" },
      { href: "/waitlist", label: "Waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
      { href: "/press", label: "Press" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/help-center", label: "Help Center" },
      { href: "/guides", label: "Guides" },
      { href: "/blog", label: "Blog" },
      { href: "/feedback", label: "Feedback" },
    ],
  },
];

const mentorLinks = [
  { href: "/mentor/overview", label: "Mentor workspace" },
  { href: "/dashboard/mentorship", label: "Student mentorship" },
  { href: "/community", label: "Community" },
];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: integrate backend submission
    setEmail("");
  };

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
              CollegeCounselor
            </span>
            <p className="text-sm text-slate-600">
              Data-driven guidance, trusted mentors, and structured learning paths so you can thrive from counseling to first year.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Join our monthly digest
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="sm:flex-1"
                />
                <Button type="submit" className="sm:w-auto">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-slate-500">
                No spam. Insights on cutoffs, mentorship playbooks, and track drops.
              </p>
            </form>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-slate-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-900">Mentors</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {mentorLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-slate-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CollegeCounselor. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="transition hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-slate-900">
              Terms
            </Link>
            <Link href="/security" className="transition hover:text-slate-900">
              Security
            </Link>
            <Link href="/status" className="transition hover:text-slate-900">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
