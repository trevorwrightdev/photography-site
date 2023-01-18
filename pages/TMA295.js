import { getPhotos } from '../utils/photos.js'

export default function TMA295() {

  return (
    <>
        Hello
    </>
  )
}

export async function getServerSideProps() {
    const photos = await getPhotos()
    console.log(photos)
    return {
      props: {}, // will be passed to the page component as props
    }
  }