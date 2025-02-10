import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
// import Navbar from "components/navbar";
import { Noto_Sans } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "components/theme-provider";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evanfy.com"),
  title: {
    default: "Evan Yang",
    template: "%s | Evan Yang",
  },
  description:
    "Evan Yang | I'm an solopreneur building startups while traveling the world.",
  keywords: [
    "Evan Yang",
    "personal website",
    "portfolio",
    "web development",
    "indie hacker",
    "solopreneur",
    "digital nomad",
  ],
  openGraph: {
    title: "Evan Yang",
    description:
      "Evan Yang | I'm an solopreneur building startups while traveling the world.",
    url: "https://evanfy.com",
    siteName: "Evan Yang",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan Yang",
    creator: "@TheEvanYang",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${noto_sans.className} max-w-xl px-6 sm:px-0 py-12 sm:py-24 mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <main className="min-h-screen">
            {/* <Navbar /> */}
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
        <Script
          defer
          data-domain="evanfy.com"
          src="https://plausible.evanfy.com/js/script.js"
        />
      </body>
    </html>
  );
}
