import React from 'react'



import './cart-dropdown.styles.scss';
function CartDropDown({ cartItem }) {
  const { price, title, quantity } = cartItem
  const imageUrl = cartItem.images[0]
  return (
    <div className='collection-container'>
      <img src={imageUrl} alt="product" className='product-image' />
      <div className="product-content">
        <h2 className='product-title'>{title}</h2>
        <div className="priceandquantity">
          <h3>${price}</h3>
          <h3>x{quantity}</h3>
        </div>
      </div>
    </div>
  )
}

export default CartDropDown;