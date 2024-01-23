import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const SignupScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-gray-900">
            <View className="flex-row justify-center mt-20 ">
                <Image className="align-center" source={{ uri: "https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png" }} style={styles.image} />
            </View>
            <View className="flex-1 bg-white flex  mt-10 px-8 pt-8 " style={styles.viewbox}>
                <View className="form space-y-2 mb-2">
                    <Text className=" text-gray-700">Name</Text>
                    <TextInput className=" bg-gray-300 rounded-lg p-2 " placeholder="Name of person" />
                </View>
                <View className="form space-y-2">
                    <Text className=" text-gray-700">Email Address</Text>
                    <TextInput className=" bg-gray-300 rounded-lg p-2 " placeholder="temp@email.com" />
                </View>
                <View className="form space-y-2 my-2">
                    <Text className=" text-gray-700">Password</Text>
                    <TextInput className=" bg-gray-300 rounded-lg p-2 " placeholder="password"
                        secureTextEntry={true} />
                </View>
                
                <TouchableOpacity className=" flex-0 bg-black rounded-lg p-2 my-4">
                    <Text className="text-white font-bold text-center text-xl">Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row justify-center my-3">
                    <Text className="text-gray-700">Already have an account? </Text>
                    <Text className="text-blue-500">Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
    },
    viewbox: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,

    },
    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textinput: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    }

});

export default SignupScreen;