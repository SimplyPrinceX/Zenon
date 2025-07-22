import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// If ClassValue is used elsewhere in this file, define it here
export type ClassValue = string | number | null | boolean | undefined | Record<string, boolean>;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
} 