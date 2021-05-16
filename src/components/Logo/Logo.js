import React from 'react';
import mainLogo from '../../images/Logo.JPG';
import './Logo.css';

const logo = (props) => (
    <div className="Logo">
        <img src={mainLogo} alt="Trip4U"/>
    </div>
);

export default logo;