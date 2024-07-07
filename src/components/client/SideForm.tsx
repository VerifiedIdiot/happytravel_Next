'use client'

import styles from '@/styles/sales/hotels.module.css'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Hotel } from '@/types/Hotel'
import { Country } from '@/types/Country'
import { fetchCountryList } from '@/api/hotel/ServerAPI'


const SideForm: React.FC = () => {

  
  const [countries, setCountries] = useState<Country[]>([]) 
  const [leftValue, setLeftValue] = useState<number>(1000)
  const [rightValue, setRightValue] = useState<number>(5000)
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const countryData = await fetchCountryList()
        setCountries(countryData)
      } catch (error) {
        console.error('Error fetching countries:', error)
      }
    }

    getCountries()
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  const handleLeftChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), rightValue - 10)
    setLeftValue(value)
  }

  const handleRightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), leftValue + 10)
    setRightValue(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const searchParams = {
      country: selectedOption,
      minPrice: leftValue,
      maxPrice: rightValue
    }

    // 검색 요청을 서버로 보냄
    // 예: fetch('/api/search', { method: 'POST', body: JSON.stringify(searchParams) })
    console.log(searchParams)
  }

  const leftPercent = ((leftValue - 0) / (120000 - 0)) * 100
  const rightPercent = ((rightValue - 0) / (120000 - 0)) * 100

  return (
    <div className={styles.itemSideBar}>
      <h3 className='text-2xl p-8'>Find City</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.formBox}>
            <input type='text' placeholder='Destination, City' />
          </div>
          <div className={styles.formBox}>
          <select id='hotel' value={selectedOption} onChange={handleChange}>
              <option value=''>Select a country</option>
              {countries.map((country) => (
                <option key={country.countryCode} value={country.koreanName}>
                  {country.koreanName}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.formBox}>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              placeholderText="Date from"
              className={styles.datePicker}
              wrapperClassName={styles.datePickerWrapper}
            />
          </div>
          <div className={styles.formBox}>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date)}
              placeholderText="Date to"
              className={styles.datePicker}
              minDate={startDate || undefined}
              disabled={!startDate}
              wrapperClassName={styles.datePickerWrapper}
            />
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
