import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    // { product_name: 'Avocado', count: 0 },
    // { product_name: 'Chicken', count: 1 },
    // { product_name: 'Watermelon', count: 2 },
  ],
  reducers: {
    increment: (state, action) => {
      const item = state.find((item) => item.product_name === action.payload);
      item.count += 1;
    },
    decrement: (state, action) => {
      const item = state.find((item) => item.product_name === action.payload);
      if (item.count <= 0) {
        item.count = 0;
        return;
      }
      item.count -= 1;
    },
    add: (state, action) => {
      if (state.length <= 0) {
        state.push(action.payload);
        return;
      }

      const newItem = action.payload;
      const existingItem = state.find(
        (item) => item.product_name === newItem.product_name
      );
      if (!existingItem) {
        state.push(action.payload);
      } else {
        existingItem.count += 1;
      }

      // [state,action.payload]
    },
  },
});
//
export const { increment, decrement, add } = cartSlice.actions;
export default cartSlice.reducer;
