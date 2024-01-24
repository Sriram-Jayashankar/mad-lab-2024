import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DogItem = (props) => {
  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10,
    height: 150,
    borderRadius: 20,
    elevation: 5,
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
});

export default DogItem;
