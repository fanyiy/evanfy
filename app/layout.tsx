import './globals.css'
import { Analytics } from '@vercel/analytics/react';


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
    <html lang="en">
      <body>{children}</body>
      <Analytics/>
    </html>
  )
}
