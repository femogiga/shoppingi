import { createSlice } from '@reduxjs/toolkit';

export const historyCardSlice = createSlice({
  name: 'historyCard',
  initialState: {
    cssColor: 'completed',
  },

  reducers: {
      setColor: (state, action) => {
         
          switch (action.payload) {

        case 'cancelled':
          state.cssColor = 'cancelled';
          break;
        default:
          state.cssColor = 'completed';
          break;
      }
    },
  },
});


export const{setColor} = historyCardSlice.actions
export default historyCardSlice.reducer;
