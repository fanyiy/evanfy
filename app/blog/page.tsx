import type { Metadata } from "next";
import { allBlogs } from "contentlayer/generated";
import Blog from "components/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  // keep posts with status "published"
  const posts = allBlogs.filter((post) => post.status === "published");
  return <Blog allBlogs={posts} />;
}