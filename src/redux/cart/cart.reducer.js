import { cartActionTypes } from "./cart.types";
import { addItemToCart, deleteItemfromCart, removeItemfromCart } from "./cart.utils";

const INITIAL_STATE = {
    cartItems: [],
}

export const cart_reducer = (state = INITIAL_STATE, action ) => {
    const { type, payload } = action;

    switch(type){
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload)
            }
        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemfromCart(state.cartItems, payload)
            }
        case cartActionTypes.DELETE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: deleteItemfromCart(state.cartItems, payload)
            }
        default:
            return state;
    }
}