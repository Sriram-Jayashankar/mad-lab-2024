import { setUser,clearUser } from "./authSlice";
import { CommonActions,useNavigation } from "@react-navigation/native";

export const signIn=(userData)=>(dispatch)=>{
      // Save user data to persistent storage if needed
        dispatch(setUser(userData))




}
export const signOut=()=>(dispatch)=>{
    // Remove user data from persistent storage if needed
    dispatch(clearUser())

}