import Image from 'next/image'
import styles from '@/styles/tour/tour.module.css'
import { TourFilter } from './TourFilter'

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
        <div>
          <p><span></span><span></span></p>
          <h1></h1>
        </div>
      </section>
    </>
  )
}

export const TourDashboardSection = () => {
  return (
    <>
      <section className={styles.TourDashboardSection}>
        <div className={styles.TourDashboardContainer}>
        <TourFilter/>
        </div>
      </section>
    </>
  )
}