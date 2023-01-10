import Image from "next/image";
import Link from 'next/link'
import signature from './../public/lee-signature-new.png'
import menuIcon from '../public/images/segment_white_24dp.svg'

const NavBar = ({ clickEvent, closeMenu }) => {
  return (
    <div className='nav'>
      <div className='menuIconContainer'>
        <Image onClick={clickEvent} src={menuIcon} layout='fill'/>
      </div>
      <div onClick={closeMenu} className='sig'>
        <Link href='/'>
          <Image className='sigImage' src={signature} layout='fill'/>
        </Link>
      </div>
      <div className='invisible'></div>
    </div>
  );
};

export default NavBar;
