import React from 'react';

import './order-options.styles.scss';

const OrderOptions = () => (
    <div className='order-options'>
        <div className='pickup'>
            <p className='gold'>ASAP Pickup</p>
            <p className='gray'>Beverly Hills - 1008 Elden Way</p>
        </div>
        <div className='delivery'>
            <span className='change-btn'>Change</span>
            <span className='deliver-btn'>Delivery <span className='gray'>or</span> Pickup</span>
        </div>
    </div>
);

export default OrderOptions;