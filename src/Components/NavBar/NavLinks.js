import React from 'react';
import {Link} from "react-router-dom";
import classes from './nav.css';
import {motion} from 'framer-motion';

function NavLinks(props) {

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return (
        <div>
            <ul className="nav-items">
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} onClick={() => props.isMobile && props.closeMobileMenu()} className='nav-li'><Link to='/'>Home</Link></motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.10}} onClick={() => props.isMobile && props.closeMobileMenu()} className='nav-li'><Link to='/about'>About Us</Link></motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.20}} onClick={() => props.isMobile && props.closeMobileMenu()} className='nav-li'><Link to='/contact-us'>Contact Us</Link></motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.30}} onClick={() => props.isMobile && props.closeMobileMenu()} className='li-quote'><Link to='/quote'>Get a Quote</Link></motion.li>
            </ul> 
        </div>
    );
}

export default NavLinks;