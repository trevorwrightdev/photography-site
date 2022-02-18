import { useState } from 'react'
import FullNav from '../components/FullNav'
import Subcategories from '../components/Subcategories'
import Photos from '../components/Photos'
import ReactTouchEvents from 'react-touch-events'

import styles from '../styles/Photography.module.css'

export default function Photography({ }) {

  const [state, setState] = useState(0)
  const [animRight, setRightAnim] = useState('0')
  const [swiped, setSwiped] = useState(false)

  const changeColumn = (num, distance) => {
    setState(num)
    setRightAnim(distance)
  }

  const swipe = (direction) => {
    if (direction === 'right') {
      setSwiped(true)
    } else if (direction === 'left') {
      setSwiped(false)
    }
  }

  return (
    <>
      <FullNav />
      <Subcategories state={state} click0={() => changeColumn(0, '0')} click1={() => changeColumn(1, '-33.33333%')} click2={() => changeColumn(2, '-66.66666%')}/>
      <div className={styles.invisNav}></div>
      <ReactTouchEvents onSwipe={swipe}>
        <Photos swiped={swiped} animRight={animRight}/>
      </ReactTouchEvents>
    </>
  )
}