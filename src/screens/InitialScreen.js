import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const InitialScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-gray-900">
            <View className="flex-1 flex justify-around my-4 ">
                <Text className="text-white font-bold text-center text-4xl">Dog App</Text>
                <View className="flex-row justify-center">
                    <Image className="align-center" source={{ uri: "https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png" }} style={styles.image} />
                </View>
                <View className="flex-column justify-center">
                <TouchableOpacity className="py-3 mx-7 bg-white rounded-lg p-2">
                    <Text className="text-gray-700 font-bold text-center text-xl">Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row justify-center my-3">
                    <Text className="text-white">If already signed in? </Text>
                    <Text className="text-blue-500">Login</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
    }
});

export default InitialScreen;