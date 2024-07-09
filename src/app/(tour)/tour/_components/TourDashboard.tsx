'use client'
import Image from 'next/image'
import styles from '@/styles/tour/tour.module.css'
import Link from 'next/link'
import { TourPackage } from '@/types/Tour'

interface TourDashboardProps {
  data: TourPackage[]
}

export const TourDashboard = ({ data }: TourDashboardProps) => {
  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }
  return (
    <>
      <div className={styles.tourDashItem}>
        {data.map((item, index) => (
          <div className={styles.cardItem} key={index}>
            <Image
              src={item.countryImage}
              alt='Company Image'
              className={styles.cardImage}
              width={1920}
              height={1280}
              priority
              placeholder='blur'
              blurDataURL={item.countryImage}
            />
            <div className={styles.cardInfo}>
              <div className='flex w-full h-1/4'>
                <div className={styles.divOne}>
                  <label>{item.packageName}</label>
                  <h4 className='text-customRed mt-1'>{renderStars(item.rating)}</h4>
                </div>
                <div className={styles.divTwo}>
                  <h5 className='text-sm text-blue-600 text-nowrap'>{item.salePrice}원</h5>
                </div>
              </div>
              <div className={styles.cardText}>
                <p className='leading-relaxed h-4/6'>{item.packageInfo}</p>
                <span>{item.days}박 {item.days +1}일</span>
              </div>
              <hr className='w-11/12'></hr>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
