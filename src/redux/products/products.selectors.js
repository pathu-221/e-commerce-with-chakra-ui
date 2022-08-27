import { createSelector } from "reselect";

const selectCategory = state => state.product;

export const selectCategories = createSelector(
    [selectCategory],
    (product) => product.categories
);

export const selectProducts = createSelector(
    [selectCategory],
    (product) => product.products
);

export const selectProductbyId = (productId) => createSelector(
    [selectCategory],
    (products) =>{ return products.products.find(product => product.id.toString() === productId)}
)