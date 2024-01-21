import CurrentWeather from "./src/components/CurrentWeather"
import {React} from "react"
import {View,StyleSheet} from "react-native"
import UpdateWeather from "./src/components/UpdateWeather"
const app=()=>
{
  return(
    <View style={styles.  mainview}>
    <UpdateWeather/>
    </View>
  )
}
const styles=StyleSheet.create(
  {
    mainview:{
      flex:1,
      paddingTop:50,
    }
  }
)
export default app