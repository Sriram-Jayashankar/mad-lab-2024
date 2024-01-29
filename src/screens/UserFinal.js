import {React} from "react"
import {View,Text,StyleSheet,} from "react-native"
import { StatusBar } from 'expo-status-bar';
import LogoutButton from "../components/basic/Logoutbutton";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LostPets from "./screentemplates/LostPets";
import FoundPets from "./screentemplates/FoundPets";
import ReportFoundPet from "./screentemplates/ReportFoundPet";
import Alert from "../components/basic/Alert";
import { NavigationContainer } from '@react-navigation/native';

const Tab=createMaterialBottomTabNavigator();
const UserFinal=()=>{
    return(
        <>
        
        <NavigationContainer>
        
        <Tab.Navigator>
            <Tab.Screen name="foundpets" component={FoundPets}/>
            <Tab.Screen name="report" component={ReportFoundPet}/>
        </Tab.Navigator>
        <Alert/>
        </NavigationContainer>
        </>
    )
}
export default UserFinal