import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './home/cartSlice';
import homeReducer from './home/homeSlice';
import historyCardReducer from './history/historyCardSlice';
import informationCardReducer from './home/informationCardSlice';
import formReducer from './home/formSlice';
import allCategoryReducer from './home/AllCategorySlice';
import summaryReducer from './summary/summarySlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    home: homeReducer,
    historyCard: historyCardReducer,
    informationCard: informationCardReducer,
    formCard: formReducer,
    allCategory: allCategoryReducer,
    summary:summaryReducer
  },
});
