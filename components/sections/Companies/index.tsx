import clsx from "clsx";
import { Section } from "@/components/layout/SectionWrapper";
import s from "./companies.module.css";

export function Companies(props: any) {
  return (
    <Section container="full">
      <h2 className="text-center tracking-tight text-[--dark-text-tertiary] opacity-50">
        {props.subtitle}
      </h2>
      <div className="no-scrollbar flex max-w-full justify-center overflow-auto">
        <div className="bg-linear-to-r from-surface-primary dark:from-dark-surface-primary pointer-events-none absolute left-0 top-0 h-full w-[30vw] bg-transparent xl:hidden" />
        <div className="bg-linear-to-l from-surface-primary dark:from-dark-surface-primary pointer-events-none absolute right-0 top-0 h-full w-[30vw] bg-transparent xl:hidden" />
        <div
          className={clsx("flex shrink-0 items-center gap-4 px-6 lg:gap-6 lg:px-12", s.scrollbar)}
        >
          {props.companies.map((company: any) => (
            <figure
              key={company.image?.url ?? company._title}
              className="flex h-16 items-center px-2 py-3 lg:p-4"
            >
              <img
                alt={company._title}
                className="w-24 lg:w-32"
                height={20}
                src={company.image?.url}
                width={32}
              />
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
} 