import React from 'react'
import './technologies.css'
import lozad from 'lozad'
import Img1 from './assets/FirebaseLogo.png'
import Img2 from './assets/ReactLogo.png'
import Img3 from './assets/PythonLogo.png'
import Img4 from './assets/FlutterLogo.png'

function TechnologiesWeUse() {
    const toolsArray =[Img1, Img3, Img4];  
    const observer = lozad();
    observer.observe();
    return (
        <div className="tools-container">
            <h2>Technologies We Use</h2>
            <div className="tools">
                <img src={Img2} height="60" width="100" />
                {
                    toolsArray.map((index) => <img src={index} height="45" width="120"/>)
                }
            </div>
        </div>
    )
}

export default TechnologiesWeUse
