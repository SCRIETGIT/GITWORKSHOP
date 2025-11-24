"use client";

import { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface WarningBoxProps {
  title?: string;
  children: ReactNode;
}

export default function WarningBox({ title = "Watch Out!", children }: WarningBoxProps) {
  return (
    <div className="my-6 p-6 bg-gh-accent-yellow bg-opacity-10 border-l-4 border-gh-accent-yellow rounded-r-lg">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <AlertTriangle size={28} className="text-gh-accent-yellow" />
        </div>
        <div className="flex-1">
          <h4 className="text-projector-base font-semibold text-gh-accent-yellow mb-2">
            {title}
          </h4>
          <div className="text-projector-sm text-gh-text-primary space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
