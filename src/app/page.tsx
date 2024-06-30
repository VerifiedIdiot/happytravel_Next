
import styles from '@/styles/home/home.module.css'
import { Suspense } from 'react'

export const metadata = {
  title: 'HAPPY TRAVEL! WHAT A FANTASTIC JOURNEY!',
  description: 'HOME OF HAPPY TRAVEL',
}

export default function Home() {
  return (
        <>
      <section className={styles.imageSection}>
      <img
          className={styles.imageItem}
          src="/asset/image/company1.png"
          alt="Company Image"
        />
      </section>
      <section className={styles.itemSection}>
        <div className={styles.itemContainer}>
          {
            
          }

        </div>
      </section>
    </>
  )
}
