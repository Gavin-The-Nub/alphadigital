import { Section } from "@/components/layout/SectionWrapper";
import { Heading } from "@/components/common/Heading";
import { Slider } from "./Testimonials/slider";

export function Testimonials({ heading, quotes }: any) {
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