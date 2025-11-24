"use client";

import { ReactNode } from "react";
import { Lightbulb } from "lucide-react";

interface ProTipProps {
  children: ReactNode;
}

export default function ProTip({ children }: ProTipProps) {
  return (
    <div className="my-6 p-6 bg-gh-accent-blue bg-opacity-10 border-l-4 border-gh-accent-blue rounded-r-lg">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Lightbulb size={28} className="text-gh-accent-blue" />
        </div>
        <div className="flex-1">
          <h4 className="text-projector-base font-semibold text-gh-accent-blue mb-2">
            💡 Pro Tip
          </h4>
          <div className="text-projector-sm text-gh-text-primary">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
