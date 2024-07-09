import Image from 'next/image'
import styles from '@/styles/tour/tour.module.css'
import Link from 'next/link'
import { TourFilter } from './TourFilter'
import { TourDashboard } from './TourDashboard'
import { TourPackage } from '@/types/Tour'
import { fetchTourPackages } from '@/api/tour/ServerAPI';

export const TourIntroSection = () => {
  return (
    <>
      <section className={styles.imageSection}>
        <Image
          src='/asset/image/tour.jpg'
          alt='tour Image'
          className={styles.imageItem}
          width={1920}
          height={1280}
          priority
          placeholder='blur'
          blurDataURL='/asset/image/tour.jpg'
        />
        <div className={styles.introItem}>
          <p>
            <span className='mr-2'>
              <Link href='/'>Home</Link>
            </span>
            <span>TOUR</span>
          </p>
          <h1>Tour Packages</h1>
        </div>
      </section>
    </>
  )
}



export const TourDashboardSection  = async () => {
  const data : TourPackage[] = await fetchTourPackages({})
  console.log(data)
  return (
    <>
      <section className={styles.tourDashboardSection}>
        <div className={styles.tourDashboardContainer}>
          <TourFilter />
          <TourDashboard data={data}/>
        </div>
      </section>
    </>
  )
}
