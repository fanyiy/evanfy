import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-xl mb-40 px-4 sm:px-6 mt-16 md:mt-20 lg:mt-32 mx-auto space-y-24">
      <section className='flex flex-col mx-auto space-y-2'>
        <Image
          src="/avatar.jpg"
          alt="Evan Yang"
          width={100}
          height={100}
          className="rounded-full mb-3"
        />
        <h1 className="text-2xl font-bold text-neutral-700 mb-4">Hi! I'm <span className="text-3xl mx-1">Evan Yang</span> from Taiwan.<br></br>I'm a 20 yo <span className="text-3xl">AI</span> student at <a href='https://vu.nl/en/' className='underline'>VU Amsterdam</a>.</h1>
        <p className="text-gray-500">Currently I'm indie hacking my way to freedom.<br></br>I'm working on my projects, documenting my journey on <a href="https:/twitter.com/__evanyang__/" className='underline'>Twitter</a>, and sharing my thoughts on my newsletter.</p>
      </section>
      <section className='flex flex-col gap-12 text-sm text-gray-700'>
        <div className=''>
          <h2 className="text-2xl font-bold mb-2">Projects</h2>
          <div className='p-1'>
            <a href='https://imginsight.com'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>ImgInsight</h2>
                <p className='text-gray-600'>a photo captioning tool powered by AI</p>
              </div>
            </a>
          </div>
          <div className='p-1'>
            <a href='https://gptassistant.app'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>GPTAssistant</h2>
                <p className='text-gray-600'>a Discord chat bot</p>
              </div>
            </a>
          </div>
        </div>
        <div className=''>
          <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
          <div className='p-1'>
            <a href='https://twitter.com/__evanyang__/'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>Twitter</h2>
                <p className='text-gray-600'>keep up with my journey</p>
              </div>
            </a>
          </div>
          <div className='p-1'>
            <a href='https://linkedin.com/in/evanyang-dev/'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>Linkedin</h2>
                <p className='text-gray-600'>barely use it :)</p>
              </div>
            </a>
          </div>
        </div>
        <div className=''>
          <h2 className="text-2xl font-bold mb-2">Photography</h2>
          <div className='p-1'>
            <a href='https://unsplash.com/__evanyang__/'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>Unsplash</h2>
                <p className='text-gray-600'>open source my photography work xD</p>
              </div>
            </a>
          </div>
          <div className='p-1'>
            <a href='https://instagram.com/__evanyang__/'>
              <div className='space-y-1 p-4 rounded-2xl bg-zinc-100 shadow-sm hover:-translate-y-1 duration-300'>
                <h2 className='text-xl font-bold'>Instagram</h2>
                <p className='text-gray-600'>infrequent updates</p>
              </div>
            </a>
          </div>
        </div>
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
    </main>
  )
}
