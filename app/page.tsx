'use client';
import Image from 'next/image'
import { motion, Variants } from "framer-motion"

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
}

const children: Variants = {
  onscreen: {
    opacity: 1,
    x: 0,
    transition : {
      ease: "easeOut",
      duration: 0.5,
    }
  },
  offscreen: {
    opacity: 0, x: 5
  },
}

export default function Home() {
  return (
    <motion.main
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="max-w-xl mb-40 px-6 mt-16 md:mt-20 lg:mt-32 mx-auto space-y-24"
    >
      <motion.section
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className='flex flex-col mx-auto space-y-2'
      >
        <Image
          src="/avatar.jpg"
          alt="Evan Yang"
          width={100}
          height={100}
          className="rounded-full mb-3"
        />
        <h1 className="text-3xl font-bold text-neutral-700 mb-4">Hi! I'm <span className="text-4xl mx-1">Evan Yang</span> from Taiwan.<br></br>I'm a 20 yo <span className="text-4xl">AI</span> student at <a href='https://vu.nl/en/' className='underline'>VU Amsterdam</a>.</h1>
        <p className="text-gray-500">Currently I'm indie hacking my way to freedom.<br></br>I'm working on my projects, documenting my journey on <a href="https://twitter.com/__evanyang__/" className='underline'>Twitter</a>, and sharing my thoughts on my newsletter.</p>
      </motion.section>
      <section className='flex flex-col gap-16 text-sm text-gray-700'>
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
            className="text-2xl font-bold mb-2"
            >
            Projects
          </motion.h2>
          <motion.div variants={children} className='p-1'>
            <a href='https://imginsight.com'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 hover:shadow-md duration-300'>
                <h2 className='text-xl font-bold'>ImgInsight</h2>
                <p className='text-gray-600'>a photo captioning tool powered by AI</p>
              </div>
            </a>
          </motion.div>
          <motion.div variants={children} className='p-1'>
            <a href='https://gptassistant.app'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 hover:shadow-md duration-300'>
                <h2 className='text-xl font-bold'>GPTAssistant</h2>
                <p className='text-gray-600'>a Discord chat bot</p>
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
            className="text-2xl font-bold mb-2"
          >
          Photography
          </motion.h2>
          <motion.div variants={children} className='p-1'>
            <a href='https://unsplash.com/__evanyang__/'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 hover:shadow-md duration-300'>
                <h2 className='text-xl font-bold'>Unsplash</h2>
                <p className='text-gray-600'>open source my photography work xD</p>
              </div>
            </a>
          </motion.div>
          <motion.div variants={children} className='p-1'>
            <a href='https://instagram.com/__evanyang__/'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 hover:shadow-md duration-300'>
                <h2 className='text-xl font-bold'>Instagram</h2>
                <p className='text-gray-600'>infrequent updates</p>
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
            className="text-2xl font-bold mb-2"
          >
          Get in touch
          </motion.h2>
          <motion.div variants={children} className='p-1'>
            <a href='https://twitter.com/__evanyang__/'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 hover:shadow-md duration-300'>
                <h2 className='text-xl font-bold'>Twitter</h2>
                <p className='text-gray-600'>keep up with my journey</p>
              </div>
            </a>
          </motion.div>
          <motion.div variants={children} className='p-1'>
            <a href='https://linkedin.com/in/evanyang-dev/'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 hover:shadow-md duration-300'>
                <h2 className='text-xl font-bold'>Linkedin</h2>
                <p className='text-gray-600'>barely use it :)</p>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* <div className=''>
          <h2 className="text-xl font-semibold mb-2">Writings</h2>
          <ul className='list-inside'>
            <li><span className='mr-3'>🐦</span><a href='https://twitter.com/__evanyang__'>Newsletter</a></li>
          </ul>
        </div> */}
      </section>
      <section className='flex flex-col mx-auto items-center gap-12 text-sm text-gray-700'>
        <h2 className="text-2xl font-bold mb-2 text-center"><span className='mr-3'>🎉</span>Lastest Updates</h2>
      </section>
    </motion.main>
  )
}