import { Metadata } from 'next'
import { ReactNode } from 'react'
import { IntroSection } from './comps'
import { SideForm } from '@/components/client/SideForm';

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import styles from '@/styles/home/home.module.css'

export const metadata: Metadata = {
  title: '호텔상품 관리',
}

const ItemSection = dynamic(() => import('@/app/(hotels)/hotels/comps').then((mod) => mod.ItemSection), {
  ssr: false,
})


export const hotels = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <IntroSection>{children}</IntroSection>
      <ItemSection>{children}</ItemSection>
    </>
  )
}

export default hotels
