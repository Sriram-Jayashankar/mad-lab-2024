import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
                
            },
            setUserfromStorage:(state,action)=>{
                state.user=action.payload
            }
        }
    }
)

export const {clearUser,setUser,setUserfromStorage}=authSlice.actions;
export const selectedUser=(state)=>state.auth.user
export default authSlice.reducer;