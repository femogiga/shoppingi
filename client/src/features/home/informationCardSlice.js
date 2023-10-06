import { createSlice } from '@reduxjs/toolkit';

const informationCardSlice = createSlice({
  name: 'informationCard',
  initialState: {
    data: {},
  },
  reducers: {
    setInformationCardData: (state, action) => {
      const { catId, id, imageUrl, note, product_name,category } = action.payload;
      (state.data.catId = catId),
        (state.data.id = id),
        (state.data.imageUrl = imageUrl),
        (state.data.note = note),
          (state.data.product_name = product_name)
          state.data.category = category;
    },
  },
});

export const { setInformationCardData } = informationCardSlice.actions;
export default informationCardSlice.reducer;
