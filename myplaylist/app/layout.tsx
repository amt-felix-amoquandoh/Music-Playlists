import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Music Player',
  description: 'Save some playlists',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
