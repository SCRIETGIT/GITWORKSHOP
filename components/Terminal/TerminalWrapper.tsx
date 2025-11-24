"use client";

import dynamic from 'next/dynamic';

// Dynamically import Terminal with no SSR since xterm.js uses browser APIs
const Terminal = dynamic(() => import('@/components/Terminal/Terminal'), {
  ssr: false,
  loading: () => (
    <div className="bg-gh-bg-secondary rounded-lg border border-gh-border p-12 text-center">
      <div className="animate-pulse">
        <p className="text-gh-text-secondary">Loading terminal...</p>
      </div>
    </div>
  ),
});

interface TerminalWrapperProps {
  initialCommands?: string[];
  readOnly?: boolean;
}

export default function TerminalWrapper(props: TerminalWrapperProps) {
  return <Terminal {...props} />;
}
