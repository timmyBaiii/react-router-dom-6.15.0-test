import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.sass';

const Navbar: React.FC = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <NavLink to='/'>home</NavLink>
                </li>

                <li>
                    <NavLink to='/about'>about</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;