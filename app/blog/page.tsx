import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  return (
    <section className="">
      <h1 className="text-2xl font-bold dark:text-neutral-300 text-neutral-700 mb-8">
        Blog
      </h1>
      {/* <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1> */}
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 text-gray-200"
            href={`/blog/${post.slug}`}
          >
            {/* <div className="w-full flex flex-col"> */}
            <p>{post.title}</p>
            {/* </div> */}
          </Link>
        ))}
    </section>
  );
}
