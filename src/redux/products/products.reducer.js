import { productActionTypes } from "./products.types";

const INITIAL_STATE = {
    categories: [], 
    products: []
}

export const products_reducer = (state = INITIAL_STATE, action) => {
    const { payload, type } = action;
    switch(type){
        case productActionTypes.GET_PRODUCTS_CATEGORIES:
            return {
                ...state,
                categories: payload,
            }
        case productActionTypes.GET_CATEGORY_PRODUCTS: 
        return {
            ...state,
            products: payload,
        }
        case productActionTypes.CLEAR_PRODUCTS_DATA:
            return {
                ...state,
                products: payload,
            }
        default:
            return state;
    }
}