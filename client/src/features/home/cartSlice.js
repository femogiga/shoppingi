import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    { name: 'Avocado', count: 0 },
    { name: 'Chicken', count: 1 },
    { name: 'Watermelon', count: 2 },
  ],
  reducers: {
    increment: (state, action) => {
      const item = state.find((item) => item.name === action.payload);
      item.count += 1;
    },
    decrement: (state, action) => {
      const item = state.find((item) => item.name === action.payload);
      if (item.count <= 0) {
        item.count = 0;
        return;
      }
      item.count -= 1;
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
