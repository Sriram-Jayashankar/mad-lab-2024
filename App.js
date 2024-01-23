import CurrentWeather from "./src/screens/CurrentWeather"
import {React} from "react"
import {View,Text,StyleSheet} from "react-native"
import { StatusBar } from 'expo-status-bar';
import UpdateWeather from "./src/screens/UpdateWeather";
import InitialScreen from "./src/screens/InitialScreen"
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
const app=()=>
{
  return(
    <View className="flex-1 ">
      {/* <InitialScreen/> */}
      {/* <LoginScreen/> */}
      <SignupScreen/>
    </View>
  )
}
const styles=StyleSheet.create(
  {
    mainview:{
      flex:1,
      paddingTop:50,
    }
  }
)
export default app