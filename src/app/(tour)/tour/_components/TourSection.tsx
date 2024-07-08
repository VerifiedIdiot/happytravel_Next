import Image from 'next/image'
import styles from '@/styles/tour/tour.module.css'

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
      </section>
    </>
  )
}
