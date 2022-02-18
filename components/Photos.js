import Image from 'next/image'
import { motion } from 'framer-motion'
import WrappedPhoto from './WrappedPhoto'

// * Photo imports
import janae1 from '../public/photos/IMG_0152.JPG'
import needle from '../public/photos/DSC09757.JPG'
import savannah1 from '../public/photos/DSC00253-2.jpg'
import rock from '../public/photos/DSC09546.JPG'

import styles from '../styles/Photography.module.css'

const Photos = ({animRight}) => {
  return (
    <div className={styles.overflowContainer}>
        <motion.div animate={{x: animRight}} transition={{type: 'spring', stiffness: 40}} className={styles.photoContainer}>
            {/* Column 1 */}
            <div className={styles.column}>
              <WrappedPhoto src={janae1} height='562.5px' width='450px'/>
              <WrappedPhoto src={savannah1} height='300.58px' width='450px'/>
            </div>
            {/* Column 2 */}
            <div className={styles.column}>
              <WrappedPhoto src={needle} height='300.75px' width='450px' />
              <WrappedPhoto src={needle} height='300.75px' width='450px' />
            </div>

            {/* Column 3 */}
            <div className={styles.column}>
              <WrappedPhoto src={needle} height='300.75px' width='450px' />
            </div>

        </motion.div>
    </div>
  )
}

export default Photos