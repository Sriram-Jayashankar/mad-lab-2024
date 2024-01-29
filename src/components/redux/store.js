import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { loadUserFromStorage } from './authActions';

const store = configureStore({
  reducer: rootReducer,
});
store.dispatch(loadUserFromStorage());

export default store;