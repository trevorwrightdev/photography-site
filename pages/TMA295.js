import styles from '../styles/TMA.module.css'
import MusicMosaic from '../components/MusicMosaic'
import GifProject from '../components/GifProject'
import TwinePoetry from '../components/TwinePoetry'

export default function TMA295() {

  return (
    <>
      <div className={styles.container}>
        <TwinePoetry />
        <div className={styles.separator}/>
        <GifProject />
        <div className={styles.separator}/>
        <MusicMosaic />
      </div>
    </>
  )
}