import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../apiService';

// export const historyData = createAsyncThunk(
//   'historyCard/historyData',
//   async () => {
//     const response = await fetch('http://localhost:9000/shoppinglist');
//     const data = await response.json();
//     return data;
//   }
// );

export const historyData = createAsyncThunk(
  'historyCard/historyData',
  async () => {
    const response = await apiService.get('/shoppinglist');
    const data = await response.data;
    return data;
  }
);
export const historyCardSlice = createSlice({
  name: 'historyCard',
  initialState: {
    cssColor: 'completed',
    data: [],
  },

  reducers: {
    setColor: (state, action) => {
      switch (action.payload) {
        case 'cancelled':
          state.cssColor = 'cancelled';
          break;
        default:
          state.cssColor = 'completed';
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(historyData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(historyData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = [action.payload];
      })
      .addCase(historyData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setColor } = historyCardSlice.actions;
export default historyCardSlice.reducer;
