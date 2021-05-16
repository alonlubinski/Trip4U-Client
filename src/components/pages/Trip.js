import React from 'react'
import '../../App.css';
import LoggedNavbar from '../Navbar/LoggedNavbar';
import Footer from '../Footer/Footer';
import TripDisplaySection from '../Sections/TripDisplaySection/TripDisplaySection';


function Trip (props) {

    return (
        <>
            <LoggedNavbar/>
            <TripDisplaySection trip={props.location.state}/>
            <Footer/>
        </>
    );
}

export default Trip;