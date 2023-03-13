import styles from '../styles/CommunityCuration.module.css'
import Image from 'next/image'
import Adam from '../public/community-curation/Adam/Adam.png'
import Ailed from '../public/community-curation/Ailed/Ailed.jpg'
import Amanda1 from '../public/community-curation/Amanda/Amanda 1.jpg'
import Amanda2 from '../public/community-curation/Amanda/Amanda 2.jpg'
import Amanda3 from '../public/community-curation/Amanda/Amanda 3.jpg'
import Amanda4 from '../public/community-curation/Amanda/Amanda 4.jpg'
import Brennan from '../public/community-curation/Brennan/Brennan Drawing.png'

const CommunityCuration = () => {
  return (
    <>
      <div className={styles.topContainer}>
        <h1>Community Curation Creation</h1>
        <h3>Mar 14, 2023</h3>
      </div>
      <div className={styles.carousel}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h1>Adam</h1>
            <div className={styles.imageContainer}>
              <Image src={Adam} fill style={{ objectFit: 'contain' }} alt=''/>
            </div>
            <p className={styles.description}>
              My wife edited this photo of me, it turned out pretty cool 👌
            </p>
          </div>
          <div className={styles.column}>
            <h1>Ailed</h1>
            <div className={styles.imageContainer}>
              <Image src={Ailed} fill style={{ objectFit: 'contain' }} alt=''/>
            </div>
            <p className={styles.description}>
              It is important to me because it was the first picture I took with
              a camera that wasn’t my phone.
            </p>
          </div>
          <div className={styles.column}>
            <h1>Amanda</h1>
            <div className={styles.imageRow}>
              <div className={styles.imageContainer}>
                <Image src={Amanda1} fill style={{ objectFit: 'contain' }} alt=''/>
              </div>
              <div className={styles.imageContainer}>
                <Image src={Amanda2} fill style={{ objectFit: 'contain' }} alt=''/>
              </div>
              <div className={styles.imageContainer}>
                <Image src={Amanda3} fill style={{ objectFit: 'contain' }} alt=''/>
              </div>
              <div className={styles.imageContainer}>
                <Image src={Amanda4} fill style={{ objectFit: 'contain' }} alt=''/>
              </div>
            </div>
            <p className={styles.description}>
              This was my art project in 2020. I painted my backyard walls for
              my kids. It’s special because I never thought in a million years I
              could actually create something so cool for my kids (I promise I’m
              not an artist that can draw). This painting represents my daughter
              Rose (it’s baby Moana). I also painted the garden wall as Bikini
              Bottom for Charlie. It’s definitely an art project I’m proud of,
              not only because I didn’t think I could do it but because of what
              it represents my family ♥️
            </p>
          </div>
          <div className={styles.column}>
            <h1>Brennan</h1>
            <div className={styles.imageContainer}>
              <Image src={Brennan} fill style={{ objectFit: 'contain' }} alt=''/>
            </div>
            <p className={styles.description}>
              I made this for my sister of my niece because I feel like there’s
              something about drawing a baby that helps artists understand human
              form in simple shapes and I wanted to practice that and color as
              well
            </p>
          </div>
          <div className={styles.column}>
            <h1>Brooke</h1>
            <video
                className={styles.vid}
                playsInline
                src='./community-curation/Brooke/Brooke-Video.mp4'
                controls
              ></video>
            <p className={styles.description}>
              I think the most recent thing I’ve made is this short film thingy
              😂 made it for a class assignment, it’s not good but it’s kinda
              funny
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunityCuration
