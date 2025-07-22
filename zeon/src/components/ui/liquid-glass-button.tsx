import React from "react";

export function LiquidButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`px-6 py-2 rounded-lg bg-purple-500 text-white font-bold shadow-lg ${className}`}>
      {children}
    </button>
  );
} 