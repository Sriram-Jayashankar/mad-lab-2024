import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {signIn} from "../../components/redux/authActions"

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();  
    const navigation=useNavigation();
    const onlogin = () => {
        const role = email === "cool@gmail.com" ? "admin" : "user";
        const userData = {
            email: email,
            password: password,
            role: role,
          };
          dispatch(signIn(userData));
          {role==="admin"?navigation.navigate("UserFinal"):navigation.navigate("UserFinal")}

        }
    return(
        <SafeAreaView className="flex-1 bg-gray-900">
            <View className="flex-row justify-center mt-20 ">
                <Image className="align-center" source={{ uri: "https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png" }} style={styles.image} />
            </View> 
            <View className="flex-1 bg-white flex  mt-10 px-8 pt-8 " style={styles.viewbox}>
                <View className="form space-y-2">
                    <Text className=" text-gray-700">Email Address</Text>
                    <TextInput className=" bg-gray-300 rounded-lg p-2 " placeholder="person@Email"
                     onChangeText={(text) => setEmail(text)} />
                </View>
                <View className="form space-y-2 my-2">
                    <Text className=" text-gray-700">Password</Text>
                    <TextInput className=" bg-gray-300 rounded-lg p-2 " placeholder="password" 
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}/>
                </View>
                <TouchableOpacity className="flex-row justify-center my-1">
                    <Text className="text-blue-500">Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity className=" flex-0 bg-black rounded-lg p-2 my-4" onPress={onlogin}>
                    <Text className="text-white font-bold text-center text-xl">Login</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row justify-center my-3" onPress={()=>{navigation.navigate("Signup")}}>
                    <Text className="text-gray-700">Don't have an account? </Text>
                    <Text className="text-blue-500">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 350,
    },
    viewbox:{
        flex:1,
        backgroundColor:"white",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,

    },
    form:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    textinput:{
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
    }

});

export default LoginScreen;