import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet } from 'react-native';
import DogItem from '../../components/basic/DogItem';

const LostPets = () => {
  const lostPets = [
    {
      src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
      pet_type: 'German Shepherd',
      description: 'Lost German Shepherd, responds to the name Max',
      location: 'Kathmandu',
    },
    {
      src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
      pet_type: 'Poodle',
      description: 'Missing Poodle with curly fur, wearing a red collar',
      location: 'New York',
    },
    {
      src: 'https://w7.pngwing.com/pngs/333/414/png-transparent-dog-cartoon-cat-tongue-puppy-white-mammal-child.png',
      pet_type: 'Siamese Cat',
      description: 'Lost Siamese Cat, blue eyes, responds to the name Luna',
      location: 'Los Angeles',
    },
    // Add more lost pets here
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
        data={lostPets}
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
