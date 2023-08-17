"use client";
import { motion, Variants } from "framer-motion";
import moment from "moment";
import Image from "next/image";

const parent: Variants = {
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  offscreen: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const children: Variants = {
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  offscreen: {
    opacity: 0,
    x: 5,
  },
};

interface Homeprops {
  sections?: {
    title: string;
    items: {
      name: string;
      description: string;
      link: string;
      year?: string;
    }[];
  };
  latest?: {
    link: string;
    title: string;
    contentSnippet: string;
    isoDate: string;
    color: string;
    source: string;
  }[];
}

export default function Home({ sections, latest }: any) {
  return (
    <main className="max-w-xl px-6 mt-16 md:mt-20 lg:mt-32 mx-auto space-y-20">
      <section className="flex flex-col mx-auto space-y-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <Image
            src="/avatar.jpg"
            alt="Evan Yang"
            width={100}
            height={100}
            className="rounded-full mb-3"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-2xl font-bold dark:text-neutral-300 text-neutral-700 mb-4"
        >
          Hey I'm Evan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          className="dark:text-neutral-400 text-gray-500"
        >
          I'm a 20 yo AI student at{" "}
          <a href="https://vu.nl/en/" className="underline">
            VU Amsterdam
          </a>
          . You'll find me crafting projects, documenting my journey on{" "}
          <a
            href="https://twitter.com/__evanyang__/"
            className="underline"
          >
            Twitter
          </a>
          , and soon, sharing my story and thoughts through my blog.
        </motion.p>
      </section>
      <section className="flex flex-col gap-16 text-sm dark:text-neutral-300 text-gray-700">
        {sections?.map((section: any, index: number) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={parent}
          >
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-2xl font-bold mb-2"
            >
              {section.title}
            </motion.h2>
            {section.items?.map((item: any, i: number) => (
              <motion.div key={i} variants={children} className="p-1">
                <a href={item.link}>
                  <div className="flex items-center justify-between gap-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                    <div className="flex flex-col gap-1">
                      <h2 className="text-xl font-bold flex">
                        {item.name}
                        {item.status === "in progress" && (
                          <span className="m-auto ml-3 text-sm font-semibold text-white bg-neutral-400 dark:bg-neutral-600 rounded-3xl px-2 py-0.5">
                            coming soon
                          </span>
                        )}
                      </h2>
                      <p className="dark:text-neutral-400 text-gray-600">
                        {item.description}
                      </p>
                    </div>

                    {item.year && (
                      <div className="text-neutral-500">{item.year}</div>
                    )}
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </section>
      <section className="flex flex-col items-center gap-12 dark:text-neutral-300 text-gray-700">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={parent}
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Lastest Updates
          </motion.h2>
          <motion.div variants={children} className="p-1">
            <div className="mb-56">
              {latest?.map((post: any, i: any) => (
                <a key={i} href={post.link}>
                  <div className="space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                    <p
                      className={`${post.color} text-xs font-semibold text-white w-fit px-3 py-0.5 rounded-3xl`}
                    >
                      {post.source}
                    </p>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <div className="flex flex-col sm:flex-row gap-2 justify-between">
                      <p className="dark:text-neutral-400 text-gray-500">
                        {post.contentSnippet}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm sm:mt-auto">
                        {moment(post.isoDate).fromNow()}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
