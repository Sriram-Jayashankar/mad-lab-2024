import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ReportFoundPet = ({}) => {
  const [petType, setPetType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false); // Track whether an image has been selected

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermissionStatus(galleryStatus.status === "granted");
    })();
  }, []);

  const selectImage = async () => {
    if (permissionStatus) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        quality: 1,
      });

      if (!result.cancelled) {
        setImageUri(result.uri);
        setIsImageSelected(true); // Set the flag to true when an image is selected
      }
      else {
        console.log("Permission not granted");
      }
    }
  };

  const reportFoundPet = () => {
    // Handle reporting logic with petType, description, location, and imageUri
    console.log('Pet Type:', petType);
    console.log('Description:', description);
    console.log('Location:', location);
    // console.log('Image URI:', imageUri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Report Found Pet</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.imageContainer}>
          {imageUri && (
            <Image style={styles.image} source={{ uri: imageUri }} />
          )}
            <TouchableOpacity onPress={selectImage}>
              <Text style={styles.imagePlaceholderText}>{isImageSelected ? 'Change Image' : 'Select Image'}</Text>
            </TouchableOpacity>
          
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Pet Type"
            value={petType}
            onChangeText={(text) => setPetType(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={reportFoundPet}>
            <Text style={styles.buttonText}>Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,

  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  imagePlaceholderText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    color: '#333333',
  },
  buttonContainer: {},
  button: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ReportFoundPet;
