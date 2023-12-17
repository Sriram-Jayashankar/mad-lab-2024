import CurrentWeather from "./src/components/CurrentWeather"
import {React} from "react"
import {View,StyleSheet} from "react-native"
const app=()=>
{
  return(
    <View style={styles.  mainview}>
    <CurrentWeather/>
    </View>
  )
}
const styles=StyleSheet.create(
  {
    mainview:{
      flex:1
    }
  }
)
export default app