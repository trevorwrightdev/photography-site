import { useState, useContext } from 'react'
import MobileNav from './MobileNav'
import NavBar from './NavBar'
import ScreenContext from './ScreenContext'

const FullNav = () => {

    const [locked, setLocked] = useContext(ScreenContext)
    const [menuIsOpen, setMenuOpen] = useState(false)

    const menuOpen = () => {
        setLocked(true)
        setMenuOpen(true)        
    }

    const menuClose = () => {
        setMenuOpen(false)
        setLocked(false)
    }
    
    return (
    <>
        <div className='navParent'>
            <NavBar closeMenu={menuIsOpen ? menuClose : null} clickEvent={menuIsOpen ? menuClose : menuOpen}/>
            <MobileNav closeMenu={menuClose} menuIsOpen={menuIsOpen}/>
        </div>
        <div className='navInvisible'></div>
    </>
    )
}

export default FullNav