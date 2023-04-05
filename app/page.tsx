import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-3xl mb-40 px-4 sm:px-6 mt-16 md:mt-20 lg:mt-32 mx-auto space-y-12">
      <section className='flex flex-col mx-auto items-center space-y-2'>
        <Image
          src="/avatar.jpg"
          alt="Evan Yang"
          width={100}
          height={100}
          className="rounded-full mb-3"
        />
        <h1 className="text-2xl font-semibold mb-4">Evan Yang</h1>
        <p className='text-gray-600 text-center'>Welcome to my corner of the internet!</p>
      </section>
      <section className='flex flex-col mx-auto items-center gap-12'>
        <div className='mx-auto'>
          <h2 className="text-xl font-semibold mb-2 text-center">About Me</h2>
          <ul className='list-inside'>
            <li><span className='mr-3'>👨🏻‍🎓</span>AI student at VU Amsterdam</li>
            <li><span className='mr-3'>👨🏻‍💻</span>Part-time Indie Hacker</li>
          </ul>
        </div>
        <div className='mx-auto'>
          <h2 className="text-xl font-semibold mb-2">My Products</h2>
          <ul className='list-inside'>
            <li><span className='mr-3'>📸</span><a href='https://imginsight.com'>ImgInsight</a></li>
            <li><span className='mr-3'>💬</span>GPTAssistant</li>
          </ul>
        </div>
        <div className='mx-auto'>
          <h2 className="text-xl font-semibold mb-2 text-center">Social Media</h2>
          <ul className='list-inside'>
            <li><span className='mr-3'>🐦</span><a href='https://twitter.com/__evanyang__'>Twitter</a></li>
            <li><span className='mr-3'>👨🏻‍💻</span><a href='https://linkedin.com/__evanyang__'>Linkedin</a></li>
          </ul>
        </div>
        <div className='mx-auto'>
          <h2 className="text-xl font-semibold mb-2 text-center">Photography</h2>
          <ul className='list-inside'>
            <li><span className='mr-3'>📷</span><a href='https://unsplash.com/__evanyang__'>Unsplash</a></li>
          </ul>
        </div>
        {/* <div className='mx-auto'>
          <h2 className="text-xl font-semibold mb-2 text-center">Writings</h2>
          <ul className='list-inside'>
            <li><span className='mr-3'>🐦</span><a href='https://twitter.com/__evanyang__'>Newsletter</a></li>
          </ul>
        </div> */}
      </section>
    </main>
  )
}
