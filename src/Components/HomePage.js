import React from 'react'
import Hero from './Home/Hero/HeroSection'
import Start from './Home/StartSomething/StartSomething'
import Products from './Home/Products/Products'
import WhyUs from './Home/WhyUs/WhyUs'
import MeetTheTeam from './Home/Team/MeetTheTeam'
import Quote from './Home/QuoteBar/Quote'
import Footer from './Footer/Footer'

function HomePage() {
    return (
        <div>
            <Hero />
            <Start />
            <Products />
            <WhyUs />
            <MeetTheTeam />
            <Quote />
            <Footer />
        </div>
    )
}

export default HomePage
