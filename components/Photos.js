import { motion } from 'framer-motion'
import WrappedPhoto from './WrappedPhoto'

// TODO: Use vw to make photo width, and then use vw to calculate photo height based on pixel ratio.

import styles from '../styles/Photography.module.css'

const Photos = ({animRight}) => {
  return (
    <div className={styles.overflowContainer}>
      <motion.div animate={{x: animRight}} transition={{type: 'spring', stiffness: 40}} className={styles.photoContainer}>
        {/* Column 1 */}
        <div className={styles.column}>
          <WrappedPhoto src='/photos/janae1.jpg' height='562.5px' width='450px'/>
          <WrappedPhoto src='/photos/savannah1.jpg' height='300.58px' width='450px'/>
          <WrappedPhoto src='/photos/dog1.jpg' height='360px' width='450px'/>
          <WrappedPhoto src='/photos/blueGirl.jpg' height='674px' width='450px'/>
          <WrappedPhoto src='/photos/harper1.jpg' height='300.5px' width='450px'/>
          <WrappedPhoto src='/photos/savannahBook.jpg' height='562.5px' width='450px'/>
          <WrappedPhoto src='/photos/savannahGlasses.jpg' height='673.7px' width='450px'/>
        </div>
        {/* Column 2 */}
        <div className={styles.column}>
          <WrappedPhoto src='/photos/needle.jpg' height='300.75px' width='450px' />
          <WrappedPhoto src='/photos/lake.jpg' height='562.5px' width='450px' />
          <WrappedPhoto src='/photos/rock.jpg' height='300.56px' width='450px' />
          <WrappedPhoto src='/photos/TimesSquareFinal.jpg' height='300.62px' width='450px' />
          <WrappedPhoto src='/photos/salt.jpg' height='562.4px' width='450px' />
          <WrappedPhoto src='/photos/canyon.jpg' height='300.57px' width='450px' />
          <WrappedPhoto src='/photos/steelwool.jpg' height='300px' width='450px' />
          <WrappedPhoto src='/photos/frozen.jpg' height='300.45px' width='450px' />
          <WrappedPhoto src='/photos/flip.jpg' height='300.57px' width='450px' />
        </div>

        {/* Column 3 */}
        <div className={styles.column}>
          <WrappedPhoto src='/photos/needle.jpg' height='300.75px' width='450px' />
        </div>
      </motion.div>
    </div>
  )
}

export default Photos