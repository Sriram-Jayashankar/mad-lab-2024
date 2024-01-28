import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    user: null
}

 const authSlice=createSlice(
    {
        name:"auth",
        initialState,
        reducers:{
            setUser:(state,action)=>{
                state.user=action.payload

            },
            clearUser:(state,action)=>{
                state.user=null

            }
        }
    }
)

export const {clearUser,setUser}=authSlice.actions;
export const selectedUser=(state)=>state.auth.user
export default authSlice.reducer;