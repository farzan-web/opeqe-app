import React from 'react';

import Carousel from 'react-elastic-carousel';

import './home-slider.styles.scss';

const HomeSlider = () => (
    <div className='home-slider'>
        <img src={'https://demo.opeqe.com/static/media/HomeHeader.d4396cb2.jpg'} alt='home-slider' />
        <div className='slider'>
            <Carousel itemsToShow={1} showArrows={false} enableAutoPlay={true} enableTilt={true}>
            <div className='slider-details'>
                <h1>Chief Special</h1>
                <h3>Get $10 off when you order $20 or more T-Bone Steak & Eggs</h3>
                <p className='sp-btn'>Use <span>Chief Special</span></p>
            </div>
            <div className='slider-details'>
                <h1>Breakfast Special</h1>
                <h3>Get 15% off when you order 3 or more Blueberry Pancake Breakfast</h3>
                <p className='sp-btn'>Use <span>Breakfast Special</span></p>
            </div>
            </Carousel>
        </div>
    </div>
);

export default HomeSlider;