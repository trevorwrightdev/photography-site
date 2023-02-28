import styles from '../styles/Twine.module.css'

const TwinePoetry = () => {
  return (
    <>
      <div className={styles.topContainer}>
          <h1>Music Mosaic</h1>
          <h3>Jan 24, 2023</h3>
      </div>
      <iframe src='./twine.html' style={{ border: 'none', width: '100%', height: '300px' }}/>
    </>
  )
}

export default TwinePoetry