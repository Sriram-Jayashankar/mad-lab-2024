import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loadfromstorage=async()=>{
    try{
        const storedsuserdata=await AsyncStorage.getItem("userData");
        return storedsuserdata ? JSON.parse(storedsuserdata):null
    }
    catch(e)
    {
        console.log("error that has been obtained while getting data from app is "+{e})
        return null
    }
}
const initialState ={
    user: Loadfromstorage()
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