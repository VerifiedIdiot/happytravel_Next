import type { Metadata } from 'next'
import { ReactNode } from 'react'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import EmotionProvider from '@/providers/EmotionProvider'
import { Global, css } from '@emotion/react'
import '../styles/global.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Welcome to my laboratory',
    default: 'Loading . . .',
  },
  description: 'Such a dynamic developer ever',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider />
        <EmotionProvider />
        {children}
      </body>
    </html>
  )
}
