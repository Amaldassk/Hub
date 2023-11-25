import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../actions/authActions";

const initialState = {
    userData: null,
    refreshToken: null,
    accessToken: null,
    signInError: null,
    signUpError: [],
    successMessage: null,
    isModeratorOfThisCommunity: false,
    contextAuthData: null,
    trustedAuthContextData: [],
    blockedAuthContextData: [],
    userPreferences: null,
    contextAuthError: null,
};


const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        logout:(state, action) => {

        }
    },
    extraReducers:{
        [registerUser.fulfilled]: (state, action) => {

        }
    }
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;