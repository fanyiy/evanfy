import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Chivo } from "next/font/google";
import Navbar from "@/components/sidebar";

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
        className={`${chivo.className} antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto dark:bg-neutral-900 bg-neutral-50`}
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
