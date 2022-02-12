import { useState } from 'react'
import MobileNav from './MobileNav'
import NavBar from './NavBar'

const FullNav = () => {

    const [height, setHeight] = useState(0)
    const [menuIsOpen, setMenuOpen] = useState(false)

    const menuOpen = () => {
        setHeight('100%')
        setMenuOpen(true)
    }

    const menuClose = () => {
        setHeight(0)
        setMenuOpen(false)
    }
    
    return (
    <div>
        <NavBar clickEvent={menuIsOpen ? menuClose : menuOpen}/>
        <MobileNav menuIsOpen={menuIsOpen} heightAnim={height}/>
    </div>
    )
}

export default FullNav