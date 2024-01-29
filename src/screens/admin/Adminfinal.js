import React from "react";
import ValidateFoundPet from "./ValidateFoundPet";
import ValidateLostPet from "./ValidateLostPet";
import ValidateNewAdmin from "./ValidateNewAdmin";
import FoundPets from "../screentemplates/FoundPets";
import ReportFoundPet from "../screentemplates/ReportFoundPet";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { View } from "react-native";
const Tab=createMaterialBottomTabNavigator();


const AdminFinal = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="FoundPets" component={FoundPets} />
            <Tab.Screen name="ReportFoundPet" component={ReportFoundPet} />

            <Tab.Screen name="ValidateFoundPet" component={ValidateFoundPet} />
            <Tab.Screen name="ValidateLostPet" component={ValidateLostPet} />
            <Tab.Screen name="ValidateNewAdmin" component={ValidateNewAdmin} />
        </Tab.Navigator>
        </NavigationContainer>

    )
}

export default AdminFinal;
