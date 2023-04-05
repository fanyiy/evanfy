import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Chivo } from 'next/font/google';

const chivo = Chivo({ subsets: ['latin'] });

export const metadata = {
  title: 'Evan Yang',
  description: 'portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={chivo.className}>
      <body className='bg-neutral-100'>{children}</body>
      <Analytics/>
    </html>
  )
}
