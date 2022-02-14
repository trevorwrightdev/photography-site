import Image from "next/image";
import Link from 'next/link'
import { motion } from 'framer-motion'
import menuIcon from '../public/images/segment_white_24dp.svg'

const NavBar = ({ clickEvent }) => {
  return (
    <div className='nav'>
      <div className='menuIconContainer'>
        <Image onClick={clickEvent} src={menuIcon} layout='fill' />
      </div>
      <div className='sig'>
        <Link href='/'>
          <Image className='sigImage' src='/../public/lee-signature-new.png' layout='fill'/>
        </Link>
      </div>
      <div className='invisible'>

      </div>
    </div>
  );
};

export default NavBar;
