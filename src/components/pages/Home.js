import React from 'react';
import '../../App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LandingSection from '../Sections/LandingSection/LandingSection';

function Home () {
    return (
        <>
            <Navbar/>
            <LandingSection/>
            <Footer/>
        </>
    );
}

export default Home;