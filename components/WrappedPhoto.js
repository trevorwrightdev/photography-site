import Image from 'next/image'

import styles from '../styles/Photography.module.css'

const WrappedPhoto = ({col, row, src, height, width}) => {
  return (
    <div style={{position: 'relative', height: height, width: width, gridColumn: col, gridRow: row}}>
        <Image src={src} layout='fill'/>
    </div>
  )
}

export default WrappedPhoto