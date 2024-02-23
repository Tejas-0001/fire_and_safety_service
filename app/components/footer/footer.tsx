import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="w-auto h-96 pt-8 pb-0 pl-16 pr-16 bg-[#282A2C]">
      <div className='flex flex-row justify-between pt-6'>
        <div className='flex flex-col w-4/12'>
          <Image src="/logo_w.svg" width={82} height={25} alt='logo'></Image>
          <p className='text-[#C9C9C9] mt-10'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident</p>
        </div>
        <div className='flex flex-col w-4/12'>
          <p className='mt-11 text-white'>dummy@gmail.com</p>
          <p className='text-[#C9C9C9] mt-4'>Unicare Fire Safety (India) Pvt. Ltd.C-34, Sector 65, Noida-201301, Delhi (NCR), (U.P).</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.social}>
          <div className={styles.socialmedia}>
            <div className={styles.icondiv}>
              <img className='ml-1' src="/f.svg" width={12} height={20} alt='icon'></img>
            </div>
          </div>
          <div className={styles.socialmedia}>
            <div className={styles.icondiv}>
              <img src="/x.svg" width={20} height={20} alt='icon'></img>
            </div>
          </div>
          <div className={styles.socialmedia}>
            <div className={styles.icondiv}>
              <img src="/linkedin.svg" width={20} height={20} alt='icon'></img>
            </div>
          </div>
          <div className={styles.socialmedia}>
            <div className={styles.icondiv}>
              <img src="/insta.svg" width={20} height={20} alt='icon'></img>
            </div>
          </div>
        </div>
        <div className={styles.trademark}>© 2021 - DummyCompany</div>
      </div>
    </div>
  )
}

export default Footer