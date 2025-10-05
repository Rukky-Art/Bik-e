import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./../slice/cartSlice"
import authReducer from './../slice/authSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

// Types for use throughout your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
