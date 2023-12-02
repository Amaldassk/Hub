import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct, getProducts } from "../actions/productActions";

const initailState = {
    productsList:[],
}

const productSlice = createSlice({
    name:'product',
    initialState: initailState,
    reducers:{

    },
    extraReducers:{
        [getProducts.fulfilled]:(state,action) => {
            action.payload ? state.productsList.push(action.payload): null;
        },
        [deleteProduct.fulfilled]:(state, action) => {

        }
    }
});

export default productSlice.reducer;