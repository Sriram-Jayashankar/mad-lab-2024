import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet } from 'react-native';
import DogItem from '../components/basic/DogItem';

const FoundPets = () => {
  const foundPets = [
    {
      src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
      pet_type: 'Husky',
      description: 'This is a dog',
      location: 'Kathmandu',
    },
    {
      src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
      pet_type: 'Labrador',
      description: 'A friendly Labrador Retriever',
      location: 'New York',
    },
    {
      src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
      pet_type: 'Golden Retriever',
      description: 'Golden beauty looking for a home',
      location: 'Los Angeles',
    },
    {
      src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
      pet_type: 'Beagle',
      description: 'Cute Beagle puppy with playful energy',
      location: 'Chicago',
    },
    {
      src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
      pet_type: 'Beagle',
      description: 'Cute Beagle puppy with playful energy',
      location: 'Chicago',
    },
    {
      src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
      pet_type: 'Beagle',
      description: 'Cute Beagle puppy with playful energy',
      location: 'Chicago',
    },
    // Add more found pets here
  ];

  const renderItem = ({ item }) => (
    <DogItem dog={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Found Pets</Text>
      </View>
      <FlatList
        data={foundPets}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
    marginTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FoundPets;
