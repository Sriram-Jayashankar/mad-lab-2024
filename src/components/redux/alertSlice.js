import {createSlice} from '@reduxjs/toolkit';

const alertSlice=createSlice(
    {
        name:"alert",
        initialState:{
            message:null
        },
        reducers:{
            setAlert:(state,action)=>{
                state.message=action.payload
            },
            clearAlert: (state) => {
                state.message = null;
              },
        }
    }
)
export const{setAlert,clearAlert}=alertSlice.actions
export default alertSlice.reducer