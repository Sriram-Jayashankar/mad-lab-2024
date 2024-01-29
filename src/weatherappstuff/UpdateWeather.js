import { React } from "react"
import { View,Text, SafeAreaView, StyleSheet, FlatList, StatusBar } from "react-native"

const data = [{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  title: 'First Item',
},
{
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  title: 'Second Item',
},
{
  id: '58694a0f-3da1-471f-bd96-145571e29d72',
  title: 'Third Item',
}]

const Item = (props) => {
  const { id, title } = props.data
  return (<><Text>{id}</Text>
    <Text>{title}</Text></>)
}
export default function UpdateWeather() {
  const renderItem = ({ item }) => {
    return <Item data={item} />;
  };

  return (
    <SafeAreaView>
      <View styles={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create(
  {
    item: {
      backgroundColor: "pink",
      textAlign: "center",
      color: "black"
    },
    container: {
      alignItems: "center",
      marginTop: StatusBar.currentHeight || 0, //this is to ensure that the content is in safe region thats hwy the margin top is the height of the status bar
      flex: 1
    }
  }
)

//keyExtractor={(item) => { item.id }}