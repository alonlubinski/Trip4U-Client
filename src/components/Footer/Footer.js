import React from 'react';
import { Button } from '../Button/Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the adventure
                </p>
                <p className='footer-subscription-text'>
                    Join the adventure text
                </p>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>About</Link>
                        <Link to='/'>Term Of Service</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
