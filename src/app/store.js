import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cntReducer from '../features/counter/cntsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cnt : cntReducer,
  },
});
