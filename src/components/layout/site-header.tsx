"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/mentors", label: "Mentors" },
  { href: "/resources", label: "Resources" },
  { href: "/dashboard", label: "Dashboard" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={closeMenu}
        >
          <span className="rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            CollegeCounselor
          </span>
          <span className="hidden text-sm font-semibold text-slate-900 sm:inline">
            CollegeCounselor
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900",
                pathname === item.href && "bg-slate-900 text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="rounded-full border border-blue-100 px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Join waitlist
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/auth/login"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Log in
          </Link>
          <Link
            href="/auth/register"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Get started
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle navigation</span>
          {isOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M5 5l10 10M15 5L5 15" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M3 6h14M3 10h14M3 14h14" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100",
                  pathname === item.href && "bg-slate-900 text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              onClick={closeMenu}
              className="rounded-xl border border-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Join waitlist
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/auth/login"
                onClick={closeMenu}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Log in
              </Link>
              <Link
                href="/auth/register"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
