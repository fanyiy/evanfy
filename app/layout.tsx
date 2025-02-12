import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Noto_Sans } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

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
        className={`${noto_sans.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
        <Script
          defer
          data-domain="evanfy.com"
          src="https://plausible.evanfy.com/js/script.js"
        />
        <Script
          id="ms_clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", 'q8jgqumg2j');`,
          }}
        />

      </body>
    </html>
  );
}
