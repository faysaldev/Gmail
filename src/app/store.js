import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReducer from '../features/useSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user:userReducer
  },
});
