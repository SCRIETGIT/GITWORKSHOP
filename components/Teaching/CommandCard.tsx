"use client";

import { ReactNode } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import CodeBlock from "@/components/CodeBlock/CodeBlock";

interface CommandCardProps {
  command: string;
  description: string;
  output?: string;
  children?: ReactNode;
}

export default function CommandCard({
  command,
  description,
  output,
  children,
}: CommandCardProps) {
  return (
    <div className="my-6 card">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-gh-accent-blue bg-opacity-20 rounded-lg">
          <TerminalIcon size={24} className="text-gh-accent-blue" />
        </div>
        <div className="flex-1">
          <h4 className="text-projector-lg font-semibold mb-2">
            <code className="text-gh-accent-green">{command}</code>
          </h4>
          <p className="text-projector-sm text-gh-text-secondary">{description}</p>
        </div>
      </div>

      {children && <div className="mb-4">{children}</div>}

      {output && (
        <div className="mt-4">
          <p className="text-projector-sm text-gh-text-secondary mb-2">Expected output:</p>
          <CodeBlock code={output} language="bash" />
        </div>
      )}
    </div>
  );
}
