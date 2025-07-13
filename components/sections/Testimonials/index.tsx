import { Section } from "@/components/layout/SectionWrapper";
import { Heading } from "@/components/common/Heading";
import { Slider } from "./slider";

export type Testimonial = {
  _id: string;
  quote: string;
  author: {
    _title: string;
    image: { url: string; alt?: string };
    company: { _title: string; image?: { url: string; alt?: string } };
  };
};

export type TestimonialsProps = {
  heading: { title: string; align?: "center" | "none" | "left" | "right" | null };
  quotes: Testimonial[];
};

export function Testimonials({ heading, quotes }: TestimonialsProps) {
  return (
    <div className="relative overflow-clip">
      <Section>
        <Slider quotes={quotes}>
          {heading.align === "none" ? (
            <div />
          ) : (
            <Heading className="self-stretch" {...heading}>
              <h4>{heading.title}</h4>
            </Heading>
          )}
        </Slider>
      </Section>
    </div>
  );
}
