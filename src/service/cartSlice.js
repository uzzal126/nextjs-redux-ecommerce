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
            const proIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (proIndex === -1) {
                state.cart = [...state.cart, { ...action.payload, qty: 1 }];
            } else {
                state.cart[proIndex].qty += 1;
            }
        },
        removeProduct: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        },

        getTotalPrice: (state) => {
            state.totalPrice = state.cart.reduce(
                (acc, cur) => acc + cur.price * cur.qty,
                0
            );
        },

        increaseProductQuantity: (state, action) => {
            const productIndex = state.cart.findIndex(
                (item) => item.id === action.payload
            );

            if (productIndex !== -1) {
                state.cart[productIndex].qty += 1;
            }
        },
        decreaseProductQuantity: (state, action) => {
            const productIndex = state.cart.findIndex(
                (item) => item.id === action.payload
            );

            if (productIndex !== -1) {
                if (state.cart[productIndex].qty === 1) {
                    return;
                }
                state.cart[productIndex].qty -= 1;
            }
        },
    },
});

export const {
    toggleMiniCart,
    addToCart,
    removeProduct,
    getTotalPrice,
    increaseProductQuantity,
    decreaseProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
