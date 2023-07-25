import { motion, Variants } from "framer-motion";
import Parser from "rss-parser";
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

export default function Home(props: any) {
  return (
    <main className="max-w-xl px-6 mt-16 md:mt-20 lg:mt-32 mx-auto space-y-24">
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
          Hi there!<br></br>I'm{" "}
          <span className="text-4xl font-extrabold mx-1">Evan Yang</span> from
          Taiwan.<br></br>I'm a 20 yo AI student at{" "}
          <a href="https://vu.nl/en/" className="underline">
            VU Amsterdam
          </a>
          .
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          className="dark:text-neutral-400 text-gray-500"
        >
          I'm a indie hacker carving out my way to freedom.<br></br>I work on my
          projects, document my journey on{" "}
          <a
            href="https://twitter.com/__evanyang__/"
            className="underline font-semibold"
          >
            Twitter
          </a>
          , and share my story on my{" "}
          <span className="font-semibold">newsletter</span> (comming soon).
        </motion.p>
      </section>
      <section className="flex flex-col gap-16 text-sm dark:text-neutral-300 text-gray-700">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={parent}
        >
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="text-3xl font-bold mb-2"
          >
            Projects
          </motion.h2>
          <motion.div variants={children} className="p-1">
            <a href="https://imginsight.com">
              <div className="flex justify-between items-center space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                <div>
                  <h2 className="text-xl font-bold">ImgInsight</h2>
                  <p className="dark:text-neutral-400 text-gray-600">
                    a photo captioning tool powered by AI
                  </p>
                </div>
                <div className="text-neutral-500">2023</div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={children} className="p-1">
            <a href="https://gptassistant.app">
              <div className="flex justify-between items-center space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                <div>
                  <h2 className="text-xl font-bold">
                    GPTAssistant{" "}
                    <span className="ml-3 text-sm font-semibold text-white bg-neutral-400 dark:bg-neutral-600 rounded-3xl px-2 py-0.5">
                      co-found
                    </span>
                  </h2>
                  <p className="dark:text-neutral-400 text-gray-600">
                    a Discord chat bot
                  </p>
                </div>
                <div className="text-neutral-500">2023</div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={children} className="p-1">
            <a href="https://feedbase.co">
              <div className="flex justify-between items-center space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                <div>
                  <h2 className="text-xl font-bold">Feedbase</h2>
                  <p className="dark:text-neutral-400 text-gray-600">
                    customer feedback widget on your website
                  </p>
                </div>
                <div className="text-neutral-500">2023</div>
              </div>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={parent}
        >
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="text-3xl font-bold mb-2"
          >
            Get in touch
          </motion.h2>
          <motion.div variants={children} className="p-1">
            <a href="https://twitter.com/__evanyang__/">
              <div className="space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                <h2 className="text-xl font-bold">Twitter</h2>
                <p className="dark:text-neutral-400 text-gray-600">
                  keep up with my journey
                </p>
              </div>
            </a>
          </motion.div>
          <motion.div variants={children} className="p-1">
            <a href="https://linkedin.com/in/evanyang-dev/">
              <div className="space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                <h2 className="text-xl font-bold">Linkedin</h2>
                <p className="dark:text-neutral-400 text-gray-600">
                  barely use it :)
                </p>
              </div>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={parent}
        >
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="text-3xl font-bold mb-2"
          >
            Photography
          </motion.h2>
          <motion.div variants={children} className="p-1">
            <a href="https://unsplash.com/__evanyang__/">
              <div className="space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                <h2 className="text-xl font-bold">Unsplash</h2>
                <p className="dark:text-neutral-400 text-gray-600">
                  open source my photography work xD
                </p>
              </div>
            </a>
          </motion.div>
          <motion.div variants={children} className="p-1">
            <a href="https://instagram.com/__evanyang__/">
              <div className="space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                <h2 className="text-xl font-bold">Instagram</h2>
                <p className="dark:text-neutral-400 text-gray-600">
                  infrequent updates
                </p>
              </div>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={parent}
        >
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="text-3xl font-bold mb-2"
          >
            Writing
          </motion.h2>
          <motion.div variants={children} className="p-1">
            <a href="https://evanyangdev.substack.com/">
              <div className="space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                <h2 className="text-xl font-bold">Newsletter</h2>
                <p className="dark:text-neutral-400 text-gray-600">
                  coming soon...
                </p>
              </div>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={parent}
        >
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="text-3xl font-bold mb-2"
          >
            Other
          </motion.h2>
          <motion.div variants={children} className="p-1">
            <a href="https://www.producthunt.com/@__evanyang__">
              <div className="space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                <h2 className="text-xl font-bold">Product Hunt</h2>
                <p className="dark:text-neutral-400 text-gray-600">
                  the home 🏡 of my products
                </p>
              </div>
            </a>
          </motion.div>
          <motion.div variants={children} className="p-1">
            <a href="https://www.indiehackers.com/evanyang">
              <div className="space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300">
                <h2 className="text-xl font-bold">Indie Hackers</h2>
                <p className="dark:text-neutral-400 text-gray-600">
                  just a link :)
                </p>
              </div>
            </a>
          </motion.div>
        </motion.div>
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
            <div className="mb-64">
              {props.latest.map((post: any, i: any) => (
                <a key="{i}" href={post.link}>
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

export async function getStaticProps() {
  try {
    const parser = new Parser();
    const imginsight = await parser.parseURL(
      "https://imginsight.com/blog/feed"
    );
    return {
      props: {
        latest: [
          ...imginsight.items.map((item) => ({
            ...item,
            source: "ImgInsight Blog",
            color: "bg-stone-400 dark:bg-stone-700",
          })),
        ],
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: [],
    };
  }
}
