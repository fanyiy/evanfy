import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "components/mdx";
import { allBlogs } from "contentlayer/generated";
import { getTweets } from "lib/twitter";
import PostTitle from "components/post-title";
import { ArrowUpRight } from "lucide-react";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = image
    ? `https://evanyang.dev${image}`
    : `https://evanyang.dev/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://evanyang.dev/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  //   const [tweets] = await Promise.all([getTweets(post.tweetIds)]);

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      ></script>
      <h1 className="font-bold text-2xl sm:text-3xl">
        <PostTitle title={post.title} />
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.publishedAt)}
        </p>
      </div>
      <Mdx code={post.body.code} />
      <ul className="antialiased flex flex-col mt-8 gap-2 text-neutral-600 dark:text-neutral-300">
        <a
          href="https://twitter.com/__evanyang__"
          target="_blank"
          className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
        >
          <ArrowUpRight className="w-5 h-5 mr-2" />
          Follow me
        </a>
        <a
          href="https://evanyang.substack.com/"
          target="_blank"
          className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
        >
          <ArrowUpRight className="w-5 h-5 mr-2" />
          Get email updates
        </a>
      </ul>
    </section>
  );
}
