import Image from 'next/image'

const WrappedPhoto = ({src, height, width}) => {
  return (
    <div style={{position: 'relative', height: height, width: width, background: '#121212'}}>
        <Image src={src} layout='fill' quality={75} priority/>
    </div>
  )
}

export default WrappedPhoto