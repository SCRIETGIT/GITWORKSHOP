import React from "react";

interface SlideProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Slide({ title, children, className = "" }: SlideProps) {
  return (
    <div className={`card bg-white border-slate-200 p-8 mb-8 shadow-lg shadow-slate-200/50 ${className}`}>
      <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b border-slate-100 pb-4">
        {title}
      </h2>
      <div className="text-lg text-slate-700 space-y-4 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
