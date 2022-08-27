
import { cartActionTypes } from "./cart.types"

export const addItem = (payload) => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: payload,
});

export const removeItem = (payload) => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: payload
});

export const deleteItem = payload => ({
    type: cartActionTypes.DELETE_ITEM_FROM_CART,
    payload: payload
})