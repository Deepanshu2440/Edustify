import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () =>{
    return(
        <div className="hero container">
            <div className="hero-text">
                <h1>We ensure better education for a better world</h1>
                <p>Our cutting-edge curriculam is designed to empower students with knowledge , skills, and experiences needed to excel in dynamic field of education</p>
                <button className="btn">Expore more<img src={dark_arrow} alt=""/></button>
            </div>
        </div>
    )
}

export default Hero