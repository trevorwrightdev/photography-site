import styles from '../styles/TMA.module.css'
import Image from 'next/image.js'
import Video from '../components/Video'
import glacier2 from '../public/mosaic/Glacier-2.jpg'
import glacier3 from '../public/mosaic/Glacier-3.jpg'
import glacier4 from '../public/mosaic/Glacier-4.jpg'
import glacier5 from '../public/mosaic/Glacier-5.jpg'
import glacier6 from '../public/mosaic/Glacier-6.jpg'
import glacier7 from '../public/mosaic/Glacier-7.jpg'
import glacier8 from '../public/mosaic/Glacier-8.jpg'
import glacier9 from '../public/mosaic/Glacier-9.jpg'
import glacier10 from '../public/mosaic/Glacier-10.jpg'
import glacier from '../public/mosaic/Glacier.jpg'

export default function TMA295() {

  return (
    <>
      <div className={styles.container}>
        <h1>Music Mosaic</h1>
        <Video src={'FgKNJycPTpo'}/>
        <div className={styles.grid}>
          <Image src={glacier} className={styles.photo}/>
          <Image src={glacier2} className={styles.photo}/>
          <Image src={glacier3} className={styles.photo}/>
          <Image src={glacier4} className={styles.photo}/>
          <Image src={glacier5} className={styles.photo}/>
          <Image src={glacier6} className={styles.photo}/>
          <Image src={glacier7} className={styles.photo}/>
          <Image src={glacier8} className={styles.photo}/>
          <Image src={glacier9} className={styles.photo}/>
          <Image src={glacier10} className={styles.photo}/>
        </div>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate est ipsum, sed sollicitudin mauris lacinia vel. Pellentesque tempor in sem quis facilisis. Aliquam iaculis suscipit dui, id venenatis lectus gravida a. Fusce porta malesuada lacus vitae porta. Etiam semper eleifend sodales. Etiam at egestas lacus. Sed convallis orci id hendrerit consequat. Aliquam eget fermentum lorem, quis ornare mauris. Proin nec blandit diam. Ut consequat ex eget diam feugiat fringilla ut eu dui. Aenean maximus lacus eget consectetur ullamcorper. Suspendisse in elit luctus, ultricies elit condimentum, maximus ligula. Etiam iaculis luctus mi ut aliquet. Donec at nibh quis arcu facilisis sollicitudin sed non nisi.</p>
      </div>
    </>
  )
}