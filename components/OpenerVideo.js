import openerVideo from '../public'

import styles from '../styles/Home.module.css'

// TODO: Make this work

const OpenerVideo = () => {
  return (
      <div className={styles.video}>
          <video src={openerVideo} autoplay muted loop></video>
      </div>
  );
};

export default OpenerVideo;
