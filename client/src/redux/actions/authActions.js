import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api/utils";

export const registerUser = createAsyncThunk("auth/register", async(formData)=>{
    try{
        for(const[key, val] of formData){
        console.log(key,val);
        }
        localStorage.removeItem("profile");

        const res = await API.post("api/auth/signup", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        return { error:null, data: res.data};
    } catch(err){
        return {
            error: err.response.data.errors,
            data: null,
        };
    }
});