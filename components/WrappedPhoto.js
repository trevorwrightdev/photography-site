import Image from 'next/image'

const WrappedPhoto = ({src, ratio}) => {



  return (
    <div style={{position: 'relative', height: `calc(${ratio} * 90vw)`, width: '90vw', background: '#121212'}}>
        <Image src={src} layout='fill' quality={75} priority/>
    </div>
  )
}

export default WrappedPhoto