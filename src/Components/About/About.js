import React from 'react'
import './about.css'
import Footer from '../Footer/Footer'
import lozad from 'lozad'

function About() {
    const observer = lozad();
    observer.observe();
    return (
        <div className="about-container">
            <div className="about-hero lozad">
                <h1>About Us</h1>
            </div>
            <div className="about-info">
                <div className="about-info-who">
                    <h2>Who Are We?</h2>
                    <p>Based in Johannesburg, Gauteng, South Africa, we are a Web and App development company. Because the business is conducted entirely online, we do not have a physical address. The Pulsewave Studios team is comprised of individuals with experience in Software Development and design who are devoted to providing affordable services for individuals and businesses. </p>
                </div>
                <div className="about-info-vision">
                    <h2>Our Vision</h2>
                    <p>To bring innovation and enhancement in the field of app & web development while helping individuals and businesses develop mobile & web apps that provide an innovative way to connect with customers and attract new customers at a very affordable price. Creating web design solutions that communicate your unique brand identity while being easy-to-use, attractive, and driving results for your business is our goal. We don't just develop websites and apps like everyone else...</p>
                </div>
                <div className="about-info-ceo">
                    <h2>The CEO (Chief Executive Officer)</h2>
                    <p>Pulsewave Studios was founded by Botshelo Ramela in 2018 when he was just 13 years old. The company's origins date back to an independent studio that developed games. Adding Web & App Development to the company's menu of services led to a change of direction early in 2020 following a change in interest among the CEO. A top goal of our CEO is to offer individuals and businesses web and app solutions that are beneficial.</p>
                </div>
                {/* <div className="about-info-coo">
                    <h2>The Marketing Director</h2>
                    <p>Mohamed Aaqil Khan, Pulsewave Studios' Marketing Director, has long been close friends with the CEO. After joining Pulsewave Studios in mid-2021 as Content Lead of the company at age 16, he was later promoted to Marketing Director for his entrepreneurial spirit and problem solving skills that caught the attention of the CEO.</p>
                </div> */}
            </div>
        </div>
    )
}

export default About
