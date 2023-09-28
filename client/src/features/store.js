import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './home/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
