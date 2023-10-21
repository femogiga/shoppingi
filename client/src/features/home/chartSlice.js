import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchChartdata = createAsyncThunk(
  'chart/fetchChartdata',
  async () => {
    const response = await fetch(
        'http://localhost:9000/shoppinglist/countbymonth', {
            heeaders: {
          'Content-Type': 'application/json'
      }}
    );
    const data = response.json();
    return data;
  }
);

const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartdata.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchChartdata.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchChartdata.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});


export const {extraReducers} = chartSlice.actions
export default chartSlice.reducer
