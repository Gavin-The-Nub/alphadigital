import Image from "next/image";
import Link, { type LinkProps } from "next/link";

export function FormLayout({
  children,
  title,
  subtitle,
  logoLite,
}: {
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
  logoLite: { url: string; width?: number; height?: number };
}) {

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-xl border border-[--surface-secondary] bg-[--surface-primary] p-5 shadow-md dark:border-[--dark-border] dark:bg-[--dark-surface-secondary] dark:shadow-none">
      <header className="flex flex-col gap-3">
        <Image
          priority
          alt="Logo"
          className="size-8 self-start"
          height={logoLite.height}
          src={logoLite.url}
          width={logoLite.width}
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-medium">{title}</h1>
          <div className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary]">
            {subtitle}
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

// If you want to keep a wrapper, just render children as-is:
export function RichTextFormWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function CustomAnchor({
  children,
  ...props
}: React.AllHTMLAttributes<HTMLAnchorElement> & LinkProps) {
  return (
    <Link className="text-[--accent-500] hover:underline" {...props}>
      {children}
    </Link>
  );
}
