'use client'
import { useEffect } from 'react'
import { TopPackage } from '@/types/Home'
import { useInView } from 'react-intersection-observer'
import styles from '@/components/client/Top5Item/Top5Item.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-regular-svg-icons'

interface StyledTop5Props {
  data: TopPackage[]
}

const StyledTop5List: React.FC<StyledTop5Props> = ({ data }) => {
  console.log(data)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const handleSearch = (id: string) => {
    console.log(`Package code : ${id}`)
  }


  return (
    <div ref={ref} className={`${styles.top5ItemContainer} ${inView ? styles.visible : ''}`}>
      {data.map((item, index) => (
        <div className={styles.topItem} key={index}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.packageImage}
              src={item.countryImage}
              alt={item.packageName}
              width={2024}
              height={1580}
              priority
              placeholder='blur'
              blurDataURL={item.countryImage}
            />
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faSearch} className={styles.search} />
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className='flex w-full h-1/3'>
              <div className='flex flex-col justify-between h-full w-2/3'>
                <h3>{item.packageName}</h3>
                <h4 className='text-customRed'>{renderStars(item.rating)}</h4>
              </div>
              <div className='flex flex-row-reverse h-full w-1/3'>
                <span>₩{item.salePrice}</span>
              </div>
            </div>

            <p>{item.packageInfo}</p>
            <p>
              {item.days}박 {item.days + 1}일
            </p>
          </div>
          <div className='flex justify-center w-full'>
            <hr className='w-11/12' />
          </div>
          <div className={styles.labelContainer}>
            <div className={styles.regionInfoItem}>
              <FontAwesomeIcon icon={faMap} className={styles.map} />{' '}
              <p className='ml-1 opacity-50'>
                {item.countryName}, {item.region}
              </p>
            </div>
            <div className={styles.btnItem}>
              <button className={styles.styledBtn}>
                <p>검색</p>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StyledTop5List
