import { productActionTypes } from "./products.types"

export const getProductCategories = (categories) => ({
    type: productActionTypes.GET_PRODUCTS_CATEGORIES,
    payload: categories,
})

export const getCategoryProducts = (products) => ({
    type: productActionTypes.GET_CATEGORY_PRODUCTS,
    payload: products,
});

export const clearProductsData = () => ({
    type: productActionTypes.CLEAR_PRODUCTS_DATA,
    payload: [],
})