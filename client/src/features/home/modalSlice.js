import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    deleteOpen: false,
    completeOpen: false,
    cancelOpen: false,
  },
  reducers: {
    setDeleteOpen: (state, action) => {
      state.deleteOpen = action.payload;
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
      state.deleteOpen = false;
    },
  },
});

export const { setDeleteOpen, setCompleteOpen, setCancelOpen, setModalClose } =
  modalSlice.actions;
export default modalSlice.reducer;
