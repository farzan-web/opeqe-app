import React from 'react';

import './footer.styles.scss';

import {Link} from 'react-router-dom';

import FoodImg from '../svg-icon/foods.png';
import AppstoreSvg from '../svg-icon/appstore-svg';
import GoogleplaySvg from '../svg-icon/googleplay-svg';
import LogoSvg from '../svg-icon/logo-svg-white';


const Footer = () => (
    <div className='footer'>
        <div className='center'>
            <img className='image' src={FoodImg} alt='food' />
        </div>
        <div className='footer-nav'>
            <div className='logo-container'>
                <Link className='logo' to="/">
                    <span className='logo'>
                        <AppstoreSvg /> 
                    </span>
                </Link>

                <Link className='logo' to="/">
                    <span className='logo'>
                        <GoogleplaySvg /> 
                    </span>
                </Link>
            </div>

            <div className='options'>
                    <Link className='foption' to='/'>
                        About
                    </Link>
                    <Link className='foption' to='/'>
                        Services
                    </Link>
                    <Link className='foption' to='/'>
                        Support
                    </Link>
                    <Link className='foption' to='/'>
                        Gallery
                    </Link>
                    <Link className='foption' to='/'>
                        Terms
                    </Link>
                    <Link className='foption' to='/'>
                        Locations
                    </Link>
            </div>
        </div>

        <div className='footer-nav2'>
            <div className='nav2-preview'>
                <div>
                    <Link className='logo' to="/">
                        <span>
                            <LogoSvg /> 
                        </span>

                        <h1 className='white title snd1'>Profile</h1>
                        <p className='gray pointer'>Promos & Credits</p>
                        <p className='gray pointer'>Rewards</p>
                    </Link>
                </div>
                <div>
                    <h1 className='title white'>Main Menu</h1>
                    <p className='gray pointer'>Pickup</p>

                    <h1 className='white title snd2'>Special Offers</h1>
                    <p className='gray pointer'>Chief Special</p>
                    <p className='gray pointer'>Breakfast Special</p>
                </div>
                <div>
                    <h1 className='white title'>Orders</h1>
                    <p className='gray pointer'>Upcoming Orders</p>
                    <p className='gray pointer'>Recent Orders</p>

                    <h1 className='white title snd3'>Support</h1>
                    <p className='gray pointer'>Contact Us</p>
                    <p className='gray pointer'>Live Chat</p>
                </div>
                <div>
                    <h1 className='white title'>Reservation</h1>
                    <p className='gray pointer'>Recent Reservation</p>
                    <p className='gray pointer'>Wait To Be Seated</p>
                </div>
                <div>

                </div>
            </div>
        </div>

        <div className='footer-lastpara'>
            <p className='gray-light'>Delight customers everywhere with a branded custom-built native iOS, native Android and Installable Website Application.</p>
            <p className='gray' style={{marginTop:'-10px'}}>Opeqe is reliable, fast and commission free all-in-one ordering solutions for multi-location or single location restaurants.</p>
            <p className='gray'>©2019 OPEQE INC | <span className='pointer'>Terms & Conditions</span> |  <span className='pointer'>Privacy Policy</span></p>
        </div>

    </div>
);

export default Footer;