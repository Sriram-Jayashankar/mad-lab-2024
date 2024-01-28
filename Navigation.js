import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from "./src/screens/InitialScreen"
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import UserFinal from "./src/screens/UserFinal";
import AdminFinal from "./src/screens/admin/Adminfinal";

const Stack = createNativeStackNavigator();



const Navigation=()=>{
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