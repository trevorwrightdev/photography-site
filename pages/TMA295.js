import styles from '../styles/TMA.module.css'
import MusicMosaic from '../components/MusicMosaic'
import GifProject from '../components/GifProject'
import TwinePoetry from '../components/TwinePoetry'
import CommunityCuration from '../components/CommunityCuration'
import TextualPoaching from '../components/TextualPoaching'

export default function TMA295() {

  return (
    <>
      <div className={styles.container}>
        <TextualPoaching />
        <div className={styles.separator}/>
        <CommunityCuration />
        <div className={styles.separator}/>
        <TwinePoetry />
        <div className={styles.separator}/>
        <GifProject />
        <div className={styles.separator}/>
        <MusicMosaic />
      </div>
    </>
  )
}