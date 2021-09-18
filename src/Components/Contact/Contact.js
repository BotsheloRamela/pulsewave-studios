import React from 'react'
import './contact.css'
import {Link} from "react-router-dom";
import emailjs from 'emailjs-com'
import Footer from '../Footer/Footer'

function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q5l99eo', 'contact-template', e.target,'user_SEFZ5DZYu97i1gDF8pTWq')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div>
        <div className="contact-container">
            <div className="contact-form">
            <h2>Contact Us</h2>
                <form className="form-right" onSubmit={sendEmail}>
                    <input type="text" required='required' className='field' placeholder='Full Name' name='name'/>
                    <input type="text" required='required' className='field' placeholder='Email Address' name='email'/>
                    <input type="text" className='field' placeholder='Phone Number' name='phone'/>
                    <textarea required='required' name="" id="" cols="30" rows="10" className='field area' placeholder='Your Message' name='message'></textarea>
                    <button className='btn' type='submit'>Send</button>
                    <p>By clicking send you agree to our <Link to='/privacy-policy'>Privacy Policy</Link> and <Link to='/terms-and-conditions'>Terms & Conditions</Link></p>
                </form>
            </div>    
        </div>
        <Footer />
        </div>
    )
}

export default Contact
