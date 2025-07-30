"use client";
import { usePathname } from "next/navigation";
import { Header } from "./header";
import { Footer } from "./footer";
import { Newsletter } from "./sections/Newsletter";

interface LayoutWrapperProps {
  children: React.ReactNode;
  header: any;
  footer: any;
  settings: any;
}

export function LayoutWrapper({ children, header, footer, settings }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isAdminPage = pathname === "/admin";

  return (
    <>
      {/* Header - Hide on login and admin pages */}
      {!isLoginPage && !isAdminPage && <Header logo={settings.logo} header={header} />}
      <main className={isLoginPage || isAdminPage ? "min-h-screen" : "min-h-[calc(100svh-var(--header-height))]"}>
        {children}
      </main>
      {/* Newsletter and Footer - Hide on login and admin pages */}
      {!isLoginPage && !isAdminPage && (
        <>
          <Newsletter newsletter={footer.newsletter}/>
          <Footer footer={footer} logo={settings.logo} />
        </>
      )}
    </>
  );
} 