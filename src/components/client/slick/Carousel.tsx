'use client'
import { CountryCount } from '@/types/Home'

import { useInView } from 'react-intersection-observer'
import Slider from 'react-slick'
import './slick.css'
import './slick-theme.css'
import Image from 'next/image'
import styles from './carousel.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface StyledSliderProps {
  data: CountryCount[]
}

const StyledSlider: React.FC<StyledSliderProps> = ({ data }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const uniqueData = data.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.countryImage === item.countryImage && t.koreanName === item.koreanName),
  )

  const settings = {
    dots: true,
    // infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const handleSearch = (id: string) => {
    // Function logic will go here
    console.log(`Country code: ${id}`)
  }

  return (
    <div ref={ref} className={`${styles.sliderContainer} ${inView ? styles.visible : null}`}>
      <Slider {...settings}>
        {uniqueData.map((item, index) => (
          <div key={index} >
            <div className={styles.imageContainer}>
              <Image
                src={item.countryImage}
                alt={item.koreanName}
                className={styles.imageItem}
                width={2024}
                height={1580}
                priority
                placeholder='blur'
                blurDataURL={item.countryImage}
                onClick={() => handleSearch(item.countryCode)}></Image>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faSearch} className={styles.icon} />
              </div>

              <div className={styles.textContainer} onClick={() => handleSearch(item.countryCode)}>
                <h3>{item.koreanName}</h3>
                <p>{item.packageCount}개 상품 준비중</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default StyledSlider
