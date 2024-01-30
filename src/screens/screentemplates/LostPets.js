import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet } from 'react-native';
import DogItem from '../../components/basic/DogItem';

const LostPets = () => {
    const LostPets = [
        {
          id: 1,
          src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
          pet_type: 'Husky',
          description: 'This is a dog',
          location: 'Kathmandu',
        },
        {
          id: 2,
          src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
          pet_type: 'Labrador',
          description: 'A friendly Labrador Retriever',
          location: 'New York',
        },
        {
          id: 3,
          src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
          pet_type: 'Golden Retriever',
          description: 'Golden beauty looking for a home',
          location: 'Los Angeles',
        },
        {
          id: 4,
          src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
          pet_type: 'Beagle',
          description: 'Cute Beagle puppy with playful energy',
          location: 'Chicago',
        },
        {
          id: 5,
          src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
          pet_type: 'Beagle',
          description: 'Cute Beagle puppy with playful energy',
          location: 'Chicago',
        },
        {
          id: 6,
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
        <Text style={styles.headerText}>Lost Pets</Text>
      </View>
      <FlatList
        data={LostPets}
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

export default LostPets;
