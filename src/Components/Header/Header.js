import React from 'react';
import {Link} from "react-router-dom";
import Logo from  '../Assets/kodak-film-logo-png-transparent.png'
import './style.css'

const Header = () => {
    return (
        <header className={'header'}>
            <Link to={'/'}>
                <img className={'logo'} src={Logo} alt=""/>
            </Link>
            <nav className={'nav'}>
                <Link to={'/'}>Home</Link>
                <Link to={'/search'}>Search</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contacts'}>Contacts</Link>
            </nav>
        </header>
    );
};

export default Header;