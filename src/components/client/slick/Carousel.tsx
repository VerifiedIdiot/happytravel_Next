'use client'
import { CountryCount } from '@/types/Home'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

interface StyledSliderProps {
  data: CountryCount[]
}

const StyledSlider: React.FC<StyledSliderProps> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
  return (
    <div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className='w-1/6' key={index}>
            <div>
            <Image
                src={item.countryImage}
                alt={item.koreanName}
                // className={styles.imageItem}
                width={300}
                height={240}
              />
              <div >
                <h3>{item.koreanName}</h3>
                <p>{item.packageCount}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default StyledSlider
