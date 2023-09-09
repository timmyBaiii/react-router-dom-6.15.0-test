import React from 'react';

// components
import Navbar from './components/Navbar';
import AppMain from './components/AppMain';

const Layout: React.FC = () => {
    return (
        <div className='appWapper'>
            <Navbar></Navbar>
            <AppMain></AppMain>
        </div>
    );
};

export default Layout;