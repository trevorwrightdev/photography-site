
import ScreenContext from '../components/ScreenContext'
import { useState } from 'react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [locked, setLocked] = useState(false)

  return (
    <ScreenContext.Provider value={[locked, setLocked]}>
      <div style={locked ? {overflowY: 'hidden'} : {}}>
        <Component {...pageProps} />
      </div>
    </ScreenContext.Provider>
  )
}

export default MyApp
