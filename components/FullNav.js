import { useState } from 'react'
import MobileNav from './MobileNav'
import NavBar from './NavBar'

const FullNav = () => {

    const [height, setHeight] = useState(0)
    const [menuIsOpen, setMenuOpen] = useState(false)

    const menuOpen = () => {
        setHeight('92vh')
        setMenuOpen(true)
    }

    const menuClose = () => {
        setHeight(0)
        setMenuOpen(false)
    }
    
    return (
    <>
        <div className='navParent'>
            <NavBar clickEvent={menuIsOpen ? menuClose : menuOpen}/>
            <MobileNav menuIsOpen={menuIsOpen} heightAnim={height}/>
        </div>
        <div className='navInvisible'></div>
    </>
    )
}

export default FullNav