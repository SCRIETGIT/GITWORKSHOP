"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "bash",
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="my-6">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gh-bg-tertiary rounded-t-lg border border-gh-border border-b-0">
        <div className="flex items-center gap-3">
          {filename && (
            <span className="text-projector-sm text-gh-text-primary font-mono">
              {filename}
            </span>
          )}
          <span className="text-projector-xs text-gh-text-secondary px-2 py-1 bg-gh-bg-secondary rounded border border-gh-border">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 text-projector-xs text-gh-text-secondary hover:text-gh-text-primary hover:bg-gh-bg-secondary rounded transition-all"
        >
          {copied ? (
            <>
              <Check size={16} className="text-gh-accent-green" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="relative bg-gh-bg-secondary border border-gh-border rounded-b-lg overflow-x-auto">
        <pre className="p-4 m-0">
          <code className="font-mono text-projector-sm text-gh-text-primary">
            {showLineNumbers ? (
              <table className="w-full">
                <tbody>
                  {lines.map((line, index) => (
                    <tr key={index}>
                      <td className="text-gh-text-secondary pr-4 select-none text-right" style={{ width: '40px' }}>
                        {index + 1}
                      </td>
                      <td>{line || ' '}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
