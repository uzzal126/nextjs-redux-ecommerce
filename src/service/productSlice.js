import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    isLoading: false,
    product: {},
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        return response.data.products;
    }
);

export const fetchProduct = createAsyncThunk(
    "products/fetchProduct",
    async (id) => {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
        );
        return res.data;
    }
);

export const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            // state.isLoading = false;
            state.products = action.payload;
        });

        builder.addCase(fetchProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            // console.log("first >>", action.payload);
            state.isLoading = false;
            state.product = action.payload;
            // console.log("second >>", action.payload);
        });
    },
});

export default productSlice.reducer;
