import { configureStore,combineReducers } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import alertReducer from "./alertSlice"
const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer,
  });
export default rootReducer