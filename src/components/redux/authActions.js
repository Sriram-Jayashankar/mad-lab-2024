import { setUser,clearUser,setUserfromStorage } from "./authSlice";
import { CommonActions,useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const signIn=(userData)=>(dispatch)=>{
      // Save user data to persistent storage if needed
        dispatch(setUser(userData))
        AsyncStorage.setItem('userData', JSON.stringify(userData));



}
export const signOut=()=>(dispatch)=>{
    // Remove user data from persistent storage if needed
    dispatch(clearUser())
    AsyncStorage.removeItem('userData')

}
export const loadUserFromStorage=()=>async (dispatch)=>{
    try {
        const storedUserData = await AsyncStorage.getItem('userData');
    
        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          dispatch(setUserfromStorage(userData));
        }
      } catch (error) {
        console.error("Error loading user from AsyncStorage:", error);
      }
}