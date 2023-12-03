import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, handleApiError } from "../api/utils";
import {toast} from 'react-hot-toast';

export const getProducts = createAsyncThunk('api/getProducts', async()=>{
    try{
        const res = await API.get("api/product");
        return res.data;
    } catch(err){
        return handleApiError(err);
    }
});

export const addProduct = createAsyncThunk('api/addProduct', async(formData)=>{
    try{
        const {productTitle:productName,productSize:size,productGauge:gauge,productColor:color,productMaterial:material,productCoated:powderCoated,productPrice:price} = formData;
        
        const data = {
            productName,size,gauge,color,material,powderCoated,price
        }

        const res = await API.post("api/product", data, {
            headers:{
                'Content-Type':'application/json',
            }
        });
        toast.success("Product added successfully");
        return res.data.newProduct;
    } catch(err){
        toast.error("Some error occured..please try again");
        return handleApiError(err);
    }
});


export const deleteProduct = createAsyncThunk("api/deleteProduct", async(id)=>{
    try{

        const res = await API.delete(`api/product/${id}`);

        toast.success("Product deleted successfully");
        return res.data;
    } catch(err){
        toast.error("Some error occured..please try again");
        return handleApiError(err);
    }
});