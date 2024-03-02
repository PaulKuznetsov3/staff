import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  staffs: [],
};

export const staffsSlice = createSlice({
  name: 'staffs',
  initialState,
  reducers: {
    getStaffs: (state, action) => {
      state.staffs = action.payload;
    },
  },
});

export const { getStaffs } = staffsSlice.actions;

export default staffsSlice.reducer;
  