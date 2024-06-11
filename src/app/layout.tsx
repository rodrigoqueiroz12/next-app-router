import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Provider from '@/providers/provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | devstore',
    default: 'devstore',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Provider>
      <html
        lang="pt-br"
        className={`${inter.variable} bg-zinc-950 text-zinc-100 antialiased`}
      >
        <body>{children}</body>
      </html>
    </Provider>
  )
}
