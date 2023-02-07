import styles from '../styles/TMA.module.css'
import MusicMosaic from '../components/MusicMosaic'
import GifProject from '../components/GifProject'

export default function TMA295() {

  return (
    <>
      <div className={styles.container}>
        <GifProject />
        <MusicMosaic />
      </div>
    </>
  )
}