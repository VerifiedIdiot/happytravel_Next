'use client'

import { ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Header = ({ showHeader, pathname }: { showHeader: boolean, pathname: string }) => {
  const isHomePage = pathname === '/';
  return (
    <header className={`fixed top-0 left-0 w-full ${isHomePage ? 'bg-transparent' : 'bg-blue-600'} text-white flex justify-between items-center h-32 text-2xl transition-all duration-300 ${showHeader ? 'flex' : 'hidden'} z-20 `}>
      <h1 className='text-2xl font-bold ml-96'>Happy Travel</h1>
      <nav className='flex justify-center w-3/5'>
        <ul className='flex justify-around mr-8 w-full'>
          <li>
            <Link href='/' passHref className='hover:text-gray-300'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className='hover:text-gray-300'>
              About
            </Link>
          </li>
          <li>
            <Link href='/tour' className='hover:text-gray-300'>
              Tour
            </Link>
          </li>
          <li>
            <Link href='/hotels' className='hover:text-gray-300'>
              Hotels
            </Link>
          </li>
          <li>
            <Link href='/contact' className='hover:text-gray-300'>
              Contact
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
      <p>&copy; 2024 </p>
    </footer>
  )
}

const HeaderFooter = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const hiddenPaths = ['/login', '/signup', '/another-path']
  const showHeaderAndFooter = !hiddenPaths.includes(pathname)
  const [showHeader, setShowHeader] = useState<boolean>(true) // 동적 헤더입니다, 나중에 false로 바꿔서 스크롤 이벤트시 등장하게 만들 수 있음
  
  // 추후에  스크롤에 맞춰서 헤더를 등장시키고 싶으면 사용할 useEffect 훅
  // useEffect(() => {
  //   if (pathname !== '/') return

  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition < 20) {
  //       setShowHeader(false)
  //     } else {
  //       setShowHeader(true)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [pathname])

  return (
    <>
      {showHeaderAndFooter && <Header showHeader={showHeader} pathname={pathname} />}
      {children}
      {showHeaderAndFooter && <Footer />}
    </>
  )
}

export default HeaderFooter
