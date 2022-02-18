import Image from 'next/image'
import { motion } from 'framer-motion'
import WrappedPhoto from './WrappedPhoto'

// * Photo imports
// import janae1 from '../public/photos/janae1.jpg'
// import needle from '../public/photos/needle.jpg'
// import savannah1 from '../public/photos/savannah1.jpg'
// import savannahBook from '../public/photos/savannahBook.jpg'
// import savannahGlasses from '../public/photos/savannahGlasses.jpg'
// import rock from '../public/photos/rock.jpg'
// import dog1 from '../public/photos/dog1.jpg'
// import lake from '../public/photos/lake.jpg'
// import ellie from '../public/photos/blueGirl.jpg'
// import harper1 from '../public/photos/harper1.jpg'
// import timesSquare from '../public/photos/TimesSquareFinal.jpg'
// import canyon from '../public/photos/canyon.jpg'
// import steelWool from '../public/photos/steelwool.jpg'
// import salt from '../public/photos/salt.jpg'
// import frozen from '../public/photos/frozen.jpg'
// import flip from '../public/photos/flip.jpg'

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