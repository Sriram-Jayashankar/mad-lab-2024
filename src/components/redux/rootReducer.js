import { configureStore,combineReducers } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import alertReducer from "./alertSlice"
import dogReducer from "./AdmindogsSlice"
const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer,
    dog: dogReducer
  });
export default rootReducer