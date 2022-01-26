import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

export const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <main>{children}</main> 
            <Footer/>
        </div>
    );
};

export default Layout;