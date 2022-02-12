import ReactPlayer from 'react-player'
import styles from '../styles/Home.module.css'

// TODO: Make this work

const OpenerVideo = () => {

  return (
    <div className={styles.videoContainer}>
      <ReactPlayer className={styles.video} width='100%' height='100%' url="https://player.vimeo.com/video/674320696?h=f4f1f6f2b1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" controls={false} muted playing loop/>
    </div>
  );
};

export default OpenerVideo;
