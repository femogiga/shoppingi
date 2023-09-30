import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'home/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:9000/category');
    const data = await response.json();
    return data;
  }
);
export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export const {getData } = homeSlice.actions
export default homeSlice.reducer;
