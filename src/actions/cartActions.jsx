export const ADD_TO_CART = "ADD_TO_CART";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (product, quantity) => ({
    type: ADD_TO_CART,
    payload: { product, quantity },
})

export const changeQuantity = (product, quantity) => ({
    type: CHANGE_QUANTITY,
    payload: { product, quantity },
})

export const removeFromCart = (product, quantity) =>( {
    type: REMOVE_FROM_CART,
    payload: { product, quantity }
});

export const clearCart = () => ({
    type: CLEAR_CART,
})