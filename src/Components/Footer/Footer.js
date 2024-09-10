import React from 'react';
import Logo from '../Assets/kodak-film-logo-png-transparent.png';
import { Link } from "react-router-dom";
import './style.css'; // Ensure this path is correct

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/">
                <img className="logo" src={Logo} alt="Logo" />
            </Link>
            <div className="contact-info">
                <p>+97646464</p>
                <p>username@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
