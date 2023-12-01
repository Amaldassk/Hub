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

export const addProduct = createAsyncThunk('api/product', async(formData)=>{
    try{
        console.log(formData);
        const {productTitle:productName,productSize:size,productGauge:gauge,productColor:color,productMaterial:material,productCoated:powderCoated,productPrice:price} = formData;
        
        const data = {
            productName,size,gauge,color,material,powderCoated,price
        }

        // const res = await API.post("api/product", data, {
        //     headers:{
        //         'Content-Type':'application/json',
        //     }
        // });

        return {error:null, data: res.data};
    } catch(err){
        return handleApiError(err);
    }
});