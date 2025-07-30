import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/layout/SectionWrapper";
import { SectionTag } from "@/components/common/SectionTag";

export function Faq(faq: any) {
  return (
    <Section>
      
      <Heading {...faq.heading}>
        <h4>{faq.heading.title}</h4>
      </Heading>
      <ul className="mx-auto flex w-full grid-cols-3 flex-col place-content-start items-start gap-8 self-stretch lg:grid lg:gap-14 lg:px-24">
        {faq.questions.items.map((question: any) => (
          <li key={question._title} className="flex flex-col gap-1.5">
            <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
              {question._title}
            </p>
            <p className="text-sm leading-relaxed tracking-tight text-[--text-tertiary] dark:text-[--dark-text-tertiary] sm:text-base">
              {question.answer}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
} 