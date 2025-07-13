import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/layout/SectionWrapper";
import { TrackedButtonLink } from "@/components/tracked-button";

export function FeaturesGrid({
  heading,
  featuresGridList,
  actions,
  eventsKey,
}: any) {
  return (
    <Section>
      <Heading {...heading}>
        <h4>{heading.title}</h4>
      </Heading>
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {featuresGridList.items.map(({ _id, _title, description, icon }: any) => (
          <article
            key={_id}
            className="flex flex-col gap-4 rounded-lg border border-[--border] p-4 [box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset] dark:border-[--dark-border] dark:[box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset]"
          >
            <figure className="flex size-9 items-center justify-center rounded-full border border-[--border] bg-[--surface-secondary] p-2 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]">
              <img
                alt={icon.alt ?? _title}
                className="dark:invert"
                height={18}
                src={icon.url}
                width={18}
              />
            </figure>
            <div className="flex flex-col items-start gap-1">
              <h5 className="text-lg font-medium">{_title}</h5>
              <p className="text-pretty text-[--text-secondary] dark:text-[--dark-text-secondary]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 md:order-3">
        {actions?.map((action: any) => (
          <TrackedButtonLink
            key={action._id}
            analyticsKey={eventsKey}
            href={action.href}
            intent={action.type}
            name="cta_click"
            size="lg"
          >
            {action.label}
          </TrackedButtonLink>
        ))}
      </div>
    </Section>
  );
} 