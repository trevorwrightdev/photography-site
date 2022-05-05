import Video from '../components/Video'

import styles from '../styles/Videography.module.css'

export default function Videography({ }) {
  return (
    <>
      <div className={styles.container}>
        <h1>VIDEOGRAPHY</h1>
        <Video src='1oBCU72on4s'/>
        <Video src='4PHKYYP2s80'/>
        <Video src='4ybo06IDkIY'/>
        <Video src='D9UaCyckZms'/>
      </div>
    </>
  )
}