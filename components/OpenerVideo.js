import styles from '../styles/Home.module.css'

const OpenerVideo = () => {

  return (
    <div className={styles.videoContainer}>
      <video className={styles.vid} style={{height: '115%', width: '100%', objectFit: 'cover'}} src='./web-vid.mp4' muted loop autoPlay></video>
    </div>
  );
};

export default OpenerVideo;
