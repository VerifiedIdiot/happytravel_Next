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

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

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
                    <div className={styles.cardSection}>
                      <div className={styles.textContainer}>
                        <div className={styles.starRating}>
                          <h1>{item.hotelName}</h1>
                          <span>{renderStars(item.star)}</span>
                          <span className={`${styles.ratingText}`}>Rating</span>
                        </div>
                        <div>
                          <p>{item.price}원</p>
                        </div>
                      </div>
                      <div className={styles.detailContainer}>
                        <p>{item.detail}</p>
                      </div>
                    </div>
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
