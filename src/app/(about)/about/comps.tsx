'use client'

import { useState } from 'react'
import { ReactNode } from 'react'
import styles from '@/styles/about/about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faBed, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export const IntroSection = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className={styles.itemSection}>
        <div className={styles.itemContainer}>
          <div className='flex text-white m-4'>
            <p className='mx-2 font-thin'>HOME</p>
            <p className='mx-2 font-thin'>ABOUT</p>
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
    title: '항공사 정보입니다.',
    description: '항공사 입니다ㅋ',
    image: '/asset/image/flight_attendant.jpg',
    icon: <FontAwesomeIcon icon={faPlane} className='buttonIcon' />,
  },
  {
    name: 'Hotel',
    link: '/hotel',
    title: '호텔 정보입니다.',
    description: '호텔 입니다ㅎ',
    image: '/asset/image/hotel_officer.jpg',
    icon: <FontAwesomeIcon icon={faBed} className='buttonIcon' />,
  },
  {
    name: 'Agency',
    link: '/agency',
    title: '가이드 정보입니다.',
    description: '가이드 입니다ㅠ',
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
          <ItemImageSection image={selectedInfo.image} />
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

const ItemImageSection = ({ image }: {image:string}) => {
  return (
    <div className={styles.itemImageArea}>
      <img src={image} alt='Selected' />
    </div>
  )
}

const ItemInfoSection = ({ title, description }: {title:string, description: string}) => {
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
    question: '질문입니다.',
    answer: '답변입니다.',
    imageUrl: '/asset/image/minus-button.png',
  },
  {
    question: '질문입니다.',
    answer: '답변입니다.',
    imageUrl: '/asset/image/minus-button.png',
  },
  {
    question: '질문입니다.',
    answer: '답변입니다.',
    imageUrl: '/asset/image/minus-button.png',
  },
  {
    question: '질문입니다.',
    answer: '답변입니다.',
    imageUrl: '/asset/image/minus-button.png',
  },
  {
    question: '질문입니다.',
    answer: '답변입니다.',
    imageUrl: '/asset/image/minus-button.png',
  },
  {
    question: '질문입니다.',
    answer: '답변입니다.',
    imageUrl: '/asset/image/minus-button.png',
  },
]

export const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <>
      <section className={styles.faqsection}>
        <div className={styles.faqContainer}>
          <div className={styles.textArea}>
            <p className='text-gray-400'>FAQS</p>
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
                      src={openIndex === index ? faq.imageUrl : '/asset/image/add-button.png'}
                      className='w-8 h-8 object-cover ml-2'
                    />
                  </h3>

                  {openIndex === index && <p className='text-gray-600'>{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
