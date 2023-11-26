import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'

const appStore = configureStore({
    reducer:{
        auth: authReducer,
    }
});

export default appStore;
