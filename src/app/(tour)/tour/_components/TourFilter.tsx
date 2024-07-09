'use client'
import styles from '@/styles/tour/tour.module.css'
import DatePicker from 'react-datepicker';
import { FormEvent, useRef } from 'react'

export const TourFilter = () => {
  const inputSearch = useRef<HTMLInputElement>(null)
  const selectLocation = useRef<HTMLSelectElement>(null)
  const selectDateFrom = useRef<HTMLInputElement>(null)
  const selectDateTo = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {}

  return (
    <>
      <div className={styles.tourFilterItem}>
        <h3 className='text-2xl'>FIND PACKAGE</h3>
        <form className='h-full w-full' onSubmit={handleSubmit}>
          <div className={styles.filterWrapper}>
            <input className={styles.filterContent} type='text' placeholder='국가, 지역을 입력해 주세요'>
            </input>
            <select className={styles.filterContent} id='package'>
              <option>지역을 선택해주세요</option>
              <option>ㅎㅎ</option>
            </select>
            <DatePicker
              // selected={startDate}
              // onChange={(date: Date | null) => setStartDate(date)}
              placeholderText="Date from"
              className={styles.filterContent}
              // wrapperClassName={styles.datePickerWrapper}
            />
              <DatePicker
              // selected={startDate}
              // onChange={(date: Date | null) => setStartDate(date)}
              placeholderText="Date from"
              className={styles.filterContent}
              // wrapperClassName={styles.datePickerWrapper}
            />
              <input
                  type='range'
                  id='input-left'
                  min='0'
                  max='120000'
                  step='500'
                  // value={leftValue}
                  // onChange={handleLeftChange}
                />
                <input
                  type='range'
                  id='input-right'
                  min='0'
                  max='120000'
                  step='500'
                  // value={rightValue}
                  // onChange={handleRightChange}
                />
                <button type='submit' value='Search' className={styles.searchBtn}></button>
          </div>
        </form>
      </div>
    </>
  )
}
