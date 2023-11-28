import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import { initializeAuth } from './api/authMiddleware';

const appStore = async () => {
    try {
      const store = configureStore({
        reducer:{
            auth: authReducer,
        },
      });
      
      await store.dispatch(initializeAuth());

      return store;
    } catch (err) {
      throw new Error("Some error occurred");
    }
};

export default appStore;
