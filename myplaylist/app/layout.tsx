import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider';

const font = Poppins({ weight: '400', subsets: ['latin'] });


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
      <body className={font.className}>
        <SupabaseProvider>
        <Sidebar>
        {children}
        </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  )
}
