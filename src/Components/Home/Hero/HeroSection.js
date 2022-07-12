import React from 'react'
import './hero.css'
import LogoSymbol from '../assets/LogoSymbol.png'
import {Link} from "react-router-dom";
import lozad from 'lozad'

function Home() {
    const observer = lozad();
    observer.observe();
    return (
        <div>
            <div className='hero-section lozad'>
                <div className='hero-container'>
                    <div className='hero-text'>
                        <div className='hero-text'>
                        {/* <div className='nav-logo2'>
                            <img src={LogoSymbol} alt="Pulsewave Studios Logo" />
                            <h1>Pulsewave Studios</h1> 
                        </div> */}
                            <h4>We Code Your Dream To Reality...</h4>
                        </div>
                        <div className='hero-introduction'>
                            <p>Pulsewave Studios | Software Development Company</p>
                            
                        </div>

                        <div className="social-links">
                            <ul className='start-social-links'>
                                <li><a target='_blank' href="https://wa.me/message/P3DJOCYG5364H1"><i class="fab fa-whatsapp"></i></a></li>
                                <li><a target='_blank' href="https://www.facebook.com/PulsewaveStudios"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a target='_blank' href="https://www.linkedin.com/company/pulsewave-studios"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>

                        <div className='hero-btn'>
                            <Link to='/quote'><button style={{backgroundColor: "#CB34D7"}}>Get a Quote</button></Link>
                            <Link to='/contact-us'><button >Contact Us</button></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
