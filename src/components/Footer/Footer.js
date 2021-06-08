import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/about'>How it works</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/terms'>Term Of Service</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
