'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-blue-600 text-white flex justify-between items-center h-16 z-10' >
      <h1 className='text-2xl font-bold ml-6'>Happy Travel</h1>
      <nav>
        <ul className='flex space-x-4 mr-6'>
          <li>
            <Link href='/' className='hover:text-gray-200'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/package' className='hover:text-gray-200'>
              Package
            </Link>
          </li>
          <li>
            <Link href='/partner' className='hover:text-gray-200'>
              Partner
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className='w-full bg-gray-800 text-white flex justify-center items-center h-20'>
      <p>&copy; 2024 정벼리 </p>
    </footer>
  )
}

const HeaderFooter = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const hiddenPaths = ['/login', '/signup', '/another-path']
  const showHeaderAndFooter = !hiddenPaths.includes(pathname)

  return (
    <>
      {showHeaderAndFooter && <Header />}
      {children}
      {showHeaderAndFooter && <Footer />}
    </>
  )
}

export default HeaderFooter
