import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardTopbar } from "@/components/dashboard/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <DashboardTopbar />
        <div className="flex flex-col gap-6 lg:flex-row">
          <DashboardSidebar />
          <div className="flex-1 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:hidden">
              <p className="text-sm font-semibold text-slate-900">
                Use the desktop view for full navigation.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Mobile navigation coming soon.
              </p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
