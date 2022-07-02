import React from 'react'
import './footer.css'
import LogoSymbol from '../NavBar/assets/LogoSymbol.png'
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <footer>
                <div className="footer-logo">
                    <img src={LogoSymbol} alt="" />
                    <h1>Pulsewave Studios</h1>
                </div>
                
                <div className="footer-links">
                    <ul className="footer-link-list">
                        <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                        <li><Link to='/terms-and-conditions'>Terms & Conditions</Link></li>
                    </ul>
                </div>

                <div className="foot-copyright">
                    <p>Copyright &copy; 2022, Pulsewave Studios. All Rights Reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
