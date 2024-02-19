import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cntReducer from '../features/counter/cntsSlice';
import authReducer from '../features/counter/loginSlice';
import registerReducer from '../features/counter/registerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cnt : cntReducer,
    auth : authReducer,
    register : registerReducer,
  },
});
