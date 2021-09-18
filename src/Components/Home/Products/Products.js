import React from 'react'
import './products.css'
import WebPic from '../assets/domenico.jpg'

function Products() {
    return (
        <div className='products-container'>
            <h2>Services</h2>
            <div className="products-cards">
                <a target="_blank" href="https://wa.me/p/4418697368188832/27672050959">
                    <div className="p-card products-web">
                        <h3>Website</h3>
                        <p>R2500</p>
                    </div>
                </a>
                <a href="https://wa.me/p/3982713365166533/27672050959" target="_blank">
                    <div className="p-card products-app">
                    <h3>Mobile App</h3>
                    <p>R4500</p>
                    </div>
                </a>
                <a href="https://wa.me/p/6375689819122991/27672050959" target="_blank">
                    <div className="p-card products-design">
                    <h3>Web/App Design</h3>
                    <p>R1000</p>
                    </div>
                </a>
            </div>
            <div className="products-info">
                <ul className='products-info-li'>
                    <li>App and Web development prices can vary depending on how complex the application or website is. Features such as payment gateways, product pages, social networks, database design, web hosting, web domains, maintenance services and much more can increase the cost.</li>
                    <li>We estimate that the delivery time for Web and Mobile Apps may range from 30 to 45 days for less complex apps, and from 45 to 90 days for complex apps.</li>
                    <li>An invoice stating the cost of our services will be sent via email or WhatsApp once a completed app or website has been developed. As a preferred method of payment, Pulsewave Studios uses PayPal. Customers may be invoiced in US Dollars, yet feel assured that the amount they owe in Rands will exactly match the amount billed.</li>
                    <li>Communication of plans about feature sets, design and functionality of apps and websites with customers occurs via email, WhatsApp, Facebook, or LinkedIn during the design phase.</li>
                    <li>In order to maintain your website or app, we charge a small fee, depending on the complexity and size of the project. Should you require us to maintain your website or app, then you will be billed monthly via email or WhatsApp with an invoice attached.</li>
                </ul>
            </div>
        </div>
    )
}

export default Products
