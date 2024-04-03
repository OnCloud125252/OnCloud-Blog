import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url)
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <body
        className={cn("bg-background font-sans antialiased", inter.variable)}
      >
        <Providers>
          <div className="relative h-screen w-full grid grid-cols-[100%] grid-rows-[auto_1fr_auto] [grid-template-areas:'header''main''footer'] bg-background">
            <SiteHeader />
            <main className="[grid-area:main] relative">
              <div className="absolute top-0 bottom-0 w-full overflow-auto">
                {children}
              </div>
            </main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
