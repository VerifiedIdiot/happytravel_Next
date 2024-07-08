import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/home/home.module.css'
import { StyledSearch } from '@/components/client/search/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlane,
  faBed,
  faSuitcaseRolling,
  faHandHoldingDollar,
  faHeart,
  faRankingStar,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons'
import { fetchCountryCount, fetchTopPackages } from '@/api/home/ServerAPI'
import { CountryCount, TopPackage } from '@/types/Home'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const StyledSlider = dynamic(() => import('@/components/client/slick/Carousel'), {
  ssr: false,
  suspense: true,
});

const StyledTop5List = dynamic(() => import('@/components/client/Top5Item/Top5Items'), {
  ssr: false,
  suspense: true,
});

const SubscribeEmail = dynamic(() => import('@/components/client/SubscribeEmail/SubscribeEmail'), {
  ssr: false,
  suspense: true,
});



const StyledLinkItems = () => {
  return (
    <div className='flex w-full h-1/4 items-center'>
      <Link href={'/flight'}>
        <button className={`${styles.button} ${styles.buttonFlight}`}>
          <FontAwesomeIcon icon={faPlane} className='buttonIcon mr-2' />
          <span>항공권</span>
        </button>
      </Link>
      <Link href={'/hotel'}>
        <button className={`${styles.button} ${styles.buttonHotel}`}>
          <FontAwesomeIcon icon={faBed} className='buttonIcon mr-2' />
          <span>숙소</span>
        </button>
      </Link>
      <Link href={'/agency'}>
        <button className={`${styles.button} ${styles.buttonGuide}`}>
          <FontAwesomeIcon icon={faSuitcaseRolling} className='buttonIcon mr-2' />
          <span>가이드</span>
        </button>
      </Link>
    </div>
  )
}

const Introduce = () => {
  // const { ref, inView, entry } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // })
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
          <Suspense>
          <StyledSearch />
          </Suspense>
          <h2 className='text-white text-xl mt-8 saturate-50'>아니면 검색, 특징들</h2>
          <StyledLinkItems />
        </div>
      </section>
    </>
  )
}

export const SliderSection = () => {
  return (
    <>
      <section className={styles.imageSection}>
        <Image
          src='/asset/image/bg_1.jpg.webp'
          alt='Company Image'
          className={styles.imageItem}
          width={1920}
          height={1280}
          priority
          placeholder='blur'
          blurDataURL='/asset/image/bg_1.jpg.webp'
        />
        <Introduce />
      </section>
    </>
  )
}

export const ItemSection = () => {
  // const { ref, inView, entry } = useInView({
  //   triggerOnce: true,
    
  // })

  const departments = [
    {
      name: '최저 가격 보장',
      link: '/department1',
      description: '항상 최적의 가격의 상품을 보장합니다',
      icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    },
    {
      name: '사랑해용 뿡뿡',
      link: '/department2',
      description: '부서2 설명',
      icon: <FontAwesomeIcon icon={faHeart} />,
    },
    {
      name: '업계 1위',
      link: '/department3',
      description: '부서3 설명',
      icon: <FontAwesomeIcon icon={faRankingStar} />,
    },
    {
      name: '연중무휴 24시간',
      link: '/department4',
      description: '부서4 설명',
      icon: <FontAwesomeIcon icon={faHeadset} />,
    },
  ]
  return (
    <>
       <section className={styles.itemSection}>
        <div className={styles.itemContainer}>
          {departments.map((item, index) => (
            <div key={index} className={styles.infoItem}>
              <button className={styles.departmentInfo}>
                <h1>{item.icon}</h1>
                <h2>{item.name}</h2>
                <h3>{item.description}</h3>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export const FeaturedSection = async () => {
  const data: CountryCount[] = await fetchCountryCount()

  return (
    <>
      <section className={styles.featuredSection}>
        <div className={styles.featuredContainer}>
          <div className={styles.textArea}>
            <p className='text-gray-400'>Featured</p>
            <h2 className='text-4xl' style={{ marginTop: '1.5vw' }}>
              <strong className='font-bold mr-5'>Featured</strong>Destination
            </h2>
          </div>
          <div className={styles.carouselContainer}>
            <Suspense>
            <StyledSlider data={data} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}

export const TopPackagesSection = async () => {
  const data: TopPackage[] = await fetchTopPackages()

  return (
    <>
      <section className={styles.topPackageSection}>
        <div className={styles.topPackageContainer}>
          <div className={styles.packageTextArea}>
            <p className='text-gray-400'>Special Offers</p>
            <h2 className='text-4xl' style={{ marginTop: '1.5vw' }}>
              <strong className='font-bold mr-5'>Top</strong>Tour Packages
            </h2>
          </div>
          <div className={styles.packageContainer}>
            <Suspense>
            <StyledTop5List data={data} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}

export const SubscribeSection = async () => {
  // const { ref, inView, entry } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // })

  return (
    <>
      <section className={styles.subscribeSection}>
        <div className={styles.subscribeContainer}>
          <div className={styles.subscribeTextArea}>
            <h2>Subcribe to our Newsletter</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in
            </p>
            <div className={styles.inputArea}>
              <Suspense><SubscribeEmail /></Suspense>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
