import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './home/cartSlice';
import homeReducer from './home/homeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    home: homeReducer,
  },
});
