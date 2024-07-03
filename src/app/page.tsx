import styles from '@/styles/home/home.module.css'
import { ReactNode } from 'react'
import { SliderSection, ItemSection, FeaturedSection } from './Comps'

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
