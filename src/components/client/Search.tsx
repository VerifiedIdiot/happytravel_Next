'use client'
import { useRef, useEffect } from 'react'

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
    <>
      <div className='flex w-full h-20 rounded'>
        <input
          className='flex justify-center items-center h-full w-2/5 shadow-xl p-3 border-2 border-customRed outline-none rounded'
          placeholder='국가, 지역, 호텔 등을 검색해주세요' 
          type='text' 
          autoComplete='off' 
          ref={inputData}
        />
        <select
          className='flex justify-center items-center h-full w-2/5 shadow-xl p-3 border-2 border-customRed outline-none '
          defaultValue='all'
          ref={selectData}
        >
            <option value='' disabled>Where?</option>
          <option></option>
        </select>
        <button 
          className='flex justify-center items-center h-full w-1/5 bg-customRed rounded '
          onClick={handleSearch}
        >
          <h2 className='text-white'>Search</h2>
        </button>
      </div>
    </>
  )
}
