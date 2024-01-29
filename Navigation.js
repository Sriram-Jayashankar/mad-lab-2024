import {React} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from "./src/screens/authentication/InitialScreen"
import LoginScreen from "./src/screens/authentication/LoginScreen";
import SignupScreen from "./src/screens/authentication/SignupScreen";
import UserFinal from "./src/screens/UserFinal";
import AdminFinal from "./src/screens/admin/Adminfinal";
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();



const Navigation=()=>{
    const user=useSelector((state)=>state.auth.user)
    console.log(user);
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="InitialScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="UserFinal" component={UserFinal} />
          <Stack.Screen name="AdminFinal" component={AdminFinal} />
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )

}
const styles = StyleSheet.create(
    {
      mainview: {
        flex: 1,
        paddingTop: 50,
      }
    }
  )
export default Navigation