import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, handleApiError } from "../api/utils";

export const getProducts = createAsyncThunk('api/product', async()=>{
    try{
        const res = await API.get("api/product");
        return res.data;
    } catch(err){
        return handleApiError(err);
    }
});