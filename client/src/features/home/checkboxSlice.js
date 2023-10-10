import { createSlice } from '@reduxjs/toolkit';

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState: {
    checkboxState: false,
    recycleBinState: true,
    checked:false
  },
  reducers: {
    setActiveInput: (state, action) => {
      switch (action.payload) {
        case 'checkbox':
          state.checkboxState = true;
          state.recycleBinState = false;
          break;
        default:
          state.checkboxState = false;
          state.recycleBinState = true;
          break;
      }
    },
    setChecked: (state, action) => {
      state.checked = !state.checked
    }
  },
});

export const { setActiveInput ,setChecked} = checkboxSlice.actions;
export default checkboxSlice.reducer;
