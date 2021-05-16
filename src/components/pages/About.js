import React from 'react';
import '../../App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AboutSection from '../Sections/AboutSection/AboutSection';

function About() {
    return (
        <div>
            <Navbar/>
            <AboutSection/>
            <Footer/>
        </div>
    )
}

export default About;
