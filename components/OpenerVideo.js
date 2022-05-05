import styles from '../styles/Home.module.css'

const OpenerVideo = () => {

  return (
    <div className={styles.videoContainer}>
      <video className={styles.vid} playsInline src='./web-vid.mp4' muted loop autoPlay></video>
    </div>
  );
};

export default OpenerVideo;
