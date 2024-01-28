import { React } from "react"
import { Provider,useSelector } from 'react-redux';
import store from './store';
import Navigation from "./Navigation";


const app = () => {
  
  return (
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
    
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}

export default app