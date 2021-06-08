import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import { Button } from '../../Button/Button';
import './LandingSection.css';

function LandingSection() {
    return (
        <div className="landing-container">
            <h1>Trip<span className="landing-green">4</span>U</h1>
            <p>What are you waiting for?</p>
            <div className='landing-btns'>
                <Link to="/login">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        Get Started
                    </Button>
                </Link>
                <Link to="/about">
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        Who We Are?
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingSection;
