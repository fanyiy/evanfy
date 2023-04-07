import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='dark:bg-neutral-900 bg-neutral-100'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}