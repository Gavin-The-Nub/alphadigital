import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/layout/SectionWrapper";
import { DarkLightVideo } from "@/components/common/DarkLightVideo";

// Adjust the type as needed for your static data
export function BigFeature({ featuresBigImageList, heading, video }: any) {
  return (
    <Section container="default" className="big-feature-section">
      <DarkLightVideo
        height={600}
        width={1216}
        {...video}
        className="block rounded-xl border border-[--border] dark:border-[--dark-border] md:order-3 md:w-full"
        controls={false}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
      />
      <Heading {...heading}>
        <h4>{heading.title}</h4>
      </Heading>
      <div className="flex w-full flex-col items-start gap-4 md:order-2 md:grid md:grid-cols-3 md:gap-16">
        {featuresBigImageList.items.map(({ _title, description, icon }: any) => (
          <article key={_title} className="flex flex-col gap-4">
            <figure className="flex size-9 items-center justify-center rounded-full border border-[--border] bg-[--surface-secondary] p-2 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]">
              {/* Replace with a real image component if needed */}
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
              <p className="text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
} 