import React from 'react'
import './quote.css'
import {Link} from "react-router-dom";
import emailjs from 'emailjs-com';
import Footer from '../Footer/Footer'

function Quote() {

    const sendQuote = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q5l99eo', 'quote-template', e.target,'user_SEFZ5DZYu97i1gDF8pTWq')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div>
            <div className="quote-form-container">
                <div className="quote-card">
                    <div className="quote-card-socials">
                        <h1>Get a Quote</h1>
                        <p>Fill up the form and our team will get back to you within 48 hours.</p>
                    </div>
                    <form onSubmit={sendQuote} className="quote-card-form">
                        <input type="text" required='required' className='field' placeholder='Full Name' name='name'/>
                        <input type="text" className='field' placeholder='Business Name (optional)' name='business-name'/>
                        <input type="text" required='required' className='field' placeholder='Email Address' name='email'/>
                        <input type="text" className='field' placeholder='Phone Number' name='phone'/>
                        <input type="text" className='field' placeholder='Budget' name='budget'/>
                        <input type="text" className='field' placeholder='Product (e.g. Website, App)' name='product'/>
                        <input type="text" className='field' placeholder='Type of site (e.g. Blog, E-Commerce)' name='type-of-site'/>
                        <button className='btn' type='submit'>Send</button>
                        <p className='quote-p-btn'>By clicking send you agree to our <Link to='/privacy-policy'>Privacy Policy</Link> and <Link to='/terms-and-conditions'>Terms & Conditions</Link></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Quote
