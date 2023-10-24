import { createSlice } from '@reduxjs/toolkit';

const summarySlice = createSlice({
  name: 'summary',
  initialState: {
    card: false,
  },
  reducers: {},
});

export default summarySlice.reducer;
