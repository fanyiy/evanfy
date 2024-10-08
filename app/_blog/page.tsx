import type { Metadata } from "next";
import { allBlogs } from "contentlayer/generated";
import Blog from "components/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "My stories, thoughts, and ideas.",
};

export default function BlogPage() {
  const posts = allBlogs.filter((post) => post.status === "published");
  return <Blog allBlogs={posts} />;
}