import { CheckCircledIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/layout/SectionWrapper";
import { ButtonLink } from "@/components/common/button";
import { SimpleTooltip } from "@/components/common/tooltip";
import { MobilePricingComparison } from "./mobile-pricing-comparison";

export function PricingTable(props: any) {
  const { heading, categories } = props;
  const plans = extractPlans(categories);

  return (
    <Section className="xl:max-w-screen-xl" id="pricing">
      <Heading {...heading}>
        <h4>{heading.title}</h4>
      </Heading>
      {/* Desktop pricing */}
      <table className="hidden w-full table-fixed lg:table">
        <thead className="sticky top-[--header-height] bg-[--surface-primary] dark:bg-[--dark-surface-primary]">
          <tr>
            <PlanHeader plan={null} />
            {plans.map((plan: any) => (
              <PlanHeader key={plan._id} plan={plan} />
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.items.map((category: any, i: number) => (
            <React.Fragment key={category._id}>
              <CategoryHeader category={category} className={clsx(i === 0 && "py-4")} />
              {category.features.items.map((feature: any) => (
                <tr
                  key={feature._id}
                  className="border-b border-[--border-70] dark:border-[--dark-border-70]"
                >
                  <FeatureTitle {...feature} />
                  {feature.values.items.map((value: any) => (
                    <FeatureValue key={value._id} value={value} />
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <MobilePricingComparison {...{ ...props, plans }} />
    </Section>
  );
}

const $tableCell = cva("min-h-16 px-3 text-base flex items-center gap-1.5 font-normal", {
  variants: {
    align: {
      start: "text-start justify-start",
      center: "text-center justify-center",
      end: "text-end justify-end",
    },
    type: {
      default: "text-[--text-secondary] dark:text-[--dark-text-secondary]",
      primary: "text-primary dark:text-dark-primary",
    },
  },
  defaultVariants: {
    align: "center",
    type: "default",
  },
});

interface TableCellProps<T extends React.ElementType> {
  as?: T;
  className?: string;
  children: React.ReactNode;
}

function TableCell<T extends React.ElementType = "td">({
  as,
  className,
  children,
  align,
  type,
  ...props
}: TableCellProps<T> &
  React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof $tableCell>): React.JSX.Element {
  const Component = as ?? "div";

  return (
    <Component className={$tableCell({ class: className, type, align })} {...props}>
      {children}
    </Component>
  );
}

function FeatureTitle(feature: any) {
  return (
    <th className="w-auto">
      <TableCell align="start" as="div" type="primary">
        <p>{feature._title}</p>
        {feature.tooltip ? (
          <SimpleTooltip
            className="max-w-[320px]!"
            content={feature.tooltip}
            side="right"
            sideOffset={4}
          >
            <QuestionMarkCircledIcon className="size-4 text-[--text-tertiary] dark:text-[--dark-text-tertiary]" />
          </SimpleTooltip>
        ) : null}
      </TableCell>
    </th>
  );
}

function CategoryHeader({
  category,
  className,
}: {
  category: any;
  className?: string;
}) {
  return (
    <tr>
      <th className="w-auto">
        <TableCell
          align="start"
          as="div"
          className={clsx("px-3 pb-2 pt-10", className)}
          type="primary"
        >
          <p className="text-lg font-medium">{category._title}</p>
        </TableCell>
      </th>
      {Array.from(category.features.items[0]?.values.items ?? []).map((_: any) => (
        <th key={`${category._title}${_._id}`} className="w-[1fr]" />
      ))}
    </tr>
  );
}

function PlanHeader({ plan }: { plan: any | null }) {
  return plan ? (
    <th className="w-[1fr] pb-2 pt-6">
      <span className="flex flex-col items-center gap-3 font-normal">
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-base text-[--text-secondary] dark:text-[--dark-text-secondary] md:text-base">
            {plan._title}
          </p>
          <p className="text-lg font-medium">{plan.price}</p>
        </div>
        <ButtonLink href="#" intent={plan.isMostPopular ? "primary" : "secondary"}>
          Get started
        </ButtonLink>
      </span>
    </th>
  ) : (
    <th className="w-auto" />
  );
}

function FeatureValue({ value }: { value?: any }) {
  return (
    <td className="w-[1fr]">
      <TableCell>
        {value ? (
          value.value?.__typename === "BooleanComponent" ? (
            value.value.boolean ? (
              <span className="flex items-center justify-center rounded-full bg-[--success-10] bg-opacity-10 p-1.5">
                <CheckCircledIcon className="size-5 text-[--success]" />
              </span>
            ) : (
              <span className="text-xl text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
                &mdash;
              </span>
            )
          ) : value.value?.__typename === "CustomTextComponent" ? (
            <p>{value.value.text}</p>
          ) : null
        ) : null}
      </TableCell>
    </td>
  );
}

const extractPlans = (categories: any) => {
  const plans = new Map<string, any>();

  categories.items.forEach((category: any) => {
    category.features.items.forEach((feature: any) => {
      feature.values.items.forEach((value: any) => {
        plans.set(value.plan._title, value.plan);
      });
    });
  });

  return Array.from(plans.values());
}; 