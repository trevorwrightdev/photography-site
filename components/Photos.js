import Image from 'next/image'
import { motion } from 'framer-motion'
import WrappedPhoto from './WrappedPhoto'

// * Photo imports
import janae1 from '../public/photos/IMG_0152.JPG'
import needle from '../public/photos/DSC09757.JPG'
import savannah1 from '../public/photos/DSC00253-2.jpg'
import savannahBook from '../public/photos/DSC09199.jpg'
import savannahGlasses from '../public/photos/DSC00283.jpg'
import rock from '../public/photos/DSC09546.JPG'
import dog1 from '../public/photos/DSC09789.JPG'
import lake from '../public/photos/DSC09074.JPG'
import ellie from '../public/photos/IMG_0162.JPG'
import harper1 from '../public/photos/harper1.JPG'
import timesSquare from '../public/photos/TimesSquareFinal.JPG'
import canyon from '../public/photos/IMG_0145.JPG'

import styles from '../styles/Photography.module.css'

const Photos = ({animRight}) => {
  return (
    <div className={styles.overflowContainer}>
        <motion.div animate={{x: animRight}} transition={{type: 'spring', stiffness: 40}} className={styles.photoContainer}>
            {/* Column 1 */}
            <div className={styles.column}>
              <WrappedPhoto src={janae1} height='562.5px' width='450px'/>
              <WrappedPhoto src={savannah1} height='300.58px' width='450px'/>
              <WrappedPhoto src={dog1} height='360px' width='450px'/>
              <WrappedPhoto src={ellie} height='674px' width='450px'/>
              <WrappedPhoto src={harper1} height='300.5px' width='450px'/>
              <WrappedPhoto src={savannahBook} height='562.5px' width='450px'/>
              <WrappedPhoto src={savannahGlasses} height='673.7px' width='450px'/>
            </div>
            {/* Column 2 */}
            <div className={styles.column}>
              <WrappedPhoto src={needle} height='300.75px' width='450px' />
              <WrappedPhoto src={lake} height='562.5px' width='450px' />
              <WrappedPhoto src={rock} height='300.56px' width='450px' />
              <WrappedPhoto src={timesSquare} height='300.62px' width='450px' />
              <WrappedPhoto src={canyon} height='300.57px' width='450px' />
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