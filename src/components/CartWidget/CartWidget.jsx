import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className='d-flex align-items-center'>
        <i className="fa-solid fa-cart-shopping cart"></i>
        <p className='cartCounter'> 7 </p>
    </div>
  )
}

export default CartWidget