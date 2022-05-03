import Link from 'next/link'
import { motion } from 'framer-motion'

const MobileNav = ({ heightAnim, menuIsOpen, closeMenu }) => {


    return (
    <motion.div className='mobileNav' animate={{height: heightAnim}} transition={{duration: 0.25}}>
        <div className='mobileNavWords' style={menuIsOpen ? {display: 'flex'} : {display: 'none'}}>
            <Link href='/photography'><h1 onClick={closeMenu}>PHOTOGRAPHY</h1></Link>
            <Link href='/videography'><h1 onClick={closeMenu}>VIDEOGRAPHY</h1></Link>
            <Link href='/about'><h1 onClick={closeMenu}>ABOUT</h1></Link>
            <Link href='/contact'><h1 onClick={closeMenu}>CONTACT</h1></Link>
        </div>
    </motion.div>
    )
}

export default MobileNav