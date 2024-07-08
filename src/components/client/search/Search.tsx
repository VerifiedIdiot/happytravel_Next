'use client'
import { useRef, useEffect } from 'react'
import styles from './search.module.css'

export const StyledSearch = () => {
  const inputData = useRef<HTMLInputElement>(null)
  const selectData = useRef<HTMLSelectElement>(null)

  const handleSearch = () => {
    if (inputData.current) {
      console.log(inputData.current.value)
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  useEffect(() => {
    if (inputData.current) {
      inputData.current.addEventListener('keydown', handleKeyDown)
    }
    if (selectData.current) {
      selectData.current.addEventListener('keydown', handleKeyDown)
    }

    // Clean up the event listener on component unmount
    return () => {
      if (inputData.current) {
        inputData.current.removeEventListener('keydown', handleKeyDown)
      }
      if (selectData.current) {
        selectData.current.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [])

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder='국가, 지역 등을 검색해주세요' 
        type='text' 
        autoComplete='off' 
        ref={inputData}
      />
      <select
        className={styles.customSelect}
        defaultValue='all'
        ref={selectData}
      >
        <option value='all' disabled hidden>Where?</option>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </select>
      <button 
        className={styles.button}
        onClick={handleSearch}
      >
        <h2 className={styles.buttonText}>Search</h2>
      </button>
    </div>
  )
}
