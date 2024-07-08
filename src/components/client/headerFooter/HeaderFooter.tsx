'use client'

import { ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './headerFooter.module.css'

const Header = ({ isVisible }: { isVisible: boolean }) => {
  const pathname = usePathname();

  return (
    <header className={`${styles.header} ${isVisible ? styles.headerVisible : styles.headerHidden}`}>
      <h1 className={styles.title}>Happy Travel</h1>
      <nav className={styles.navContainer}>
      
        <ul className={styles.navList}>
          <li>
            <Link href='/' className={pathname === '/' ? styles.navLinkActive : styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className={pathname === '/about' ? styles.navLinkActive : styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href='/tour' className={pathname === '/tour' ? styles.navLinkActive : styles.navLink}>
              Tour
            </Link>
          </li>
          <li>
            <Link href='/hotels' className={pathname === '/hotels' ? styles.navLinkActive : styles.navLink}>
              Hotels
            </Link>
          </li>
          <li>
            <Link href='/contact' className={pathname === '/contact' ? styles.navLinkActive : styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const DynamicHeader = ({ isVisible }: { isVisible: boolean }) => {
  const pathname = usePathname();

  return (
    <header className={`${styles.dynamicHeader} ${isVisible ? styles.dynamicHeaderVisible : styles.dynamicHeaderHidden}`}>
      <h1 className={styles.title}>Happy Travel</h1>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li>
            <Link href='/' className={pathname === '/' ? styles.navLinkDynamicActive : styles.navLinkDynamic}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/about' className={pathname === '/about' ? styles.navLinkDynamicActive : styles.navLinkDynamic}>
              About
            </Link>
          </li>
          <li>
            <Link href='/tour' className={pathname === '/tour' ? styles.navLinkDynamicActive : styles.navLinkDynamic}>
              Tour
            </Link>
          </li>
          <li>
            <Link href='/hotels' className={pathname === '/hotels' ? styles.navLinkDynamicActive : styles.navLinkDynamic}>
              Hotels
            </Link>
          </li>
          <li>
            <Link href='/contact' className={pathname === '/contact' ? styles.navLinkDynamicActive : styles.navLinkDynamic}>
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
    <footer className={styles.footer}>
      <p>&copy; 2024 정벼리,문지예</p>
    </footer>
  )
}

const HeaderFooter = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const hiddenPaths = ['/login', '/signup', '/another-path']
  const showHeaderAndFooter = !hiddenPaths.includes(pathname)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > window.innerHeight * 0.4) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {showHeaderAndFooter && <Header isVisible={!isScrolled} />}
      {showHeaderAndFooter && <DynamicHeader isVisible={isScrolled} />}
      {children}
      {showHeaderAndFooter && <Footer />}
    </>
  )
}

export default HeaderFooter
