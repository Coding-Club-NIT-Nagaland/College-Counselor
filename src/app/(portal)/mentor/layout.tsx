"use client";

import Link from "next/link";
import { PortalSidebar, type PortalNavSection } from "@/components/portal/sidebar";
import { PortalTopbar } from "@/components/portal/topbar";

const sections: PortalNavSection[] = [
  {
    title: "Mentor",
    items: [
      { href: "/mentor/overview", label: "Overview" },
      { href: "/mentor/sessions", label: "Sessions" },
      { href: "/mentor/resources", label: "Resources" },
      { href: "/mentor/profile", label: "Profile" },
    ],
  },
  {
    title: "Shortcuts",
    items: [
      { href: "/dashboard/mentorship", label: "Student view" },
      { href: "/dashboard/learning", label: "Learning hub" },
    ],
  },
];

export default function MentorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-0">
      <PortalTopbar
        title="Mentor workspace"
        subtitle="Guide students with confidence"
        cta={
          <Link
            href="/mentors"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            View public profile
          </Link>
        }
      />
      <div className="flex gap-6">
        <PortalSidebar sections={sections} />
        <div className="flex-1 space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:hidden">
            <p className="text-sm font-semibold text-slate-900">
              Desktop navigation only for now.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Mobile mentoring tools are in progress.
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
