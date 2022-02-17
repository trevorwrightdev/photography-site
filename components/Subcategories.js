import { useState } from 'react'

import styles from '../styles/Photography.module.css'

// * Use useState to control 3 states which will show the correct images. 
// * These states will also control the underlined attribute for each title

const Subcategories = ({state, click0, click1, click2}) => {

  return (
    <>
      <div className={styles.subcategories}>
        <h2 className={styles.subTitles} onClick={click0} style={state === 0 ? {textDecoration: 'underline'} : {}}>PEOPLE</h2>
        <h2 className={styles.subTitles} onClick={click1} style={state === 1 ? {textDecoration: 'underline'} : {}}>PLACES</h2>
        <h2 className={styles.subTitles} onClick={click2} style={state === 2 ? {textDecoration: 'underline'} : {}}>THINGS</h2>
      </div>
    </>
  )
}

export default Subcategories