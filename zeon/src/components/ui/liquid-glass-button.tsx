import React from "react";

export interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function LiquidButton({ children, className = "", ...props }: LiquidButtonProps) {
  return (
    <button className={`px-6 py-2 rounded-lg bg-purple-500 text-white font-bold shadow-lg ${className}`} {...props}>
      {children}
    </button>
  );
} 