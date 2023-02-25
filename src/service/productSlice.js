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
        return response.data;
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
            state.products = action.payload;
        });

        builder.addCase(fetchProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload;
        });
    },
});

export default productSlice.reducer;
