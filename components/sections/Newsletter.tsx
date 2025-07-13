"use client";
import * as React from "react";
import { Section } from "@/components/common/section-wrapper";
import { Input } from "@/components/common/input";

export function Newsletter({ newsletter }: { newsletter: any }) {
  const emailInput = newsletter.submissions.schema.find((field: any) => field.type === "email");

  return (
    <Section
      className="bg-[--surface-secondary] !py-10 dark:bg-gray-900"
      container="full"
    >
      <div className="container mx-auto flex flex-col gap-4 px-6 lg:flex-row lg:justify-between">
        <div className="flex flex-1 flex-col items-start gap-1">
          <h5 className="text-xl font-medium lg:text-2xl">{newsletter.title}</h5>
          <p className="text text-[--text-tertiary] dark:text-[--dark-text-tertiary] lg:text-lg">
            {newsletter.description}
          </p>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <Input {...emailInput} />
        </form>
      </div>
    </Section>
  );
} 