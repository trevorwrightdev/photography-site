import { motion } from 'framer-motion'
import WrappedPhoto from './WrappedPhoto'

//TODO: Use vw to make photo width, and then use vw to calculate photo height based on pixel ratio.

import styles from '../styles/Photography.module.css'

const Photos = ({animRight}) => {
  return (
    <div className={styles.overflowContainer}>
      <motion.div drag='x'/*animate={{x: animRight}}*/ transition={{type: 'spring', stiffness: 40}} className={styles.photoContainer}>
        {/* Column 1 */}
        <div className={styles.column}>
          <WrappedPhoto src='/photos/janae1.jpg' ratio={1.25}/>
          <WrappedPhoto src='/photos/savannah1.jpg' ratio={0.67}/>
          <WrappedPhoto src='/photos/dog1.jpg' ratio={0.8}/>
          <WrappedPhoto src='/photos/blueGirl.jpg' ratio={1.5}/>
          <WrappedPhoto src='/photos/harper1.jpg' ratio={0.67}/>
          <WrappedPhoto src='/photos/savannahBook.jpg' ratio={1.25}/>
          <WrappedPhoto src='/photos/savannahGlasses.jpg' ratio={1.5}/>   
        </div>
        {/* Column 2 */}
        <div className={styles.column}>
          <WrappedPhoto src='/photos/needle.jpg' ratio={0.67}/>
          <WrappedPhoto src='/photos/lake.jpg' ratio={1.25}/>
          <WrappedPhoto src='/photos/rock.jpg' ratio={0.67}/>
          <WrappedPhoto src='/photos/TimesSquareFinal.jpg' ratio={0.67}/>
          <WrappedPhoto src='/photos/salt.jpg' ratio={1.25}/>
          <WrappedPhoto src='/photos/canyon.jpg' ratio={0.67}/>
          <WrappedPhoto src='/photos/steelwool.jpg' ratio={0.67}/>
          <WrappedPhoto src='/photos/frozen.jpg' ratio={0.67}/>
          <WrappedPhoto src='/photos/flip.jpg' ratio={0.67}/>
        </div>

        {/* Column 3 */}
        <div className={styles.column}>
          <WrappedPhoto src='/photos/needle.jpg' ratio={0.67}/>
        </div>
      </motion.div>
    </div>
  )
}

export default Photos