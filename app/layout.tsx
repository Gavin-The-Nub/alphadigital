
import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import { LayoutWrapper } from "@/components/layout-wrapper";

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
             _title: "Blog",
             href: "/blog",
             sublinks: {
               items: [],
             },
           },
           {
             _id: "nav-3",
             _title: "Case Studies",
             href: "/portfolio",
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
             href: "/contact",
             type: "primary",
             icon: null,
           },
           {
             _id: "cta-2",
             label: "Login",
             href: "/login",
             type: "secondary",
             icon: null,
           },
         ],
       },
     },
         footer: {
       _id: "footer-1",
       newsletter: {
         _id: "newsletter-1",
         title: "Get Marketing Insights",
         description: "Stay updated with the latest digital marketing trends, tips, and case studies",
         submissions: {
           ingestKey: "demo-newsletter",
           schema: [
             {
               id: "email",
               name: "email",
               type: "email",
               label: "Email",
               placeholder: "Enter your email address",
               required: true,
             },
           ],
         },
       },
       copyright: "© 2024 Alpha Digital Solutions. All rights reserved.",
       navbar: {
         items: [
           {
             _title: "Services",
             url: "/#services",
           },
           {
             _title: "Case Studies",
             url: "/portfolio",
           },
           {
             _title: "Blog",
             url: "/blog",
           },
           {
             _title: "Contact",
             url: "/contact",
           },
         ],
       },
       socialLinks: [
         {
           _title: "Facebook",
           icon: {
             url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0IDEyLjA3M0MyNCA1LjUwNSAxOC42MjcgMCAxMiAwUzAgNS41MDUgMCAxMi4wNzNDMCAxOC4wNjIgNC4zOTIgMjMuMDk0IDEwLjEyNSAyNFYxNS41NjNoLTMuMDYzVjEyLjA3M2gzLjA2M1Y5LjQxN2MwLTMuMDM0IDEuNzkxLTQuNzA5IDQuNTY5LTQuNzA5IDEuMzI0IDAgMi42ODYuMDk4IDIuNjg2LjA5OHYzLjM2NmgtMS41MTNjLTEuNDkgMC0xLjk1Ni45MjYtMS45NTYgMS44NzZ2Mi41NTVoMy4zNzVsLS41MzkgMy40NzNoLTIuODM2VjI0YzUuNzMzLS45MDYgMTAuMTI1LTUuOTM4IDEwLjEyNS0xMS45Mjd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==",
           },
           url: "https://facebook.com",
         },
         {
           _title: "Instagram",
           icon: {
             url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJjMi43MTcgMCAzLjA1Ni4wMTIgNC4xMjIuMDcgMy42NTYuMDQ3IDUuNjU2IDIuMjIyIDYuNzA1IDUuODU1LjA2MS4yNzYuMDg3LjU2Ny4wODcuODU1IDAgMi4xNDgtLjAxNiAzLjg0Ny0uMDc2IDUuMTM1LS4wNjEgMS4yNzgtLjI5NyAyLjQ5Ny0xLjA0OSAzLjU3Ny0uNzUyIDEuMDgtMS44NzYgMS45MDQtMy4yNzMgMi40NzctMS40OTcuNjE3LTMuMDk1LjYxNy00LjY5Mi42MTctMS41OTcgMC0zLjE5NSAwLTQuNjkyLS42MTctMS4zOTctLjU3My0yLjUyMS0xLjM5Ny0zLjI3My0yLjQ3Ny0uNzUyLTEuMDgtLjk4OC0yLjI5OS0xLjA0OS0zLjU3Ny0uMDYtMS4yODgtLjA3Ni0yLjk4Ny0uMDc2LTUuMTM1IDAtLjI4OC4wMjYtLjU3OS4wODctLjg1NSAxLjA0OS0zLjYzMyAzLjA0OS01LjgwOCA2LjcwNS01Ljg1NSAxLjA2Ni0uMDU4IDEuNDA1LS4wNyA0LjEyMi0uMDd6bTAtMS4wNzNjLTIuNzE3IDAtMy4wNTYuMDEyLTQuMTIyLjA3LTMuNjU2LjA0Ny01LjY1NiAyLjIyMi02LjcwNSA1Ljg1NS0uMDYxLjI3Ni0uMDg3LjU2Ny0uMDg3Ljg1NSAwIDIuMTQ4LS4wMTYgMy44NDctLjA3NiA1LjEzNS0uMDYxIDEuMjc4LS4yOTcgMi40OTctMS4wNDkgMy41NzctLjc1MiAxLjA4LTEuODc2IDEuOTA0LTMuMjczIDIuNDc3LTEuNDk3LjYxNy0zLjA5NS42MTctNC42OTIuNjE3LTEuNTk3IDAtMy4xOTUgMC00LjY5Mi0uNjE3LTEuMzk3LS41NzMtMi41MjEtMS4zOTctMy4yNzMtMi40NzctLjc1Mi0xLjA4LS45ODgtMi4yOTktMS4wNDktMy41NzctLjA2LTEuMjg4LS4wNzYtMi45ODctLjA3Ni01LjEzNSAwLS4yODguMDI2LS41NzkuMDg3LS44NTUgMS4wNDktMy42MzMgMy4wNDktNS44MDggNi43MDUtNS44NTUgMS4wNjYtLjA1OCAxLjQwNS0uMDcgNC4xMjItLjA3eiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxwYXRoIGQ9Ik0xMiAxNmE0IDQgMCAxIDAgMC04IDQgNCAwIDAgMCAwIDh6bTAtNi4xNDdhMi4xNDcgMi4xNDcgMCAxIDEgMCA0LjI5NCAyLjE0NyAyLjE0NyAwIDAgMSAwLTQuMjk0eiIgZmlsbD0iY3VycmVudENvbG9yIi8+CjxjaXJjbGUgY3g9IjE2LjUiIGN5PSI3LjUiIHI9IjEuNSIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=",
           },
           url: "https://instagram.com",
         },
         {
           _title: "TikTok",
           icon: {
             url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjU5OSA5LjQyYy0uNzM5IDAtMS40NzgtLjE0Ny0yLjE1Ny0uNDM5VjE1LjVjMCAyLjQ4NC0yLjAxNiA0LjUtNC41IDQuNXMtNC41LTIuMDE2LTQuNS00LjVTMTIuNDE2IDExIDE0LjkgMTFjLjM5NyAwIC43ODQuMDc4IDEuMTU2LjIyMlY5LjQyYy0uMzcyLS4xNDQtLjc1OS0uMjIyLTEuMTU2LS4yMjJDNi4wNzUgOS4yIDIgMTMuMjc1IDIgMTguMlMyLjA3NSAyNy4yIDcuMiAyNy4yYzUuMTI1IDAgOS4yLTQuMDc1IDkuMi05LjJ2LTguNTh6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+Cg==",
           },
           url: "https://tiktok.com",
         },
         {
           _title: "LinkedIn",
           icon: {
             url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjQ0NyAyMC40NTJoLTMuNTU0di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0yLjEzNiAyLjkzOXY1LjY2N0g5LjM1MVY5aDMuNDE0djEuNTYxaC4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYwMSAwIDQuMjY3IDIuMzcgNC4yNjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzeC0yLjA2My0uMDI2Yy0xLjE0NCAwLTEuODkyLjc5MS0xLjg5MiAxLjc5MSAwIDEuMDA0LjcyNCAxLjc5MSAxLjg1MiAxLjc5MWgyLjA2M2MuMTE0IDAgLjIyNi0uMDA5LjMzNy0uMDI2VjcuNDMzeiBtLTEuNzgyIDkuNzE5SDMuNTU1VjloMy4wNjR2OC4xNTJoLTMuMDY0eiBNMjIuMjI1IDBIMi43NzFDLjc5MiAwIDAgLjc3NCAwIDEuNzI5djIwLjU0MkMwIDIzLjIyNy43OTIgMjQgMi43NzEgMjRoMTkuNDUxQzIzLjIgMjQgMjQgMjMuMjI3IDI0IDIyLjI3MVYxLjcyOUMyNCAuNzc0IDIzLjIgMCAyMi4yMjIgMGguMDAzeiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo=",
           },
           url: "https://linkedin.com",
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
          <LayoutWrapper header={header} footer={footer} settings={settings}>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
export const metadata = {
  generator: "v0.dev",
};

