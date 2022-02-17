import Image from 'next/image'

const WrappedPhoto = ({col, src, height, width}) => {
  return (
    <div style={{position: 'relative', height: height, width: width, gridColumn: col}}>
        <Image src={src} layout='fill'/>
    </div>
  )
}

export default WrappedPhoto