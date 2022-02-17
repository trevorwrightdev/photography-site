import Image from 'next/image'
import { motion } from 'framer-motion'
import WrappedPhoto from './WrappedPhoto'

// * Photo imports
import janae1 from '../public/photos/IMG_0152.JPG'

import styles from '../styles/Photography.module.css'

// TODO: If we want to, we can try the no scrolling thing on the navbar. It would just require some reconfiguration.

const Photos = ({animRight}) => {
  return (
    <div className={styles.overflowContainer}>
        <motion.div animate={{x: animRight}} transition={{type: 'spring', stiffness: 70}} className={styles.photoContainer}>
            {/* Column 1 */}
            <WrappedPhoto className={styles.col1} src={janae1} photoClass={styles.janae1} />
            {/* Column 2 */}
            <div className={`${styles.square} ${styles.col2}`}></div>
            <div className={`${styles.square} ${styles.col2}`}></div>

            {/* Column 3 */}
            <div className={`${styles.square} ${styles.col3} ${styles.row1}`}></div>
        </motion.div>
    </div>
  )
}

export default Photos