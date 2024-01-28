import {React} from "react"
import {View,Text,StyleSheet} from "react-native"
import { StatusBar } from 'expo-status-bar';
import LogoutButton from "../components/Logoutbutton";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LostPets from "./LostPets";
import FoundPets from "./FoundPets";
import ReportFoundPet from "./ReportFoundPet";

const Tab=createMaterialBottomTabNavigator();
const UserFinal=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="lostpets" component={LostPets}/>
            <Tab.Screen name="foundpets" component={FoundPets}/>
            <Tab.Screen name="report" component={ReportFoundPet}/>
        </Tab.Navigator>
    )
}
export default UserFinal