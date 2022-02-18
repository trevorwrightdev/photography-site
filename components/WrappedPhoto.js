import Image from 'next/image'

const WrappedPhoto = ({src, height, width}) => {
  return (
    <div style={{position: 'relative', height: height, width: width}}>
        <Image src={src} layout='fill' quality={100}/>
    </div>
  )
}

export default WrappedPhoto