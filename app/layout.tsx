import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer/Footer'
import { cn } from '@/lib/utils'

const ibmPlexSansJp = localFont({
  src: [
    {
      path: '../public/fonts/ibm-plex-sans-jp-v5-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ibm-plex-sans-jp-v5-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'レンタルフォークリフト.com',
  description: 'レンタルフォークリフト.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="">
      <body className={cn(ibmPlexSansJp.className, 'text-[#0A1C0F]')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
