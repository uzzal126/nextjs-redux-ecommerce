import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../service/cartSlice";
import productReducer from "../service/productSlice";
import wishlistReducer from "../service/wishlistSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        wishlist: wishlistReducer,
    },
});

export default store;
