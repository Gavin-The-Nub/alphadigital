import React from "react";

export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-block rounded-full bg-[--surface-tertiary] px-4 py-1 mt-[-70px] text-lg font-medium text-[--text-secondary] dark:bg-[--dark-surface-tertiary] dark:text-[--dark-text-secondary]">
      {children}
    </span>
  );
} 