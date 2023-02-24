import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    isMiniCartOpen: false,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleMiniCart: (state, action) => {
            state.isMiniCartOpen = action.payload;
        },
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
            state.totalPrice = state.cart.reduce(
                (acc, cur) => acc + cur.price,
                0
            );
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { toggleMiniCart, addToCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
