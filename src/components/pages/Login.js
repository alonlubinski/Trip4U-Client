import React from 'react';
import '../../App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import LoginSection from '../Sections/LoginSection/LoginSection';

function Login() {
    return (
        <>
            <Navbar/>
            <LoginSection/>
            <Footer/>
        </>
    )
}

export default Login;