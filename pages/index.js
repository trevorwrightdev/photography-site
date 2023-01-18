import OpenerVideo from '../components/OpenerVideo'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <OpenerVideo />
        <div className={styles.bottomBar}>
          <Link href='/photography'><p>PHOTOGRAPHY</p></Link>
          <Link href='/videography'><p>VIDEOGRAPHY</p></Link>
          <Link href='/TMA295'><p>TMA 295</p></Link>
          <Link href='/about'><p>ABOUT</p></Link>
          <Link href='/contact'><p>CONTACT</p></Link>
        </div>
      </div>
    </>
  )
}
