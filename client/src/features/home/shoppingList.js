import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const saveShoppingList = createAsyncThunk(
  'shoppingList/saveShoppingList',
  async (dataToSave) => {
    const response = await fetch(`http://localhost:9000/shoppinglist`, {
      method: 'POST',
      body: JSON.stringify(dataToSave),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
);

const shoppingListSlice = createSlice({
  name: 'shoppingList',
    initialState: {

          listName:''
      },

    reducers: {
        getListName: (state, action) => {
            const { field, value } = action.payload
            state[field] = value
      },
      clear: (state, action) => {
        state.listName=''
       }
  },

  extraReducers: (builder) => {
    builder
      .addCase(saveShoppingList.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(saveShoppingList.fulfilled, (state) => {
        state.status = 'fulfilled';
      })
      .addCase(saveShoppingList.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export const {getListName, extraReducers,clear} = shoppingListSlice.actions
export default shoppingListSlice.reducer
