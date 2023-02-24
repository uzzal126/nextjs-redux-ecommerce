import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../service/cartSlice";
import productReducer from "../service/productSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
    },
});

export default store;
