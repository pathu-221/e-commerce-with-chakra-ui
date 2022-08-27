export const BaseUrl = 'https://api.escuelajs.co/api/v1/'

export const getCategoryProducts = async (categoryId) => {
    return await fetch(`${BaseUrl}categories/${categoryId}/products`)
    .then(response => response.json())
}