import React from 'react';
import NavLinks from './NavLinks';
import {Link} from "react-router-dom";
import classes from './nav.css';

function Navigation() {
    return (
        <nav className="Navigation">
            <ul className="nav-items">
                <li className='nav-li'><Link to='/'>Home</Link></li>
                <li className='nav-li'><Link to='/about'>About Us</Link></li>
                <li className='nav-li'><Link to='/contact-us'>Contact Us</Link></li>
                <li className='li-quote'><Link to='/quote' style={{color:'white'}}>Get a Quote</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;