import { configureStore } from '@reduxjs/toolkit';
import staffsReduser from '../slices/staffSlice/staffSlice';

const store = configureStore({
  reducer: {
    staffs: staffsReduser,
  },
});

export default store;