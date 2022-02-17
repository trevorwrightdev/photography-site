import Image from 'next/image'
import { motion } from 'framer-motion'

// * Photo imports

import styles from '../styles/Photography.module.css'

// TODO: Make navbar not respect scrolling. This should be fairly simple... we should do the same with the mobile navbar to avoid
// TODO: issues where the content on the page may exceed the size of the mobile navbar. If it doesn't respect scrolling,
// TODO: then we they will be able to scroll but they won't be able to scroll past the menu...

const Photos = ({animRight}) => {
  return (
    <div className={styles.overflowContainer}>
        <motion.div animate={{x: animRight}} transition={{type: 'spring', stiffness: 70}} className={styles.photoContainer}>
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