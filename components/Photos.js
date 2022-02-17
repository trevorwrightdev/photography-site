import Image from 'next/image'
import { motion } from 'framer-motion'
import WrappedPhoto from './WrappedPhoto'

// * Photo imports
import janae1 from '../public/photos/IMG_0152.JPG'
import needle from '../public/photos/DSC09757.JPG'
import savannah1 from '../public/photos/DSC00253-2.jpg'

import styles from '../styles/Photography.module.css'

const Photos = ({animRight}) => {
  return (
    <div className={styles.overflowContainer}>
        <motion.div animate={{x: animRight}} transition={{type: 'spring', stiffness: 70}} className={styles.photoContainer}>
            {/* Column 1 */}
            <WrappedPhoto col={1} src={janae1} height='562.5px' width='450px'/>
            <WrappedPhoto col={1} src={savannah1} height='300.58px' width='450px'/>
            {/* Column 2 */}
            <WrappedPhoto col={2} src={needle} height='300.75px' width='450px'/>

            {/* Column 3 */}

        </motion.div>
    </div>
  )
}

export default Photos