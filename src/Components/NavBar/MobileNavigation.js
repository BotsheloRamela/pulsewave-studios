import React, {useState} from 'react';
import NavLinks from './NavLinks';
import  './nav.css';
import {BiMenuAltRight} from 'react-icons/bi';
import {IoMdClose} from 'react-icons/io';


function MobileNavigation() {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <BiMenuAltRight className="Hamburger" size='50px' color="white" onClick={() => setOpen(true)}/>;

    const closeIcon = <IoMdClose className="Hamburger" size='50px' color="white" onClick={() => setOpen(!true)}/>

    const closeMobileMenu = () => setOpen(false); 

    return (
        <nav className="MobileNavigation">
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}

export default MobileNavigation;