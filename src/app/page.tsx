import styles from '@/styles/home/home.module.css'
import { ReactNode } from 'react'
import { SliderSection, ItemSection, FeaturedSection } from './(home)/home/_components/Comps'
import { Suspense } from 'react'
import { fetchCountryCount } from '@/api/home/ServerAPI'
export const metadata = {
  title: 'HAPPY TRAVEL! WHAT A FANTASTIC JOURNEY!',
  description: 'HOME OF HAPPY TRAVEL',
}

export default async function Home({ children }: { children: ReactNode }) {
  const countryCounts = await fetchCountryCount();
  return (
    <>
      <SliderSection>{children}</SliderSection>
      <ItemSection>{children}</ItemSection>
      <FeaturedSection>{children}</FeaturedSection>
    </>
  )
}
