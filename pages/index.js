import Meta from '../components/Meta'
import OpenerVideo from '../components/OpenerVideo'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Meta title='Martinos'/>
      <OpenerVideo />
      <div className={styles.bottomBar}>
        <Link href='/photography'><p>PHOTOGRAPHY</p></Link>
        <Link href='/photography'><p>VIDEOGRAPHY</p></Link>
        <Link href='/photography'><p>ABOUT</p></Link>
        <Link href='/photography'><p>CONTACT</p></Link>
      </div>
    </>
  )
}
