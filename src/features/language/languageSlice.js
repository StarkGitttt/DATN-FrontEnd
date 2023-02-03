import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   language: ['vn', 'en'],
};

export const languageSlice = createSlice({
   name: 'lng',
   initialState,
   reducers: {
      /* Handle change language */
      changeLanguage: (state, action) => {
         state.language = action.payload;
      },
   },
});
// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
