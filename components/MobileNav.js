import Link from 'next/link'
import { motion } from 'framer-motion'

const MobileNav = ({ heightAnim, menuIsOpen }) => {



    return (
    <motion.div className='mobileNav' animate={{height: heightAnim}} transition={{duration: 0.25}}>
        <div className='mobileNavWords' style={menuIsOpen ? {display: 'flex'} : {display: 'none'}}>
            <Link href='/photography'><h1>PHOTOGRAPHY</h1></Link>
            <h1>VIDEOGRAPHY</h1>
            <h1>ABOUT</h1>
            <h1>CONTACT</h1>
        </div>
    </motion.div>
    )
}

export default MobileNav