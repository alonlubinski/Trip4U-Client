import React from 'react'
import '../../App.css';
import LoggedNavbar from '../Navbar/LoggedNavbar';
import Footer from '../Footer/Footer';
import BuildTripSection from '../Sections/BuildTripSection/BuildTripSection';

function BuildTrip () {
    return (
        <>
            <LoggedNavbar/>
            <BuildTripSection/>
            <Footer/>
        </>
    );
}

export default BuildTrip;