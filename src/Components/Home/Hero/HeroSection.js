import React from 'react'
import './hero.css'
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <div className='hero-section'>
                <div className='hero-container'>
                    <div className='hero-text'>
                        <div className='hero-text'>
                            <h2>We Code Your Dream To Reality...</h2>
                        </div>
                        <div className='hero-introduction'>
                            <p>Pulsewave Studios | Web & App Development Company</p>
                            
                        </div>
                        <div className='hero-btn'>
                            <Link to='/quote'><button>Get a Quote</button></Link>
                            <Link to='/contact-us'><button>Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
