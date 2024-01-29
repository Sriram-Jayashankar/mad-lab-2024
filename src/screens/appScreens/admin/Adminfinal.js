import { React } from "react"
import { View, Text, StyleSheet } from "react-native"
import { StatusBar } from 'expo-status-bar';
// import LogoutButton from "../components/Logoutbutton";
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();


const AdminFinal = () => {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="lostpets" component={LostPets}/>
            <Drawer.Screen name="foundpets" component={FoundPets}/>
            <Drawer.Screen name="report" component={ReportFoundPet}/>
{/* need to finish these bottom ones */}
{/* also should make alert slice work */}
{/* before that learn how to work with redux in general and arrangement in redux */}
            <Drawer.Screen name="validatelostpets" component={ReportFoundPet}/>
            <Drawer.Screen name="validatefoundpets" component={ReportFoundPet}/>
            <Drawer.Screen name="validateadminsignups" component={ReportFoundPet}/>

        </Drawer.Navigator>
    )
}
export default AdminFinal

