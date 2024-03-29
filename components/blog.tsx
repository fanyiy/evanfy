"use client";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

export default function Blog({ allBlogs }) {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-8"
      >
        Blog
      </motion.h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div className="flex flex-col mb-5" key={post.slug}>
            <Link
              className="text-neutral-900 dark:text-neutral-100"
              href={`/blog/${post.slug}`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Balancer>{post.title}</Balancer>
              </motion.div>
            </Link>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-sm text-neutral-500 dark:text-neutral-500">
                {new Date(post.publishedAt).toLocaleString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </motion.div>
          </div>
        ))}
    </section>
  );
}
