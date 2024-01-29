import { combineReducers } from 'redux';
import authReducer from './src/components/redux/authSlice';
import alertReducer from './alertSliceRedux';
const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
});

export default rootReducer;