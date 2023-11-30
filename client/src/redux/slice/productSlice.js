import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/productActions";

const initailState = {
    products:[],
}

const productSlice = createSlice({
    name:'product',
    initialState: initailState,
    reducers:{

    },
    extraReducers:{
        [getProducts.fulfilled]:(state,action) => {
            state.products = action.payload ? action.payload : null;
        }
    }
});

export default productSlice.reducer;