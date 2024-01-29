import {React} from "react"
import {View,Text,StyleSheet} from "react-native"
import { StatusBar } from 'expo-status-bar';
import LogoutButton from "../components/basic/Logoutbutton";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LostPets from "./screentemplates/LostPets";
import FoundPets from "./screentemplates/FoundPets";
import ReportFoundPet from "./screentemplates/ReportFoundPet";

const Tab=createMaterialBottomTabNavigator();
const UserFinal=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="foundpets" component={FoundPets}/>
            <Tab.Screen name="report" component={ReportFoundPet}/>
        </Tab.Navigator>
    )
}
export default UserFinal