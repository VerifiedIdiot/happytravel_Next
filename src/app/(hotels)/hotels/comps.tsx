'use client'
import React, { useReducer, useEffect, ReactNode } from 'react'
import styles from '@/styles/sales/hotels.module.css'
import { fetchHotelList } from '@/api/hotel/ServerAPI'
import Pagination from '@/components/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { hotelReducer, hotelListState } from '@/reducers/hotel/HotelListReducer'
import { Hotel, HotelCntList, HotelAction } from '@/types/Hotel'

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

export const ItemSection = ({ children }: ItemSectionProps) => {
  const [state, dispatch] = useReducer<React.Reducer<HotelCntList, HotelAction>>(hotelReducer, hotelListState)

  useEffect(() => {
    const fetchData = async () => {
      const data: Hotel[] = await fetchHotelList()
      dispatch({ type: 'SET_HOTEL_LIST', payload: data })
      dispatch({ type: 'SET_HOTEL_CNT', payload: data.length })
      dispatch({ type: 'SET_TOTAL_PAGE', payload: Math.ceil(data.length / state.itemsPerPage) })
    }

    fetchData()
  }, [state.itemsPerPage])

  const handlePageChange = (page: number) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page })
  }

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const startIndex = (state.currentPage - 1) * state.itemsPerPage
  const endIndex = startIndex + state.itemsPerPage
  const currentItems = state.hotelList.slice(startIndex, endIndex)

  return (
    <div className='w-3/4 mt-16 mb-16'>
      <section className={styles.itemSection}>
        <div className={styles.itemLeftContainer}>{children}</div>
        <div className={styles.itemRightContainer}>
          <div className={styles.itemArea}>
            <div className={styles.itemBoxList}>
              {currentItems.length > 0 ? (
                currentItems.map((item: Hotel) => (
                  <div className={styles.itemCard} key={item.id}>
                    <div className={styles.imageContainer}>
                      <img src={item.imageUrl} alt={item.hotelName} />
                    </div>
                    <div className={styles.cardSection}>
                      <div className={styles.textContainer}>
                        <div className={styles.starRating}>
                          <h1>{item.hotelName}</h1>
                          <span>{renderStars(item.star)}</span>
                          <span className={styles.ratingText}>Rating</span>
                        </div>
                        <div>
                          <p>{item.price}원</p>
                        </div>
                      </div>
                      <div className={styles.detailContainer}>
                        <p>{item.detail}</p>
                      </div>
                      <div className='flex justify-center w-full '>
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
                  </div>
                ))
              ) : (
                <p>No items available</p>
              )}
            </div>
            <Pagination currentPage={state.currentPage} totalPage={state.totalPage} onPageChange={handlePageChange} />
          </div>
        </div>
      </section>
    </div>
  )
}
