import { React } from "react"
import { Provider, useSelector } from 'react-redux';
import store from './Store';
import Navigation from "./Navigation";
import ReportFoundPet from "./src/screens/ReportFoundPet";


const app = () => {

  return (


    <Provider store={store}>
      {/* <Navigation /> */}
      <ReportFoundPet/>
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