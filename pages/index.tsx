import { motion, Variants } from "framer-motion"
import Parser from 'rss-parser';
import moment from "moment";


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

export default function Home(props: any) {
  return (
    <main className="max-w-xl px-6 mt-16 md:mt-20 lg:mt-32 mx-auto space-y-24">
      <section className='flex flex-col mx-auto space-y-2'>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          src="/avatar.jpg"
          alt="Evan Yang"
          width={100}
          height={100}
          className="rounded-full mb-3"
        />
        <motion.h1
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-2xl font-bold dark:text-neutral-300 text-neutral-700 mb-4"
        >
          Hi there!<br></br>I'm <span className="text-4xl font-extrabold mx-1">Evan Yang</span> from Taiwan.<br></br>I'm a 20 yo AI student at <a href='https://vu.nl/en/' className='underline'>VU Amsterdam</a>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          className="dark:text-neutral-400 text-gray-500"
        >
          I'm a indie hacker carving out my way to freedom.<br></br>I work on my projects, document my journey on <a href="https://twitter.com/__evanyang__/" className='underline font-semibold'>Twitter</a>, and share my story on my <span className='font-semibold'>newsletter</span>.
        </motion.p>
        {/* <svg className="animate-bounce w-6 h-6 text-white bg-black">
          <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
            s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg> */}
      </section>
      <section className='flex flex-col gap-16 text-sm dark:text-neutral-300 text-gray-700'>
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
          <motion.div variants={children} className='p-1'>
            <a href='https://imginsight.com'>
              <div className='space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>ImgInsight</h2>
                <p className='dark:text-neutral-400 text-gray-600'>a photo captioning tool powered by AI</p>
              </div>
            </a>
          </motion.div>
          <motion.div variants={children} className='p-1'>
            <a href='https://gptassistant.app'>
              <div className='space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>GPTAssistant</h2>
                <p className='dark:text-neutral-400 text-gray-600'>a Discord chat bot</p>
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
          <motion.div variants={children} className='p-1'>
            <a href='https://unsplash.com/__evanyang__/'>
              <div className='space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>Unsplash</h2>
                <p className='dark:text-neutral-400 text-gray-600'>open source my photography work xD</p>
              </div>
            </a>
          </motion.div>
          <motion.div variants={children} className='p-1'>
            <a href='https://instagram.com/__evanyang__/'>
              <div className='space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>Instagram</h2>
                <p className='dark:text-neutral-400 text-gray-600'>infrequent updates</p>
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
          <motion.div variants={children} className='p-1'>
            <a href='https://twitter.com/__evanyang__/'>
              <div className='space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>Twitter</h2>
                <p className='dark:text-neutral-400 text-gray-600'>keep up with my journey</p>
              </div>
            </a>
          </motion.div>
          <motion.div variants={children} className='p-1'>
            <a href='https://linkedin.com/in/evanyang-dev/'>
              <div className='space-y-1 p-4 rounded-2xl dark:bg-neutral-800 bg-zinc-100 shadow-sm dark:shadow-neutral-700 hover:shadow-md dark:hover:shadow-neutral-600 hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>Linkedin</h2>
                <p className='dark:text-neutral-400 text-gray-600'>barely use it :)</p>
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
      <section className='flex flex-col items-center gap-12 dark:text-neutral-300 text-gray-700'>
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
          <motion.div variants={children} className='p-1'>
            <div className="mb-64">
              {props.latest.map((post: any) => (
                <a href={ post.link }>
                  <div className="rounded-xl space-y-2 hover:bg-gray-50 duration-200 p-5">
                    <p className={`${post.color} text-xs font-semibold text-white w-fit px-3 py-0.5 rounded-3xl`}>{ post.source }</p>
                    <h2 className="text-base sm:text-xl font-bold text-gray-700">{ post.title }</h2>
                    <div className="flex flex-col sm:flex-row gap-2 justify-between">
                      <p className="text-neutral-500 text-xs sm:text-base">{ post.contentSnippet }</p>
                      <p className="text-gray-500 text-xs sm:mt-auto">{ moment(post.isoDate).fromNow() }</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

export async function getStaticProps() {
  try {
    const parser = new Parser();
    const imginsight = await parser.parseURL('https://imginsight.com/blog/feed');
    return {
      props: {
        latest: [
          ...imginsight.items.map((item) => ({
            ...item,
            source: 'ImgInsight Blog',
            color: 'bg-stone-400',
          })),
        ],
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: [],
    }
  }
}