'use client'
import { useRef, useEffect } from 'react'
import styles from './subscribeEmail.module.css'

const SubscribeEmail = () => {
  const inputData = useRef<HTMLInputElement>(null)
  const errorTextRef = useRef<HTMLParagraphElement>(null)

  const handleSearch = () => {
    if (inputData.current) {
      const email = inputData.current.value
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (emailRegex.test(email)) {
        console.log('Valid email:', email)
        if (errorTextRef.current) {
          console.log('Valid email format')
        }
      } else {
        console.log('Invalid email format')
      }
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

    // Clean up the event listener on component unmount
    return () => {
      if (inputData.current) {
        inputData.current.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <input
          className={styles.styledInput}
          placeholder='Enter email address'
          type='text'
          autoComplete='off'
          ref={inputData}
        />
        <button className={styles.styledSearch} onClick={handleSearch}>
          <h3 className='text-white'>Subscribe</h3>
        </button>
      </div>
    </>
  )
}

export default SubscribeEmail
