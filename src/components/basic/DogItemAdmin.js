import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { removedog } from '../redux/AdmindogsSlice';
const DogItemAdmin = (props) => {
  const dispatch = useDispatch();
    const handleValidate = () => {
        console.log(props.dog.id)
        dispatch(removedog({ type: "f", dogId: props.dog.id }));
    };
  
    const handleDevalidate = () => {
        dispatch(removedog({ type: "f", dogId: props.dog.id }));
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: props.dog.src }} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.breedText}>
              Breed: {props.dog.pet_type}
            </Text>
            <Text numberOfLines={3} ellipsizeMode="tail" style={styles.locationText}>
              Location: {props.dog.location}
            </Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleValidate}>
            <Text style={styles.buttonText}>Validate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleDevalidate}>
            <Text style={styles.buttonText}>Devalidate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      margin: 10,
      padding: 10,
      borderRadius: 20,
      elevation: 5,
    },
    contentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    imageContainer: {
      borderRadius: 20,
      overflow: 'hidden',
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 20,
    },
    textContainer: {
      flex: 1,
      marginLeft: 10,
    },
    breedText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333333',
      marginBottom: 5,
    },
    locationText: {
      fontSize: 16,
      color: '#666666',
    },
    buttonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      justifyContent: 'space-between', // Align buttons at the ends
    },
    button: {
      flex: 1, // Take up available space
      backgroundColor: 'green',
      borderRadius: 8,
      padding: 8,
      marginHorizontal: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  
  export default DogItemAdmin;