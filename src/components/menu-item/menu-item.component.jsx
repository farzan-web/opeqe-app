import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({item}) => {
    const { name, category, pickup, timer, imageUrl, price } = item;
    
    return (
        <div className='menu-item'>
            <div className='image' style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='category gray'>{category}</span>
                <div className='time-price-container'>
                    <span className="tag light">
                        <svg className="MuiSvgIcon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></svg>
                    </span>
                    <span className='timer'>{timer} Mins </span>
                    <span className='price'>${price}</span>
                    <span className='pickup'>{pickup}</span>
                </div>

            </div>
        </div>
    )   
};

export default MenuItem;