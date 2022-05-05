import styles from '../styles/Videography.module.css'

const Video = ({src}) => {
  return (
    <iframe className={styles.video} width="560" height="315" src={`https://www.youtube.com/embed/${src}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
}

export default Video