import styles from '@/styles/home/home.module.css'
import { ReactNode } from 'react'
import { SliderSection ,ItemSection } from './(home)/home/_components/Comps'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'



const FeaturedSection = dynamic(() => import('@/app/(home)/home/_components/Comps').then((mod) => mod.FeaturedSection), {
  ssr: false,
})

export const metadata = {
  title: 'HAPPY TRAVEL! WHAT A FANTASTIC JOURNEY!',
  description: 'HOME OF HAPPY TRAVEL',
}

export default function Home({ children }: { children: ReactNode }) {
  return (
    <>
     
        <SliderSection>{children}</SliderSection>
 

        <ItemSection>{children}</ItemSection>


        <FeaturedSection>{children}</FeaturedSection>
 
    </>
  )
}
