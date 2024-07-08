import styles from '@/styles/home/home.module.css'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { SliderSection, ItemSection, FeaturedSection, TopPackagesSection, SubscribeSection } from './(home)/home/_components/Comps'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

export const metadata = {
  title: 'HAPPY TRAVEL! WHAT A FANTASTIC JOURNEY!',
  description: 'HOME OF HAPPY TRAVEL',
}

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <SliderSection/>
      <ItemSection/>
      <FeaturedSection/>
      <TopPackagesSection/>
      <SubscribeSection/>
    </>
  )
}
