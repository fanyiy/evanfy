import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Chivo } from "next/font/google";
import Navbar from "components/navbar";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://evanyang.dev'),
  title: "Evan Yang",
  description:
    "I'm an indie hacker carving out my way to freedom. I work on my projects, document my journey on Twitter, and write about my learnings on my blog.",
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
      "I'm an indie hacker carving out my way to freedom. I work on my projects, document my journey on Twitter, and write about my learnings on my blog.",
    url: "https://evanyang.dev",
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
    creator: "@__evanyang__",

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
        className={`${chivo.className} antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto dark:bg-neutral-900 dark:text-white bg-neutral-50`}
        suppressHydrationWarning={true}
      >
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
