import Home from "../components/home";
import Parser from "rss-parser";

const projects = [
  {
    name: "Bliss & Wisdom Alumni",
    description: "A global map of my high school alumni",
    link: "https://blisswisdomalumni.com",
    year: "2023",
  },
  {
    name: "SpeakFlowAI",
    description: "AI IElTS speaking assistant",
    status: "in progress",
  },
  {
    name: "Feedbase",
    description: "customer feedback widget on your website",
    link: "https://feedbase.co",
    year: "2023",
    status: "live",
  },
  {
    name: "Nomad Taiwan",
    description: "a taiwanese digital nomad toolkit/platform/community",
    link: "https://nomadtaiwan.com",
    year: "2023",
    status: "live",
  },
  {
    name: "ImgInsight",
    description: "a photo captioning tool powered by AI",
    link: "https://imginsight.com",
    year: "2023",
    status: "live",
  },
];

const socialLinks = [
  {
    name: "Twitter",
    link: "https://twitter.com/__evanyang__/",
    description: "keep up with my journey",
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/evanyang-dev/",
    description: "barely use it :)",
  },
];

const photography = [
  {
    name: "Unsplash",
    link: "https://unsplash.com/__evanyang__/",
    description: "open source my photography work xD",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/__evanyang__/",
    description: "infrequent updates",
  },
];

const writing = [
  {
    name: "Newsletter",
    link: "https://evanyang.substack.com/",
    description: "coming soon...",
  },
];

const other = [
  {
    name: "Product Hunt",
    link: "https://www.producthunt.com/@__evanyang__/",
    description: "the home 🏡 of my products",
  },
  {
    name: "Indie Hackers",
    link: "https://www.indiehackers.com/evanyang/",
    description: "just a link :)",
  },
];

const sections = [
  { title: "Projects", items: projects },
  { title: "Get in touch", items: socialLinks },
  { title: "Photography", items: photography },
  { title: "Writing", items: writing },
  { title: "Other", items: other },
];

export default async function HomePage() {
  const parser = new Parser();
  const imginsight = await parser.parseURL("https://imginsight.com/blog/feed");
  const latest = [
    ...imginsight.items.map((item) => ({
      ...item,
      source: "ImgInsight Blog",
      color: "bg-stone-400 dark:bg-stone-700",
    })),
  ];
  return <Home sections={sections} latest={latest} />;
}
