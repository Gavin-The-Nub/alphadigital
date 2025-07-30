import { ButtonLink } from "@/components/common/button";
import { DarkLightImageAutoscale } from "@/components/common/DarkLightImage";
import { DesktopMenu, MobileMenu } from "./navigation-menu";

export const Header = ({
  logo= "/logo.png",
  header,
}: {
  logo: any;
  header: any;
}) => {
  return (
    <header className="sticky left-0 top-0 z-[110] flex w-full flex-col border-b border-[--border] bg-[--surface-primary] dark:border-[--dark-border] dark:bg-[--dark-surface-primary] shadow-sm">
      <div className="flex h-[--header-height] bg-[--surface-primary] dark:bg-[--dark-surface-primary]">
        <div className="container mx-auto grid w-full grid-cols-[1fr_max-content_1fr] place-items-center content-center items-center px-6 *:first:justify-self-start">
          <ButtonLink unstyled className="flex items-center ring-offset-2" href="/">
            <DarkLightImageAutoscale {...logo} />
            <span className="hidden sm:inline ml-2">Alpha Digital Solutions</span>
          </ButtonLink>
          <DesktopMenu {...header} />
          <MobileMenu {...header} />
        </div>
      </div>
    </header>
  );
};
