import Meta from '../components/Meta'
import ScreenContext from '../components/ScreenContext'
import { useState, useEffect } from 'react'
import FullNav from '../components/FullNav'
import BottomNav from '../components/BottomNav'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [locked, setLocked] = useState(false)
  
  // ! Technically context doesn't need to be used for this, but it was good practice.

  useEffect(() => {
    // if (locked) {
    //   document.body.style.overflow = 'hidden'
    // } else {
    //   document.body.style.overflow = 'visible'
    // }
    
  }, [locked])

  return (
    <ScreenContext.Provider value={[locked, setLocked]}>
      <Meta title='Lee Martin'/>
      <FullNav />
      <Component {...pageProps} />
      <BottomNav />
    </ScreenContext.Provider>
  )
}

export default MyApp
