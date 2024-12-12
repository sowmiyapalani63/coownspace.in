// Layout.js
import React from 'react';
import Navbar from '../Common/Header';
import Footer from '../../Components/Common/footer'

const Layout = ({ children }) => {
    return (
        <div>
            {/* <Navbar /> */}
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
