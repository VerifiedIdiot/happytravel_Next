import { fetchTourPackages } from '@/api/tour/ServerAPI';
import { Metadata } from 'next';
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { TourIntroSection, TourDashboardSection } from './_components/TourSection';
import { TourPackage } from '@/types/Tour';

export const metadata: Metadata = {
  title: 'SEARCH YOUR TOUR TO TRAVEL AROUND!',
  description: 'TOUR OF HAPPY TRAVEL',
};

const TourPage =  async () => {
  const data : TourPackage[] = await fetchTourPackages({})
  console.log(data)

return (
    <>
    <TourIntroSection/>
    <TourDashboardSection/>
    </>
)
}

export default TourPage;