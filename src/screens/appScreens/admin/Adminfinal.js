import { React } from "react"
import { View, Text, StyleSheet } from "react-native"
import { StatusBar } from 'expo-status-bar';
// import LogoutButton from "../components/Logoutbutton";
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();


const AdminFinal = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="lostpets" component={LostPets}/>
            <Tab.Screen name="foundpets" component={FoundPets}/>
            <Tab.Screen name="report" component={ReportFoundPet}/>
{/* need to finish these bottom ones */}
{/* also should make alert slice work */}
{/* before that learn how to work with redux in general and arrangement in redux */}
            <Tab.Screen name="validatelostpets" component={ReportFoundPet}/>
            <Tab.Screen name="validatefoundpets" component={ReportFoundPet}/>
            <Tab.Screen name="validateadminsignups" component={ReportFoundPet}/>

        </Tab.Navigator>
    )
}
export default AdminFinal

