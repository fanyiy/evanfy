import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Chivo } from 'next/font/google';

const chivo = Chivo({ subsets: ['latin'] });

import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={chivo.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}