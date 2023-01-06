import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ------------------------MOBILE-VIEW----------------------/> */}
      <div className={styles.home}>
        <div className={styles.hero}>
          <div className={styles.image}>
            <Image src="/hero.png" width={320} height={297} alt="hero" />
          </div>
          <div className={styles.blur}></div>
          <div className={styles.texts}>
            <h1 className={styles.one}>We Sell</h1>
            <h1 className={styles.two}>The Best</h1>
            <h3 className={styles.three}>Just for</h3>
            <h2 className={styles.four}>YOU</h2>
          </div>
          <Link href="/shop">
            <div className={styles.cta}>
              <p>SHOP NOW</p>
            </div>
          </Link>
        </div>
        <p className={styles.text}>All that you need...</p>
        <div className={styles.hanging}>
          <div className={styles.cloth}>
            <Image
              src="/hang.png"
              width={326}
              height={191}
              alt="hanging shirt"
            />
          </div>
          <div className={styles.discount}>
            <p className={styles.discounter}>50% discount</p>
          </div>
        </div>
      </div>

      {/* ------------------------DESKTOP-VIEW----------------------/> */}

    </>
  );
}
