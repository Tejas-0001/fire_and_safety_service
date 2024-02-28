import React from 'react'
import styles from "./hero.module.css"
import Link from 'next/link'
const Hero = () => {
  return (
    <>
    <div className={styles.herosection}>
      <div className={styles.herosectiontext}>
        <div className={styles.herotitle}>Pioneering Safety Excellence</div>
        <div className={styles.herotext}>Redefine safety standards with our revolutionary fire solutions, meticulously engineered to safeguard lives and property.</div>
      </div>
      <div className={styles.herobtn}>        
        <Link href={"/contactUs"}><div className={styles.herotbntext} style={{color:"white"}}>Contact Us</div></Link>
      </div>
      </div>

      <div className={styles.herofooter}>
        <div className={styles.herofootertext}>
          <div className={styles.fact}>
            <div className={styles.no}>17+</div>
            <div className={styles.title}>AWARDS REWARDED</div>
          </div>
          <div className={styles.fact}>
            <div className={styles.no}>23+</div>
            <div className={styles.title}>YEARS OF EXPERIENCE</div>
          </div>
          <div className={styles.fact}>
            <div className={styles.no}>183+</div>
            <div className={styles.title}>HAPPY CLIENTS</div>
          </div>
          <div className={styles.fact}>
            <div className={styles.no}>315+</div>
            <div className={styles.title}>COMPLETED PROJECT</div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Hero