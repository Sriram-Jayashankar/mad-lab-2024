import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../../rootReducer';
import { loadUserFromStorage } from './authSlice';

const store = configureStore({
  reducer: rootReducer,
});
store.dispatch(loadUserFromStorage());

export default store;