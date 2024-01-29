import { React } from "react"
import { Provider, useSelector } from 'react-redux';
import store from './src/components/redux/Store';
import Navigation from "./Navigation";
import ReportFoundPet from "./src/screens/screentemplates/ReportFoundPet";
import AdminFinal from "./src/screens/admin/Adminfinal";


const app = () => {

  return (


    <Provider store={store}>
      {/* <Navigation /> */}
      {/* <ReportFoundPet/> */}
      <AdminFinal/>
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