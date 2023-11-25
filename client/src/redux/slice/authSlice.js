import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const registerUser = createAsyncThunk("/", async())

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        signUp:(state, action) => {

        }
    }
});

export const {signUp} = authSlice.actions;

export default authSlice.reducer;