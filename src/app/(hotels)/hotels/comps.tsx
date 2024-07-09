'use client'

import React, { useReducer, useEffect, ReactNode } from 'react'
import styles from '@/styles/sales/hotels.module.css'
import { fetchHotelList, hotelSearch } from '@/api/hotel/ServerAPI'
import Pagination from '@/components/Pagination'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { hotelReducer, hotelListState } from '@/reducers/hotel/HotelListReducer'
import { Hotel, HotelCntList, HotelAction } from '@/types/Hotel'
import { SideForm } from '@/components/client/SideForm'

export const IntroSection = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <div className={styles.itemArea}>
            <Link href='/' className={styles.itemBox}>
              HOME
            </Link>
            <p className={styles.itemBox}>HOTEL</p>
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
      try {
        const data: Hotel[] = await hotelSearch({})
        console.log('Fetched data:', data)
        dispatch({ type: 'SET_HOTEL_LIST', payload: data })
        dispatch({ type: 'SET_HOTEL_CNT', payload: data.length })
        dispatch({ type: 'SET_TOTAL_PAGE', payload: Math.ceil(data.length / state.itemsPerPage) })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
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

  const handleSearch = async (searchParams: any) => {
    try {
      const data: Hotel[] = await hotelSearch(searchParams)
      console.log('Fetched data:', data)
      dispatch({ type: 'SET_HOTEL_LIST', payload: data })
      dispatch({ type: 'SET_HOTEL_CNT', payload: data.length })
      dispatch({ type: 'SET_TOTAL_PAGE', payload: Math.ceil(data.length / state.itemsPerPage) })
      dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 })
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  console.log('Current items:', currentItems)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price)
  }

  return (
    <div className={styles.itemWrapper}>
      <section className={styles.itemSection}>
        <div className={styles.itemLeftContainer}>
          <SideForm onSearch={handleSearch} />
        </div>
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
                          <p>{formatPrice(item.price)}원</p>
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
                          <p className={styles.regionBox}>
                            {item.country}, {item.region}
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
