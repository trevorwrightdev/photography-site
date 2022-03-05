
import ScreenContext from '../components/ScreenContext'
import { useState, useEffect } from 'react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [locked, setLocked] = useState(false)

  useEffect(() => {
    if (locked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
    
  }, [locked])

  return (
    <ScreenContext.Provider value={[locked, setLocked]}>
      <Component {...pageProps} />
    </ScreenContext.Provider>
  )
}

export default MyApp
