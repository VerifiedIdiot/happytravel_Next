import { ReactNode } from 'react'
import styles from '@/styles/sales/hotels.module.css'
import { HotelList } from '@/types/Hotel'
import { fetchHotelList } from '@/api/hotel/ServerAPI'

export const IntroSection = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <div className='flex text-white m-4'>
            <p className='mx-2 font-normal'>HOME</p>
            <p className='mx-2 font-thin'>HOTEL</p>
          </div>
          <h1 className='text-white text-6xl font-black'>Hotels</h1>
        </div>
      </section>
    </>
  )
}

interface ItemSectionProps {
  children: ReactNode
}

export const ItemSection = async ({ children }: ItemSectionProps) => {
  const data: HotelList[] = await fetchHotelList()
  

  return (
    <div className='w-3/4 m-16'>
      <section className={styles.itemSection}>
        <div className={styles.itemLeftContainer}>{children}</div>
        <div className={styles.itemRightContainer}>
          <div className={styles.itemArea}>
            <div className={styles.itemBoxList}>
              {data.length > 0 ? (
                data.map((item) => (
                  <div className={styles.itemCard} key={item.id}>
                    <div className={styles.imageContainer}>
                      <img src={item.imageUrl} alt={item.hotelName} />
                    </div>
                    <div className={styles.textContainer}>
                      <h1>{item.hotelName}</h1>
                      <p>{item.price}</p>
                    </div>
                    <div className={styles.detailContainer}>Detail</div>
                  </div>
                ))
              ) : (
                <p>No items available</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
