import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../apiService';

// export const saveProduct = createAsyncThunk(
//   'formCard/saveProduct',
//   async (dataToPost) => {
//       const response = await fetch('http://localhost:9000/products', {
//         method: 'POST',
//         body: JSON.stringify(dataToPost),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//         // console.log(state)
//       const data = await response.json();
//       return data;
//     });

export const saveProduct = createAsyncThunk(
  'formCard/saveProduct',
  async (dataToPost) => {
    const response = await apiService.post('/products', dataToPost);
    const data = await response.data;
    return data;
  }
);
// console.log(state)

export const formCardSlice = createSlice({
  name: 'formCard',
  initialState: {
    product_name: '',
    note: '',
    imageUrl: '',
    category_name: '',
  },
  reducers: {
    updateFormField: (state, action) => {
      const { fieldName, value } = action.payload;
      state[fieldName] = value;
      console.log(state);
    },
    resetForm: (state) => {
      return {
        product_name: '',
        note: '',
        imageUrl: '',
        category_name: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveProduct.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(saveProduct.fulfilled, (state) => {
        state.status = 'success';
      })
      .addCase(saveProduct.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export const { updateFormField, resetForm } = formCardSlice.actions;
export default formCardSlice.reducer;
