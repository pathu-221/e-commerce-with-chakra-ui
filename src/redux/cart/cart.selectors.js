import { createSelector } from 'reselect';

const selectCart = state => state.cart; 

export const selectTotalQuantity = createSelector(
    [selectCart],
    cartItems => cartItems.cartItems.reduce((total_quantity, cartItem) => 
    total_quantity + cartItem.quantity, 0)
);

export const selectTotalPrice = createSelector(
    [selectCart],
    cartItems => cartItems.cartItems.reduce((total_price, cartItem) => 
    total_price + cartItem.quantity * cartItem.price, 0)
)

export const selectCartItems = createSelector(
    [selectCart],
    cartItems => cartItems.cartItems
)