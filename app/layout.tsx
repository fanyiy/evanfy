import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Chivo } from "next/font/google";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evan Yang",
  description:
    "I'm an indie hacker carving out my way to freedom. I work on my projects, document my journey on Twitter, and write about my learnings on my newsletter.",
  keywords: [
    "Evan Yang",
    "personal website",
    "portfolio",
    "web development",
    "indie hacker",
    "solopreneur",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${chivo.className} dark:bg-neutral-900 bg-neutral-100`}
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
