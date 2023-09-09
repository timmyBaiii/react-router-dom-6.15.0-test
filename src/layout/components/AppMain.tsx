import React from 'react';
import { Outlet } from 'react-router-dom';

const AppMain: React.FC = () => {
    return (
        <div className='appMain'>
            <Outlet></Outlet>
        </div>
    );
};

export default AppMain;