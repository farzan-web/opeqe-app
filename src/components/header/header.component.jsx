import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

import './header.styles.scss';

import Navbar from '../navbar/navbar.component';
import LogoSvg from '../svg-icon/logo-svg';


const Header = () => (
    <div className='header'>
        <BrowserRouter>
            <Link className='logo' to="/">
                <span>
                    <LogoSvg /> 
                </span>
            </Link>
            
            <Navbar />
        </BrowserRouter>        
    </div>
);

export default Header;