import React from 'react';
import '../../App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import SignupSection from '../Sections/SignupSection/SignupSection';

function Signup() {
    return (
        <>
            <Navbar/>
            <SignupSection/>
            <Footer/>
        </>
    )
}

export default Signup;
