import CurrentWeather from "./src/screens/CurrentWeather"
import {React} from "react"
import {View,Text,StyleSheet} from "react-native"
import { StatusBar } from 'expo-status-bar';
import UpdateWeather from "./src/screens/UpdateWeather";
import InitialScreen from "./src/screens/InitialScreen"
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import DogItem from "./src/components/DogItem";
import ReportFoundPet from "./src/screens/ReportFoundPet";
import ImagePickerExample from "./src/test/imagepickertest";
import FoundPets from "./src/screens/FoundPets";
import UserProfile from "./src/screens/UserProfile";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserFinal from "./src/screens/UserFinal";
import AdminFinal from "./src/screens/admin/Adminfinal";

const Stack = createNativeStackNavigator();


const app=()=>
{
  const dog={src:"https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png",
  pet_type:"huskyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",description:"this is a dog",location:"kathmuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuanduuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"}
  return(
    // <View className="flex-1 ">
    //   {/* <InitialScreen/> */}
    //   {/* <LoginScreen/> */}
    //   {/* <SignupScreen/> */}
    //   {/* <DogItem dog={dog}/> */}
    //   {/* <ReportFoundPet/> */}
    //   {/* <ImagePickerExample/> */}
    //   {/* <FoundPets/> */}
    //   {/* <UserProfile/> */}
    // </View>
    
  <NavigationContainer>
  <Stack.Navigator initialRouteName="InitialScreen" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen}  />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="UserFinal" component={UserFinal} />
    <Stack.Screen name="AdminFinal" component={AdminFinal} />
    <Stack.Screen name="InitialScreen" component={InitialScreen} />
  </Stack.Navigator>
</NavigationContainer>
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