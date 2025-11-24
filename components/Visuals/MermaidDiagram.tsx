"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export default function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: "dark",
        securityLevel: "loose",
        themeVariables: {
          darkMode: true,
          background: "#0d1117",
          primaryColor: "#58a6ff",
          secondaryColor: "#161b22",
          tertiaryColor: "#161b22",
          primaryTextColor: "#c9d1d9",
          secondaryTextColor: "#8b949e",
          tertiaryTextColor: "#8b949e",
          lineColor: "#30363d",
          textColor: "#c9d1d9",
          mainBkg: "#0d1117",
          nodeBorder: "#30363d",
          clusterBkg: "#161b22",
          clusterBorder: "#30363d",
          defaultLinkColor: "#8b949e",
          fontFamily: "Inter, sans-serif",
        },
      });
      
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      const element = containerRef.current;
      
      // Clear previous content
      element.innerHTML = "";
      
      // Render new chart
      mermaid.render(id, chart).then(({ svg }) => {
        element.innerHTML = svg;
      });
    }
  }, [chart]);

  return (
    <div 
      ref={containerRef} 
      className={`flex justify-center p-6 bg-gh-bg-secondary rounded-lg border border-gh-border overflow-x-auto ${className}`}
    />
  );
}
