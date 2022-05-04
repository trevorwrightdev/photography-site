import styles from '../styles/Home.module.css'

const OpenerVideo = () => {

  return (
    <div className={styles.videoContainer}>
      <video style={{height: '100%', width: '100%', objectFit: 'cover'}} src='./web-vid.mp4' muted loop autoPlay></video>
    </div>
  );
};

export default OpenerVideo;
