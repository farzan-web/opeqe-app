import React from 'react';

import './order-search-container.styles.scss';

import OrderOptions from '../order-options/order-options.component';
import SearchBox from '../search-box/search-box.component';


const OrderSearchContainer = () => (
    <div className='order-search-container'>
        <OrderOptions />
        <SearchBox />
    </div>
);

export default OrderSearchContainer;