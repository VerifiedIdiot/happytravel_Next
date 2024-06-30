import type { Metadata } from 'next'
import { ReactNode } from 'react'
import HeaderFooter from './HeaderFooter'
import ReactQueryProvider from '@/providers/ReactQueryProvider'

import '@/styles/global.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Welcome to my laboratory',
    default: 'Loading . . .',
  },
  description: 'Such a dynamic developer ever',
}

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return <main className='w-full min-h-dvh h-max flex flex-col justify-center items-center bg-gray-50'>{children}</main>
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <ReactQueryProvider>
          <HeaderFooter>
            <DefaultLayout>{children}</DefaultLayout>
          </HeaderFooter>
        </ReactQueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
