import React from 'react';

const Basket = () => {
    return (
        <div className="basket_menu">
            <ul className='basket_menu_list'>
                <li className="item item-heading">Item</li>
                <li className="price">Price</li>
                <li className="quantity">Quantity</li>
                <li className="subtotal">Subtotal</li>
            </ul>
        </div>
    )
};

export default Basket;
