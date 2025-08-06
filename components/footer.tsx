import { isExternalLink } from "@/lib/_utils/links";
import { ButtonLink } from "@/components/common/button";
import { DarkLightImageAutoscale } from "@/components/common/DarkLightImage";
import { Link } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";

export const Footer = ({
  footer,
  logo,
}: {
  footer: any;
  logo: any;
}) => {
  return (
    <footer className="border-t border-[--border] py-16 dark:border-[--dark-border]">
      <div className="container mx-auto grid grid-cols-2 grid-rows-[auto_auto_auto] place-items-start items-center gap-y-7 px-6 sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-2 sm:gap-x-3 sm:gap-y-16">
        <Link aria-label="Homepage" href="/">
          <DarkLightImageAutoscale priority {...logo} />
        </Link>
        <nav className="col-start-1 row-start-2 flex flex-col gap-x-2 gap-y-3 self-center sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex-row sm:items-center sm:place-self-center md:gap-x-4 lg:gap-x-8">
          {footer.navbar.items.map(({ _title, url }: any) => (
            <ButtonLink
              key={_title}
              unstyled
              className="px-2 font-light tracking-tight text-[--text-tertiary] hover:text-[--text-primary] dark:text-[--dark-text-secondary] dark:hover:text-[--dark-text-primary]"
              href={url ?? "#"}
              target={isExternalLink(url) ? "_blank" : "_self"}
            >
              {_title}
            </ButtonLink>
          ))}
        </nav>
        <div className="col-start-2 row-start-1 flex items-center gap-3 self-center justify-self-end sm:col-span-1 sm:col-start-3 sm:row-start-1">
          <p className="hidden text-[--text-tertiary] dark:text-[--dark-text-tertiary] sm:block">
            Appearance
          </p>
          <ThemeSwitcher />
        </div>

        <p className="col-span-2 text-pretty text-sm text-[--text-tertiary] dark:text-[--dark-text-tertiary] sm:col-span-1">
          {footer.copyright}
        </p>

        
      </div>
    </footer>
  );
};
