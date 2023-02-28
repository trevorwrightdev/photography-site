import styles from '../styles/Twine.module.css'

const TwinePoetry = () => {
  return (
    <>
      <div className={styles.topContainer}>
          <h1>Twine Poetry</h1>
          <h3>Feb 27, 2023</h3>
      </div>
      <iframe src='./twine/twine.html' style={{ border: 'none', width: '100%', height: '900px' }} className={styles.iframe}/>
      <p className={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </>
  )
}

export default TwinePoetry