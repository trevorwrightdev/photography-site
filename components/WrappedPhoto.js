import Image from 'next/image'

const WrappedPhoto = ({col, row, src, height, width}) => {
  return (
    <div style={{position: 'relative', height: height, width: width, gridColumn: col, gridRow: row}}>
        <Image src={src} layout='fill'/>
    </div>
  )
}

export default WrappedPhoto