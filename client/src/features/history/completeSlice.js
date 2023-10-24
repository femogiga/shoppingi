import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../apiService';

// export const saveAsComplete = createAsyncThunk(
//   'complete/saveAsComplete',
//   async (dataToSave) => {
//     const { id } = dataToSave;
//     // const{progress} = data
//     const response = await fetch(`http://localhost:9000/shoppingList/${id}`, {
//       body: JSON.stringify(dataToSave),
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//     });
//     const data = await response.json();
//     return data;
//   }
// );

export const saveAsComplete = createAsyncThunk(
  'complete/saveAsComplete',
  async (dataToSave) => {
    const { id } = dataToSave;
    // const{progress} = data
    const response = await apiService.update(`/shoppingList/${id}`, dataToSave);
    const data = await response.data;
    return data;
  }
);

const completeSlice = createSlice({
  name: 'complete',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveAsComplete.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(saveAsComplete.fulfilled, (state, action) => {
        state.status = 'successful';
      })
      .addCase(saveAsComplete.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export default completeSlice.reducer;
