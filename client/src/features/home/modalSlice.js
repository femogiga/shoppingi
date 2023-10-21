import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    saveOpen: false,
    completeOpen: false,
    cancelOpen: false,
  },
  reducers: {
    setSaveOpen: (state, action) => {
      state.saveOpen = action.payload;
    },
    setCompleteOpen: (state, action) => {
      state.completeOpen = action.payload;
    },
    setCancelOpen: (state, action) => {
      state.cancelOpen = action.payload;
      },
      setModalClose: (state) => {
          state.cancelOpen = false;
          state.completeOpen = false;
          state.saveOpen = false;
    }
  },
});


export const { setSaveOpen, setCompleteOpen, setCancelOpen ,setModalClose} = modalSlice.actions
export default modalSlice.reducer
