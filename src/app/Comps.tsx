import { PropsWithChildren, ReactNode } from 'react'
import Link from 'next/link'
import styles from '@/styles/home/home.module.css'
import { StyledSearch } from '@/components/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faBed, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'

const StyledLinkItems = () => {
  return (
    <div className='flex w-full h-1/4 items-center'>
      <Link href={'/flight'}>
        <button className={`${styles.button} ${styles.buttonFlight}`}>
          <FontAwesomeIcon icon={faPlane} className="buttonIcon mr-2" />
          <span className="buttonText">항공권</span>
        </button>
      </Link>
      <Link href={'/hotel'}>
        <button className={`${styles.button} ${styles.buttonHotel}`}>
          <FontAwesomeIcon icon={faBed} className="buttonIcon mr-2" />
          <span className="buttonText">숙소</span>
        </button>
      </Link>
      <Link href={'/agency'}>
        <button className={`${styles.button} ${styles.buttonGuide}`}>
          <FontAwesomeIcon icon={faSuitcaseRolling} className="buttonIcon mr-2" />
          <span className="buttonText">가이드</span>
        </button>
      </Link>
    </div>
  )
}

const Introduce = () => {
  return (
    <>
      <section className={styles.introSection}>
        <div className={styles.introTextContainer}>
          <h1 className='text-white text-5xl font-black '>나는한다 모험을</h1>
          <h1 className='text-white text-5xl mt-5'>너의 환성적인 여행지</h1>
          <h2 className='text-white text-xl mt-8 saturate-50'>
            찾아라 끝내주는 장소, 머뭄, 먹음, 상점 아니면 방문 에서부터 현지 경험을
          </h2>
        </div>
        <div className={styles.searchContainer}>
          <StyledSearch />
          <h2 className='text-white text-xl mt-8 saturate-50'>아니면 검색, 특징들</h2>
          <StyledLinkItems />
        </div>
      </section>
    </>
  )
}

export const SliderSection = ({ children }: { children: ReactNode }, props: PropsWithChildren) => {
  return (
    <>
      <section className={styles.imageSection}>
        <img className={styles.imageItem} src='/asset/image/bg_1.jpg.webp' alt='Company Image' />
        <Introduce />
      </section>
    </>
  )
}

export const ItemSection = ({ children }: { children: ReactNode }, props: PropsWithChildren) => {
  const departments = [
    { name: '부서1', link: '/department1', description: '부서1 설명', icon: '📁' },
    { name: '부서2', link: '/department2', description: '부서2 설명', icon: '📂' },
    { name: '부서3', link: '/department3', description: '부서3 설명', icon: '📊' },
    { name: '부서4', link: '/department4', description: '부서4 설명', icon: '📈' },
    
  ]
  return (
    <>
      <section className={styles.itemSection}>
        <div className={styles.itemContainer}>
          {departments.map((item, index) => (
            <div key={index} className={styles.infoItem}>
              <Link href={item.link}>
                <button className={styles.departmentInfo}>
                  {item.icon}
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
