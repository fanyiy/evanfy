import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Evan Yang",
    description: "Evan Yang's personal website.",
    keywords: ["personal website", "portfolio", "Evan Yang", "web development", "projects", "creative work"],
    image: "👋",
    robots: "follow, index",
    twitter: "@__evanyang__",
  };


  return (
    <Html lang="en" className="dark:bg-neutral-900 bg-neutral-100">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords.join(", ")} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitter} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
