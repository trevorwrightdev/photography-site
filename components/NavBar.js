import Image from "next/image";

import menuIcon from '../public/images/segment_white_24dp.svg'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='menuIconContainer'>
        <Image src={menuIcon} layout='fill' />
      </div>
    </div>
  );
};

export default NavBar;
