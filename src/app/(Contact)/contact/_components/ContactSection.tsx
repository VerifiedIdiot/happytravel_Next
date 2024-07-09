import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/contact/contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const ContactIntroSection = () => {
  return (
    <>
      <section className={styles.imageSection}>
        <Image
          src='/asset/image/island.webp'
          alt='contact Image'
          className={styles.imageItem}
          fill
          priority
          placeholder='blur'
          blurDataURL='/asset/image/island.webp'
        />
        <div className={styles.introItem}>
          <div className={styles.itemArea}>
            <Link href='/' className={styles.itemBox}>
              HOME
            </Link>
            <p className={styles.itemBox}>Contact</p>
          </div>
          <h1 className='text-white text-6xl font-black'>Contact</h1>
        </div>
      </section>
    </>
  )
}

export const ContactItemSection = () => {
  return (
    <>
      <section className={styles.itemSection}>
        <div className={styles.contactItem}>
          <div className='mb-8'>
            <h1>Contact Information</h1>
          </div>

          <div className='flex flex-col md:flex-row'>
            <div className={styles.profileContainer}>
              <div className={styles.profileBox}>
                <div className={styles.profileimage}>
                  <Image
                    src='/asset/profile/beri.jpg'
                    alt='profile Image'
                    className={styles.profileimage}
                    width={100}
                    height={100}
                    priority
                    placeholder='blur'
                    blurDataURL='/asset/image/profile/beri.jpg'
                  />
                </div>
                <div className='ml-4'>
                  <h1>정벼리</h1>
                  <br />
                  <p>lastofyears21@gmail.com</p>
                </div>
              </div>
              <div className={styles.profileBox}>
                <div className={styles.profileimage}>
                  <Image
                    src='/asset/profile/jiye.jpg'
                    alt='profile Image'
                    className={styles.profileimage}
                    width={100}
                    height={100}
                    priority
                    placeholder='blur'
                    blurDataURL='/asset/image/profile/jiye.jpg'
                  />
                </div>
                <div className='ml-4'>
                  <h1>문지예</h1>
                  <br />
                  <p>mjy6088@gmail.com</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col md:flex-col w-full md:w-2/3  p-12 bg-gray-100'>
              <h2 className='mb-4 font-semibold'>
                <FontAwesomeIcon icon={faGithub} /> 깃허브 주소
              </h2>
              <span>
                <a href='https://github.com/VerifiedIdiot/happytravel_Next.git' className={styles.itemLink}>
                  {' '}
                  - GitHub: HappyTravel_Next
                </a>
              </span>
              <br />
              <span>
                <a href='https://github.com/VerifiedIdiot/happytravel_springBoot.git' className={styles.itemLink}>
                  {' '}
                  - GitHub: HappyTravel_SpringBoot
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
