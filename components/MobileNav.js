import { useState } from 'react'

import { motion } from 'framer-motion'

const MobileNav = ({ heightAnim }) => {



    return (
    <motion.div className='mobileNav' animate={{height: heightAnim}} transition={{duration: 0.3}}>

    </motion.div>
    )
}

export default MobileNav