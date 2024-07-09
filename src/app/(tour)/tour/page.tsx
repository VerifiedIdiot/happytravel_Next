// import { fetchPackageList } from '@/lib/package/ServerAPI'
// import { useEmployeeStore } from '@/store/LoginStore'
import { Metadata } from 'next';
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { TourIntroSection, TourDashboardSection } from './_components/TourSection';

export const metadata: Metadata = {
  title: 'SEARCH YOUR TOUR TO TRAVEL AROUND!',
  description: 'TOUR OF HAPPY TRAVEL',
};

const TourPage = () => {

return (
    <>
    <TourIntroSection/>
    <TourDashboardSection/>
    </>
)
}

export default TourPage;