import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../apiService';

// export const deleteProduct = createAsyncThunk(
//   'deleteProduct/deleteProduct',
//   async (id) => {
//     const response = await fetch(`http://localhost:9000/products/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const data = await response.json();
//     return data;
//   }
// );

export const deleteProduct = createAsyncThunk(
  'deleteProduct/deleteProduct',
  async (id) => {
    const response = await apiService.remove(`/products/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.data;
    return data;
  }
);

const deleteProductSlice = createSlice({
  name: 'deleteProduct',
  initialState: {},
  reducers: {
    itemDeleted: (state, action) => {
      return state.filter((item) => item.id === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = 'successful';
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export default deleteProductSlice.reducer;
