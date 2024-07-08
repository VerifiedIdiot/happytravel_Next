'use client'

import { useState } from 'react'
import { ReactNode } from 'react'
import Link from 'next/link'
import styles from '@/styles/about/about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faBed, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export const IntroSection = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className={styles.itemSection}>
        <div className={styles.itemContainer}>
          <div className={styles.itemArea}>
            <Link href='/' className={styles.itemBox} >
              HOME
            </Link>
            <p className={styles.itemBox} font-thin>ABOUT</p>
          </div>
          <h1 className='text-white text-6xl font-black'>About Us</h1>
        </div>
      </section>
    </>
  )
}

const departments = [
  {
    name: 'Flight',
    link: '/flight',
    title: '세계 각지로 편안한 여행을 책임지는 항공사',
    description:
      '세계 각지의 하늘을 누비며 승객들에게 최고의 여행 경험을 제공하는 글로벌 항공사로, 안전하고 신뢰할 수 있는 서비스를 기반으로 운영되고 있습니다. 혁신적인 기술과 철저한 안전 관리를 통해 승객들에게 최상의 서비스를 제공하며, 다양한 목적지와 편리한 스케줄을 갖춘 항공 네트워크를 자랑합니다.',
    image: '/asset/image/flight_attendant.jpg',
    icon: <FontAwesomeIcon icon={faPlane} className='buttonIcon' />,
  },
  {
    name: 'Hotel',
    link: '/hotel',
    title: '편안함과 최상의 서비스를 제공하는 호텔',
    description:
      '최고의 서비스와 럭셔리한 편안함을 제공하며, 모든 투숙객에게 잊지 못할 경험을 선사합니다. 도시 중심부부터 해변가까지 다양한 위치에 위치한 호텔은 여행객들에게 편안함과 편리함을 제공합니다.',
    image: '/asset/image/hotel_officer.jpg',
    icon: <FontAwesomeIcon icon={faBed} className='buttonIcon' />,
  },
  {
    name: 'Agency',
    link: '/agency',
    title: '잊지 못할 여행 경험을 선사하는 현지 가이드',
    description:
      '전문적이고 친절한 현지 가이드 서비스로, 여행객들에게 잊지 못할 여행 경험을 선사합니다. 현지 문화와 역사를 깊이 이해하고 있는 가이드들이 각 지역의 숨은 매력을 소개합니다.',
    image: '/asset/image/travel_guide.webp',
    icon: <FontAwesomeIcon icon={faSuitcaseRolling} className='buttonIcon' />,
  },
]

export const ItemSection = () => {
  const [selectedInfo, setSelectedInfo] = useState({
    title: departments[0].title,
    description: departments[0].description,
    image: departments[0].image,
  })

  const [selectedDepartment, setSelectedDepartment] = useState(departments[0].name)

  const handleClick = (name: string) => {
    const item = departments.find((dept) => dept.name === name)
    if (item) {
      setSelectedInfo({
        title: item.title,
        description: item.description,
        image: item.image,
      })
      setSelectedDepartment(name)
    }
  }

  return (
    <>
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.itemImageContainer}>
            <ItemImageSection image={selectedInfo.image} />
          </div>
          <div className={styles.itemDetailsContainer}>
            <div className={styles.itemTextContainer}>
              {departments.map((item, index) => (
                <div key={index} className={styles.infoItem}>
                  <button
                    className={`${styles.departmentInfo} ${selectedDepartment === item.name ? styles.selected : ''}`}
                    onClick={() => handleClick(item.name)}>
                    <p>{item.name}</p>
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.itemDescription}>
              <ItemInfoSection title={selectedInfo.title} description={selectedInfo.description} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const ItemImageSection = ({ image }: { image: string }) => {
  return (
    <div className={styles.itemImageArea}>
      <img src={image} alt='Selected' />
    </div>
  )
}

const ItemInfoSection = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className={styles.itemTextArea}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

type FAQ = {
  question: string
  answer: string
  imageUrl: string
}

const faqs = [
  {
    question: 'When she reached the first hills?',
    answer:
      'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
    imageUrl: '/asset/image/minus-button.png',
  },
  {
    question: 'Italic Mountains, she had a last',
    answer:
      'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
    imageUrl: '/asset/image/minus-button.png',
  },
  {
    question: 'Bookmarksgrove, the headline?',
    answer:
      'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
    imageUrl: '/asset/image/minus-button.png',
  },
  {
    question: 'Alphabet Village and the subline of her own?',
    answer:
      'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
    imageUrl: '/asset/image/minus-button.png',
  },
  {
    question: 'Then she continued her way?',
    answer:
      'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
    imageUrl: '/asset/image/minus-button.png',
  },
  {
    question: 'Skyline of her hometown Bookmarksgrove?',
    answer:
      'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
    imageUrl: '/asset/image/minus-button.png',
  },
]

export const FAQsSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleAnswer = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

  return (
    <>
      <section className={styles.faqsection}>
        <div className={styles.faqContainer}>
          <div className={styles.textArea}>
            <p className='text-gray-400 mb-4'>FAQS</p>
            <h2 className='text-4xl'>
              <strong className='font-bold mr-5'>Frequently</strong>Ask Questions
            </h2>
          </div>
          <div className='w-full my-4'></div>
          <div className={styles.cardContainer}>
            {faqs.map((faq, index) => (
              <div className={styles.cardList} key={index}>
                <div className={styles.cardBox}>
                  <h3
                    className='font-semibold cursor-pointer flex justify-between items-center'
                    onClick={() => toggleAnswer(index)}>
                    <span>{faq.question}</span>
                    <img
                      src={openIndexes.includes(index) ? faq.imageUrl : '/asset/image/add-button.png'}
                      className='w-8 h-8 object-cover ml-2'
                    />
                  </h3>
                  <div
                    className={`transition-all duration-300 ${styles.answer} ${
                      openIndexes.includes(index) ? styles.open : ''
                    }`}>
                    <div className='flex justify-center w-full'>
                      <hr className='w-full' />
                    </div>
                    <p className='text-gray-600 leading-normal'>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
