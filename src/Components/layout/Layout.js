import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './style.css'

const Layout = ({children}) => {
    return (
        <div className={'layout-wrapper'}>
            <Header/>
            <main className={'main'}>
                <div className={'container'}>
                    {children}
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;