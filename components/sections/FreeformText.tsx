import { Section } from "@/components/layout/SectionWrapper";
import { richTextClasses } from "@/components/rich-text";

export function FreeformText(freeformText: any) {
  return (
    <Section>
      <div
        className={richTextClasses}
        dangerouslySetInnerHTML={{ __html: freeformText.body.json.content }}
      />
    </Section>
  );
} 