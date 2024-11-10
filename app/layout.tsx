import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "components/navbar";
import { Noto_Sans } from "next/font/google";
import { Providers } from "components/providers";
import Script from "next/script";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
// });

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// const chivo = Chivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://evanfy.com"),
  title: {
    default: "Evan Yang",
    template: "%s | Evan Yang",
  },
  description:
    "Evan Yang | I'm an indie hacker carving out my way to freedom. I work on my projects, document my journey on X (formerly Twitter), and write about my learnings on my blog.",
  keywords: [
    "Evan Yang",
    "personal website",
    "portfolio",
    "web development",
    "indie hacker",
    "solopreneur",
  ],
  openGraph: {
    title: "Evan Yang",
    description:
      "Evan Yang | I'm an indie hacker carving out my way to freedom. I work on my projects, document my journey on X (formerly Twitter), and write about my learnings on my blog.",
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
    <html lang="en">
      <body
        className={`${noto_sans.className} max-w-2xl py-24 flex flex-col md:flex-row mx-4 lg:mx-auto dark:bg-neutral-900 dark:text-white bg-neutral-50`}
        suppressHydrationWarning={true}
      >
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {/* <Navbar /> */}
          <Providers attribute="class" defaultTheme="system" enableSystem>
            {children}
          </Providers>
        </main>
        <Analytics />
        <Script
          defer
          src="https://umami.evanfy.com/script.js"
          data-website-id="8b984886-545d-43d6-b9a5-03f9a1f070b2"
        />
        <Script
          defer
          data-domain="evanfy.com"
          src="https://plausible.evanfy.com/js/script.js"
        />
      </body>
    </html>
  );
}
