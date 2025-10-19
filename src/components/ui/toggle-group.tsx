"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ToggleOption = {
  label: string;
  value: string;
};

export function ToggleGroup({
  options,
  value,
  onChange,
}: {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="inline-flex rounded-full border border-slate-200 bg-slate-100 p-1 text-sm font-semibold text-slate-600">
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-full px-3 py-1 transition",
              isActive
                ? "bg-white text-slate-900 shadow-sm"
                : "hover:bg-white/60"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
