import { ButtonLink } from "@/components/common/button";
import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/common/section-wrapper";

export default function NotFound() {
  return (
    <Section className="flex h-[calc(100vh-var(--header-height))] flex-col justify-center">
      <Heading subtitle="The page you're trying to access does not exist." tag="404">
        <h2>Page not found</h2>
      </Heading>
      <ButtonLink href="/" intent="primary">
        Go back to Homepage
      </ButtonLink>
    </Section>
  );
}
