import clsx from "clsx";
import { Section } from "@/components/layout/SectionWrapper";
import s from "./companies.module.css";

export function Companies(props: any) {
  return (
    <Section container="full" className="companies-section">
      <h2 className="text-center tracking-tight text-[--dark-text-tertiary] opacity-50 mb-8">
        {props.subtitle}
      </h2>
      <div className="w-full">
        {props.companies.map((company: any) => (
          <div key={company.image?.url ?? company._title} className="w-full">
            {/* Mobile Image */}
            <img
              alt={company._title}
              className="w-full mt-[-50px] h-auto object-contain md:hidden"
              src="/c2.png"
            />
            {/* Desktop Image */}
            <img
              alt={company._title}
              className="w-full h-auto object-contain hidden md:block"
              src={company.image?.url}
            />
          </div>
        ))}
      </div>
    </Section>
  );
} 