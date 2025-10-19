import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "success" | "warning";
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default:
      "inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white",
    outline:
      "inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700",
    success:
      "inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700",
    warning:
      "inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700",
  } as const;

  return (
    <span className={cn(variants[variant], className)} {...props} />
  );
}
