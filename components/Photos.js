import Image from 'next/image'

// * Photo imports

import styles from '../styles/Photography.module.css'

const Photos = () => {
  return (
    <div className={styles.overflowContainer}>
        <div className={styles.photoContainer}>
            {/* Column 1 */}
            <div className={`${styles.square} ${styles.col1}`}></div>
            {/* Column 2 */}
            <div className={`${styles.square} ${styles.col2}`}></div>
            <div className={`${styles.square} ${styles.col2}`}></div>

            {/* Column 3 */}
            <div className={`${styles.square} ${styles.col3} ${styles.row1}`}></div>
        </div>
    </div>
  )
}

export default Photos