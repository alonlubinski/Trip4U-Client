import React from 'react'
import '../../App.css';
import LoggedNavbar from '../Navbar/LoggedNavbar';
import Footer from '../Footer/Footer';
import ProfileSection from '../Sections/ProfileSection/ProfileSection';

function Profile () {
    return (
        <>
            <LoggedNavbar/>
            <ProfileSection/>
            <Footer/>
        </>
    );
}

export default Profile;