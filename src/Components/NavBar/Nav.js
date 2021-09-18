import React, { Component, useState } from 'react';
import classes from './nav.css';
import LogoSymbol from './assets/LogoSymbol.png'
import {Link} from "react-router-dom";
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

function Nav(){

    return(
        <div className='nav-bar'>
            <div className='nav-logo'>
                <img src={LogoSymbol} alt="Pulsewave Studios Logo" />
                <h1>Pulsewave Studios</h1> 
            </div>
            <div className={classes.navBar}>
                <Navigation />
                <MobileNavigation />
            </div>
            
        </div>
    )

}

export default Nav