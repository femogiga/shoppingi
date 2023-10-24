import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiService from '../../apiService';

// export const fetchActiveList = createAsyncThunk(
//   'activeShoppingList/fetchActiveList',
//   async () => {
//     const response = await fetch(
//       'http://localhost:9000/shoppinglist/activelist'
//     );
//     const data = await response.json();
//     return data;
//   }
// );

export const fetchActiveList = createAsyncThunk(
  'activeShoppingList/fetchActiveList',
  async () => {
    const response = await apiService.get('shoppinglist/activelist');
    const data = await response.data;
    return data;
  }
);
const activeShoppingListSlice = createSlice({
  name: 'activeShoppingList',
  initialState: {
    data: [],
    message: '',
  },

  reducers: {
    setMessage: (state) => {
      state.message =
        'Only one active list is allowed cancel or complete ' +
        state.data[0].listName;
    },
    clearMessage: (state) => {
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchActiveList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchActiveList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setMessage, clearMessage } = activeShoppingListSlice.actions;
export default activeShoppingListSlice.reducer;
