import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action){
            const { product, quantity } = action.payload;//iThin use product not id
            const indexProduct = (state.items).findIndex(item => item.product.id === product.id);
            if(indexProduct >= 0) {
                state.items[indexProduct].quantity += quantity
            } else {
                state.items.push({product, quantity})
            }
        },
        changeQuantity(state, action) {
            const {product, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.product.id === product.id);
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;
            } else {
                //if in the cart item quantity is reduced to 0 it will be removed from the cart list
                state.items = (state.items).filter(item => item.product.id !== product.id)
            }
        },
        removeFromCart(state, action) {
            const { product, quantity } = action.payload;
            const indexProductId = (state.items).findIndex(item => item.product.id === product.id);
            if(indexProductId >= 0){
                state.items = (state.items).filter(item => item.product.id !== product.id)
            }
        }
    }
})

export const { addToCart, changeQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;