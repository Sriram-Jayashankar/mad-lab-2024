import {React} from "react"
import {View,Text,SafeAreaView,StyleSheet} from "react-native"
import { Feather } from '@expo/vector-icons'; 

const CurrentWeather=()=>{
  return(
    <>
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <Feather name="sun" size={200} color="black" />
      <Text >
        hello guys tf is happening 
      </Text>
      <Text style={styles.high}>
        HIgh:Low
      </Text>
      <Text>
        cool buddy
      </Text>
    </View>
    <View style={styles.footer}>
<Text style={styles.text}>
  Footer looks neat
</Text>
    </View>
    </SafeAreaView>
    </>
  )
}

const styles=StyleSheet.create(
  {
    text:{
      fontSize:32
    },
    footer:{
      flex:1,
      justifyContent:"center",
      alignItems:"flex-start"
    },
    wrapper:{
      backgroundColor:"pink",
      flex:1
    },
    container:{
      flex:1,
      
      alignItems:"center"
    }
  }
)
export default CurrentWeather