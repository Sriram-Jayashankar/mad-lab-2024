
import { configureStore,combineReducers } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import alertReducer from "./alertSlice"
const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer,
  });
const store = configureStore({
    reducer: {
        rootReducer
    }
})
export default store