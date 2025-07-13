import { Section } from "@/components/layout/SectionWrapper";
import { FormLayout, RichTextFormWrapper } from "@/components/form-components";
import { Button } from "@/components/common/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { LabeledInput, LabeledTextarea, LabeledWrapper } from "@/components/labeled-input";
import { Select } from "@/components/select";

export function Form(props: any) {
  return (
    <Section>
      <FormLayout
        {...props}
        subtitle={
          props.subtitle ? (
            <RichTextFormWrapper>{props.subtitle.json.content}</RichTextFormWrapper>
          ) : null
        }
        title={props.title}
      >
        <form className="flex flex-col gap-3">
          {props.submissions.schema.map((field: any) => {
            if (field.type === "textarea") {
              return (
                <LabeledTextarea key={field.id} rows={8} className="max-h-64 min-h-16" {...field} />
              );
            } else if (field.type === "select" || field.type === "radio") {
              return (
                <LabeledWrapper key={field.id} label={field.label} id={field.id}>
                  <Select id={field.id} name={field.name} required={field.required}>
                    {field.options.map((option: any) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </LabeledWrapper>
              );
            } else {
              return <LabeledInput key={field.id} {...field} />;
            }
          })}
          <div className="mt-3 flex items-center justify-between">
            <Button
              icon={props.cta.icon ?? <ArrowRightIcon className="size-5" />}
              iconSide="right"
              intent={props.cta.type}
              type="submit"
            >
              {props.cta.label}
            </Button>
          </div>
        </form>
      </FormLayout>
    </Section>
  );
} 