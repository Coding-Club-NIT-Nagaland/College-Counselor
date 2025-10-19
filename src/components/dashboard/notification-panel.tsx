import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ReactNode } from "react";

export type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  action?: ReactNode;
};

export function NotificationPanel({
  title,
  notifications,
}: {
  title: string;
  notifications: Notification[];
}) {
  return (
    <Card className="rounded-3xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <p className="mt-2 text-sm text-slate-600">
            Stay on top of counseling updates, mentor notes, and learning nudges.
          </p>
        </div>
        <button className="hidden rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 md:inline-flex">
          Mark all read
        </button>
      </CardHeader>
      <CardContent className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {notification.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {notification.description}
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 text-xs md:items-end">
                <span className="rounded-full bg-slate-100 px-2 py-1 font-medium text-slate-500">
                  {notification.time}
                </span>
                {notification.action ?? null}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
