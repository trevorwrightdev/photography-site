import { useState } from 'react'
import FullNav from '../components/FullNav'
import Subcategories from '../components/Subcategories'
import Photos from '../components/Photos'


export default function Photography({ }) {

  const [state, setState] = useState(0)

  return (
    <>
      <FullNav />
      <Subcategories state={state} click0={() => setState(0)} click1={() => setState(1)} click2={() => setState(2)}/>
      <Photos />
    </>
  )
}