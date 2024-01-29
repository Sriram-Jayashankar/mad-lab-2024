import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../components/redux/alertSliceRedux';

const ReportFoundPet = ({}) => {
  const [petType, setPetType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false); // Track whether an image has been selected
  const [reportType, setReportType] = useState(null); // Track the selected report type

  

  const dispatch = useDispatch();

  const showAlert = () => {
    dispatch(setAlert('Your message goes here!'));
  };


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
      } else {
        console.log("Permission not granted");
      }
    }
  };

  const reportFoundPet = () => {
    // Handle reporting logic with petType, description, location, and imageUri
    showAlert();
    console.log('Pet Type:', petType);
    console.log('Description:', description);
    console.log('Location:', location);
    console.log('Image URI:', imageUri);
    console.log('Report Type:', reportType);
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
        <View style={styles.radioContainer}>
          <Text style={styles.pickerLabel}>Select Report Type:</Text>
          <View style={styles.radioButtons}>
            <View style={styles.radioButton}>
              <RadioButton
                value="lostDog"
                status={reportType === 'lostDog' ? 'checked' : 'unchecked'}
                onPress={() => setReportType('lostDog')}
                color="#FF6F61"
              />
              <Text style={styles.radioLabel}>I have lost a dog</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton
                value="foundPet"
                status={reportType === 'foundPet' ? 'checked' : 'unchecked'}
                onPress={() => setReportType('foundPet')}
                color="#47B4FF"
              />
              <Text style={styles.radioLabel}>I have found a pet dog</Text>
            </View>
          </View>
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
  radioContainer: {
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 16,
    borderRadius: 8,
  },
  pickerLabel: {
    color: '#333333',
    marginBottom: 8,
  },
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    marginLeft: 8,
    color: '#333333',
  },
});

export default ReportFoundPet;
