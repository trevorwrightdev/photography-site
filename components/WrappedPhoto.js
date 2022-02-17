import Image from 'next/image'

const WrappedPhoto = ({src, photoClass}) => {
  return (
    <div className={photoClass} style={{position: 'relative'}}>
        <Image src={src} layout='fill'/>
    </div>
  )
}

export default WrappedPhoto