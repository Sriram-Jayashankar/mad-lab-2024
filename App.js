// import 'react-native-gesture-handler';
import { React } from "react"
import { Provider, useSelector } from 'react-redux';
import store from './src/components/redux/store';
import Navigation from "./Navigation";
import ReportFoundPet from "./src/screens/appScreens/ReportFoundPet";
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet } from 'react-native';


const app = () => {

  return (


    <Provider store={store}>
      {/* <Navigation /> */}
      {/* <ReportFoundPet/> */}
      <View>
        <Text>hello</Text>
      </View>
    </Provider>
  )
}

export default app

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