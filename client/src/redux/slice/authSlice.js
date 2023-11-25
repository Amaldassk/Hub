import { createSlice, current } from "@reduxjs/toolkit";
import { registerUser, signInUser } from "../actions/authActions";

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

        },
        [signInUser.fulfilled]: (state, action) => {
            state.userData = action.payload ? action.payload.user : null;
            state.accessToken = action.payload ? action.payload.accessToken : null;
            state.refreshToken = action.payload ? action.payload.refreshToken : null;
            state.signInError = null;
            state.successMessage = action.payload ? action.payload : null;
        }
    }
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;