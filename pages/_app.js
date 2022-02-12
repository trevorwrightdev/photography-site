
import FullNav from '../components/FullNav'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FullNav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
