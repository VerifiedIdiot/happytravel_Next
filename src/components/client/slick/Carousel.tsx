'use client'
import { CountryCount } from '@/types/Home'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface StyledSliderProps {
  data: CountryCount[];
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
    <div className='container mx-auto py-8'>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className='px-2'>
            <div className='relative'>
              <img src={item.countryImage} alt={item.koreanName} className='w-full h-60 object-cover rounded-lg' />
              <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 rounded-b-lg'>
                <h3 className='text-xl font-semibold'>{item.koreanName}</h3>
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