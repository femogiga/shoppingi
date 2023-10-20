import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    visibility: false,
  },
  reducers: {
    handleVisibility: (state, action) => {
      if (action.payload > 0) {
        state.visibililty = true;
        return;
      }
      state.visibililty = false;
      return;
    },
  },
});

export const { handleVisibility } = sidebarSlice.actions;
export default sidebarSlice.reducer;
