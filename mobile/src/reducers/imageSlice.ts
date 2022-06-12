import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allImages: [],
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImage(state, action) {
      state.allImages.push(action.payload);
    },
  },
});

export const { addImage } = imageSlice.actions;

export default imageSlice.reducer;
