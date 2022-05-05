import { useState, useContext } from 'react'
import MobileNav from './MobileNav'
import NavBar from './NavBar'
import ScreenContext from './ScreenContext'

const FullNav = () => {

    const [locked, setLocked] = useContext(ScreenContext)
    const [height, setHeight] = useState(0)
    const [menuIsOpen, setMenuOpen] = useState(false)

    const menuOpen = () => {
        setHeight('170px')
        setLocked(true)

        setTimeout(() => {
            setMenuOpen(true)
        }, 100)
    }

    const menuClose = () => {
        setHeight(0)
        setMenuOpen(false)
        setLocked(false)
    }
    
    return (
    <>
        <div className='navParent'>
            <NavBar closeMenu={menuIsOpen ? menuClose : null} clickEvent={menuIsOpen ? menuClose : menuOpen}/>
            <MobileNav closeMenu={menuClose} menuIsOpen={menuIsOpen} heightAnim={height}/>
        </div>
        <div className='navInvisible'></div>
    </>
    )
}

export default FullNav