"use client";
import { motion, Variants } from "framer-motion";
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

export default function Home({ sections }: {
  sections: any
}) {
  return (
    <div className="mx-auto space-y-20">
      <section className="flex flex-col mx-auto space-y-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="mr-auto"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-2xl font-bold dark:text-neutral-300 text-neutral-700 mb-4"
        >
          Hey I'm Evan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          className="dark:text-neutral-400 text-gray-500"
        >
          I quit college and am now bootstrapping startups. You can find me building projects and sharing my startup journey
          on <a href="https://twitter.com/TheEvanYang/" className="underline">X</a>.
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
                      <h2 className="text-xl font-semibold flex">
                        {item.name}
                        {item.status === "in progress" && (
                          <span className="m-auto ml-3 text-sm font-medium text-white bg-neutral-400 dark:bg-neutral-600 rounded-3xl px-2 py-0.5">
                            coming soon
                          </span>
                        )}
                      </h2>
                      <p className="dark:text-neutral-400 text-gray-500">
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
    </div>
  );
}
