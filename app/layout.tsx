import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { JetBrains_Mono, Mulish, Schibsted_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const SiteFooter = dynamic(() => import("@/components/site-footer"), {
  ssr: false,
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#151518" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = cn(
    schibstedGrotesk.variable,
    mulish.variable,
    jetbrainsMono.variable,
  );

  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontVariables,
        )}
      >
        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <SiteHeader />
            <main className="relative flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
