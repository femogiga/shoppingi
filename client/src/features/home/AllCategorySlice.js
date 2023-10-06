import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategory = createAsyncThunk(
  'allCategory/fetchCategory',
  async () => {
    const response = await fetch('http://localhost:9000/category/all');
    const data = await response.json();
    return data;
  }
);

const allCategorySlice = createSlice({
  name: 'allCategory',
  initialState: {
    data: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.pending = 'pending';
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.fulfilled = 'success';
        state.data = action.payload;
        
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.rejected = 'rejected';
      });
  },
});



export default allCategorySlice.reducer;
