import Image from 'next/image'
import { motion } from 'framer-motion'

// * Photo imports

import styles from '../styles/Photography.module.css'

const Photos = ({animRight}) => {
  return (
    <div className={styles.overflowContainer}>
        <motion.div animate={{x: animRight}} transition={{type: 'spring', stiffness: 80}} className={styles.photoContainer}>
            {/* Column 1 */}
            <div className={`${styles.square} ${styles.col1}`}></div>
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