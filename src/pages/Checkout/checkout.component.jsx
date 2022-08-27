import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selectors';
import StripeButton from '../../components/stripe-button/stripeButton.component';
import './checkout.styles.scss';

function CheckoutPage({ cartItems, totalPrice }) {
  return (
    <div className='checkout-container'>
          <div className="checkout-header">
            <ul>
              <li>Image</li>
              <li>Name</li>
              <li>Qantity</li>
              <li>Price</li>
              <li>Remove</li>
            </ul>
          </div> 
         {
          cartItems.length ?  cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>) : 
            <p> 
              Your Cart is empty
            </p>
         }
         <p className='total-price'>Your total: ${totalPrice}</p>
         <StripeButton total_price={totalPrice}/>
         <p className='red-text' align='center'>
          *This is a test build use the following for test card for payment*
          <br/>
          visa debit 4000 0566 5566 5556 <br/>
          visa credit 4242 4242 4242 4242 <br/>
          exp: any future date cvc: any 3 digit number
         </p>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);