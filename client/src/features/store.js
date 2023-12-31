import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './home/cartSlice';
import homeReducer from './home/homeSlice';
import historyCardReducer from './history/historyCardSlice';
import informationCardReducer from './home/informationCardSlice';
import formReducer from './home/formSlice';
import allCategoryReducer from './home/AllCategorySlice';
import summaryReducer from './summary/summarySlice';
import checkboxReducer from './home/checkboxSlice';
import deleteProductReducer from './home/deleteProductSlice';
import shoppingListReducer from './home/shoppingList';
import completeReducer from './history/completeSlice';
import activeShoppingListReducer from './home/activeShoppingListSlice';
import sidebarReducer from './home/sidebarSlice';
import modalReducer from './home/modalSlice';
import chartReducer from './home/chartSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    home: homeReducer,
    historyCard: historyCardReducer,
    informationCard: informationCardReducer,
    formCard: formReducer,
    allCategory: allCategoryReducer,
    summary: summaryReducer,
    checkbox: checkboxReducer,
    deleteProduct: deleteProductReducer,
    shoppingList: shoppingListReducer,
    complete: completeReducer,
    activeShoppingList: activeShoppingListReducer,
    sidebar: sidebarReducer,
    modal: modalReducer,
    chart: chartReducer,
  },
});
