import Link from 'next/link'
import { motion } from 'framer-motion'

const MobileNav = ({menuIsOpen, closeMenu }) => {

    const variant = {
        hidden: {
            height: '0px',
            width: '0px',
            marginLeft: '180px',
            transition: {
                type: 'spring',
                stiffness: 100
            }
        },
        visible: {
            height: '170px',
            width: '185px',
            marginLeft: '0px',
            transition: {
                type: 'spring',
                stiffness: 200,
                mass: 0.3,
            }
        }
    }


    return (
    <motion.div className='mobileNav' animate={menuIsOpen ? 'visible' : 'hidden'} variants={variant}>
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