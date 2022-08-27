
export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existing = cartItems.find( cartitem => cartitem.id === cartItemToAdd.id)

    if(existing)
    return cartItems.map(cartitem =>
        cartitem.id === cartItemToAdd.id ? {...cartitem, quantity: cartitem.quantity + 1} : cartitem )

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemfromCart = (cartItems, itemtoRemove) => {

    const existing = cartItems.find( cartitem => cartitem.id === itemtoRemove.id)

    if(existing && itemtoRemove.quantity > 1)
    return cartItems.map(cartitem =>
        cartitem.id === itemtoRemove.id ? {...cartitem, quantity: cartitem.quantity - 1} : cartitem )

    return cartItems.filter(cartItem => cartItem.id !== itemtoRemove.id)
}

export const deleteItemfromCart= (cartItems, itemtoDelete)=> {

    const existing = cartItems.find( cartitem => cartitem.id === itemtoDelete.id)

    if(existing)
    return cartItems.filter(cartItem => cartItem.id !== itemtoDelete.id)

    return [...cartItems]
}