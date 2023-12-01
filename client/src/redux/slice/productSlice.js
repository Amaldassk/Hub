import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/productActions";

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
            console.log('product', state);
        }
    }
});

export default productSlice.reducer;