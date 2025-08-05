import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/layout/SectionWrapper";
import { TestimonialsGridClient } from "./testimonials-list";

export function TestimonialsGrid({ heading, quotes }: any) {
  return (
    <Section className="testimonials-grid-section">
      <Heading {...heading}>
        <h4>{heading.title}</h4>
      </Heading>
      <TestimonialsGridClient quotes={quotes} />
    </Section>
  );
} 