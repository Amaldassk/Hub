import { createSlice, current } from "@reduxjs/toolkit";
import { deleteProduct, getProducts } from "../actions/productActions";

const initailState = {
    productsList:null,
}

const productSlice = createSlice({
    name:'product',
    initialState: initailState,
    reducers:{

    },
    extraReducers:{
        [getProducts.fulfilled]:(state,action) => {
            action.payload ? state.productsList = action.payload : null;
        },
        [deleteProduct.fulfilled]:(state, action) => {
           const updatedProducts = state.productsList.filter((item)=>item._id !== action.payload._id);
           state.productsList = updatedProducts;
        }
    }
});

export default productSlice.reducer;