import type { Metadata } from "next";
import { allBlogs } from "contentlayer/generated";
import Blog from "components/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  return <Blog allBlogs={allBlogs} />;
}