import { useState } from 'react'
import FullNav from '../components/FullNav'
import Subcategories from '../components/Subcategories'
import Photos from '../components/Photos'

export default function Photography({ }) {

  const [state, setState] = useState(0)
  const [animRight, setRightAnim] = useState('0')

  const changeColumn = (num, distance) => {
    setState(num)
    setRightAnim(distance)
  }

  return (
    <>
      <FullNav />
      <Subcategories state={state} click0={() => changeColumn(0, '0')} click1={() => changeColumn(1, '-33.33333%')} click2={() => changeColumn(2, '-66.66666%')}/>
      <Photos animRight={animRight}/>
    </>
  )
}