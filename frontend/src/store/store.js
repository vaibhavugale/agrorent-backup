import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import {equSlice} from './slices/equSlice';

export default configureStore({
  reducer: {
    userSlice:userSlice.reducer,
    equSlice:equSlice.reducer
  },
});