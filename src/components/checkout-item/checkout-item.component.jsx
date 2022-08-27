import React from 'react';
import { addItem, deleteItem, removeItem } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './checkout-item.styles.scss';

function CheckoutItem({ cartItem, removeItem, addItem, deleteItem }) {
    const { title, quantity, price } = cartItem
    const imageUrl = cartItem.images[0]

    return (
        <div>
            <div className='checkout-item'>
                <div className="image-container">
                    <img src={imageUrl} alt="" />
                </div>
                <span className="name">{title}</span>
                <span className="quantity">
                    <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
                </span>
                <span className="price">{price}</span>
                <div className="remove-button" onClick={() => deleteItem(cartItem)}>&#10005;</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    deleteItem: item => dispatch(deleteItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);