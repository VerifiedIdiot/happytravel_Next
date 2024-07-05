'use client'

import styles from '@/styles/sales/hotels.module.css'
import { useState } from 'react'

const SideForm = () => {
  const [leftValue, setLeftValue] = useState<number>(1000)
  const [rightValue, setRightValue] = useState<number>(5000)
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleLeftChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), rightValue - 10)
    setLeftValue(value)
  }

  const handleRightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), leftValue + 10)
    setRightValue(value)
  }

  const leftPercent = ((leftValue - 0) / (120000 - 0)) * 100
  const rightPercent = ((rightValue - 0) / (120000 - 0)) * 100

  return (
    <div className={styles.itemSideBar}>
      <h3 className='text-2xl p-8'>Find City</h3>
      <form action=''>
        <div className={styles.formContainer}>
          <div className={styles.formBox}>
            <input type='text' placeholder='Destination, City' />
          </div>
          <div className={styles.formBox}>
          <select id="hotel" value={selectedOption} onChange={handleChange}>
              <option>대한민국1</option>
              <option>대한민국2</option>
              <option>대한민국3</option>
            </select>
          </div>
          <div className={styles.formBox}>
            <input type='text' placeholder='Date from' />
          </div>
          <div className={styles.formBox}>
            <input type='text' placeholder='Date to' />
          </div>
          <div className={styles.formBox}>
            <div className={styles.rangeValues}>
              <span className={styles.rangeValueLeft}>{leftValue}</span>&nbsp;-&nbsp;
              <span className={styles.rangeValueRight}>{rightValue}</span>
            </div>
            <div className={styles.formRange}>
              <div className='slider'>
                <input
                  type='range'
                  id='input-left'
                  min='0'
                  max='120000'
                  step='500'
                  value={leftValue}
                  onChange={handleLeftChange}
                />
                <input
                  type='range'
                  id='input-right'
                  min='0'
                  max='120000'
                  step='500'
                  value={rightValue}
                  onChange={handleRightChange}
                />
                <div className='track'>
                  <div className='range' style={{ left: `${leftPercent}%`, right: `${100 - rightPercent}%` }}></div>
                  <div className='thumb left' style={{ left: `${leftPercent}%` }}></div>
                  <div className='thumb right' style={{ right: `${100 - rightPercent}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formBox}>
            <input type='submit' value='Search' className={styles.submitButton} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default SideForm
