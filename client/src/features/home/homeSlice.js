import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import FormCard from '../../component/reusable/FormCard';
import OperationCard from '../../component/reusable/OperationCard';

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
    activeCard: {
      operation: true,
      information: false,
      form: false,
    },
    informationCardData:[]
  },
  reducers: {
    setActiveCard: (state, action) => {
      switch (action.payload) {
        case 'informationCard':
          state.activeCard = {
            operation: false,
            information: true,
            form: false,

          };
          break;
        case 'formCard':
          state.activeCard = {
            operation: false,
            information: false,
            form: true,
          };
          break;
        default:
          state.activeCard = {
            operation: true,
            information: false,
            form: false,
          };
      }
    },
    findById: (state, action) => {
      const result = state.data.find((item) => {
        return (item.products.id = action.payload);
      });
      // console.log('result', result);
      return result;
    },
  },
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

export const { setActiveCard, findById } = homeSlice.actions;
export default homeSlice.reducer;
