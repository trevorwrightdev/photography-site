import styles from '../styles/CommunityCuration.module.css'
import Image from 'next/image'
import Adam from '../public/community-curation/Adam/Adam.png'

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
            <Image src={Adam} height={600} />
            <p className={styles.description}>
              My wife edited this photo of me, it turned out pretty cool 👌
            </p>
          </div>
          <div className={styles.column}>
            <h1>Adam</h1>
            <Image src={Adam} height={600} />
            <p className={styles.description}>
              My wife edited this photo of me, it turned out pretty cool 👌
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunityCuration
