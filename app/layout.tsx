
import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import { Newsletter } from "@/components/sections/Newsletter";
import { PlaygroundSetupModal } from "@/components/playground-notification";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
});

export const dynamic = "force-static";
export const revalidate = 30;

// Static data for demo purposes
const staticData = {
  site: {
         settings: {
       theme: {
         accent: "indigo",
         grayScale: "gray",
       },
             logo: {
         dark: {
           url: "logo.png",
           alt: "Logo",
           width: 120,
           height: 40,
           aspectRatio: "3:1",
           blurDataURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbzwvdGV4dD4KPC9zdmc+",
         },
         light: {
           url: "logo1.png",
           alt: "Logo",
           width: 120,
           height: 40,
           aspectRatio: "3:1",
           blurDataURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbzwvdGV4dD4KPC9zdmc+",
         },
       },
      showUseTemplate: false,
    },
         header: {
       _id: "header-1",
       navbar: {
         items: [
           {
             _id: "nav-1",
             _title: "Home",
             href: "/",
             sublinks: {
               items: [],
             },
           },
           {
             _id: "nav-2",
             _title: "Features",
             href: "/features",
             sublinks: {
               items: [],
             },
           },
           {
             _id: "nav-3",
             _title: "Pricing",
             href: "/pricing",
             sublinks: {
               items: [],
             },
           },
         ],
       },
       rightCtas: {
         items: [
           {
             _id: "cta-1",
             label: "Get Started",
             href: "/features",
             type: "primary",
             icon: null,
           },
         ],
       },
     },
         footer: {
       _id: "footer-1",
       newsletter: {
         _id: "newsletter-1",
         title: "Stay updated",
         description: " Get notified when we release new resources and guides",
         submissions: {
           ingestKey: "demo-newsletter",
           schema: [
             {
               id: "email",
               name: "email",
               type: "email",
               label: "Email",
               placeholder: "Enter your email",
               required: true,
             },
           ],
         },
       },
       copyright: "© 2024 Marketing Website. All rights reserved.",
       navbar: {
         items: [
           {
             _title: "About",
             url: "/about",
           },
           {
             _title: "Contact",
             url: "/contact",
           },
         ],
       },
       socialLinks: [
         {
           _title: "Twitter",
           icon: {
             url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjI0NCAyLjI1aDYuMDc4bC0xMy4wODMgMTUuMjZWMTkuNUg2LjQ3N2w3LjM3NC04LjUxMS02LjM3NC03LjQ2N2g1LjQyN2w0LjQ0MiA1LjQ0NCAxMC4wNDQtMTEuOTk5aDQuOTY5eiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=",
           },
           url: "https://twitter.com",
         },
         {
           _title: "GitHub",
           icon: {
             url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMCAxOGMtNC40MTEgMC04LTMuNTg5LTgtOHMzLjU4OS04IDgtOCA4IDMuNTg5IDggOC0zLjU4OSA4LTggOHoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8cGF0aCBkPSJNMTIgNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnptMCAxMGMtMi4yMDkgMC00LTEuNzkxLTQtNHMxLjc5MS00IDQtNCA0IDEuNzkxIDQgNC0xLjc5MSA0LTQgNHoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4K",
           },
           url: "https://github.com",
         },
       ],
     },
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Use static data instead of Basehub query
  const { site: { footer, settings, header } } = staticData;

  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="bg-[--surface-primary] text-[--text-primary] dark:bg-[--dark-surface-primary] dark:text-[--dark-text-primary] font-sans"
    >
      <body className={`min-h-svh max-w-[100vw] ${geistMono.variable} ${geist.variable}`}>
        <Providers>
          {/* Header */}
          <Header logo={settings.logo} header={header} />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          <Newsletter newsletter={footer.newsletter}/>
          {/* Footer */}
          <Footer footer={footer} logo={settings.logo} />
        </Providers>
      </body>
    </html>
  );
}
export const metadata = {
  generator: "v0.dev",
};

