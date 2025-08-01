import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/layout/SectionWrapper";
import { TrackedButtonLink } from "@/components/tracked-button";
import { SectionTag} from "../common/SectionTag";

export function SideFeatures({
  featuresSideBySideList,
  heading,
  actions,
  eventsKey,tag
}: any) {
  return (
    <Section
      className="relative lg:container lg:mx-auto lg:!flex-row lg:gap-0 lg:p-28"
      container="full"
    > 
      <div className="container relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20 ">
        <div className="sticky bottom-0 top-[calc(var(--header-height)+40px)] flex flex-col gap-10">
        
          <Heading className="items-start" {...heading}>
            
            <h4>{heading.title}</h4>
          </Heading>
          <div className="flex items-center justify-center gap-3 md:order-3">
            {actions?.map((action: any) => (
              <TrackedButtonLink
                key={action._id}
                analyticsKey={eventsKey}
                href={action.href}
                intent={action.type}
                name="main_cta_click"
                size="lg"
              >
                {action.label}
              </TrackedButtonLink>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
        <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
          {featuresSideBySideList.items.map(({ _title, icon, subtitle }: any) => (
            <article
              key={_title}
              className="flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-[--border] bg-[--surface-secondary] p-4 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary] lg:w-full lg:flex-row lg:p-5"
            >
              <figure className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[--surface-tertiary] p-3 dark:bg-[--dark-surface-tertiary]">
                <img
                  alt={icon.url ?? _title}
                  className="dark:invert"
                  height={24}
                  src={icon.url}
                  width={24}
                />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium">{_title}</h5>
                <p className="text-pretty text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
                  {subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
} 