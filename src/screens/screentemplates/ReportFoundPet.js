import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setAlert, clearAlert } from '../../components/redux/alertSlice';

const ReportFoundPet = ({}) => {
  const [formData, setFormData] = useState({
    petType: '',
    description: '',
    location: '',
    imageUri: null,
    permissionStatus: null,
    isImageSelected: false,
    reportType: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setFormData((prevData) => ({ ...prevData, permissionStatus: galleryStatus.status === 'granted' }));
    })();
  }, []);

  const selectImage = async () => {
    const { permissionStatus } = formData;

    if (permissionStatus) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        quality: 1,
      });

      if (!result.cancelled) {
        setFormData((prevData) => ({
          ...prevData,
          imageUri: result.uri,
          isImageSelected: true,
        }));
      } else {
        console.log('Permission not granted');
      }
    }
  };

  const reportFoundPet = () => {
    const { petType, description, location, imageUri, reportType } = formData;
  
    // Check if any of the required values is null
    if (!petType || !description || !location || !imageUri || !reportType) {
      dispatch(setAlert('Please fill in all the required fields.'));
      return; // Exit the function if any value is null
    }
  
    // If all values are present, proceed with reporting logic
    console.log('Pet Type:', petType);
    console.log('Description:', description);
    console.log('Location:', location);
    console.log('Image URI:', imageUri);
    console.log('Report Type:', reportType);
  
    // Optional: You can clear the alert after a certain duration
  };
  
  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Report Found Pet</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.imageContainer}>
          {formData.imageUri && <Image style={styles.image} source={{ uri: formData.imageUri }} />}
          <TouchableOpacity onPress={selectImage}>
            <Text style={styles.imagePlaceholderText}>
              {formData.isImageSelected ? 'Change Image' : 'Select Image'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Pet Type"
            value={formData.petType}
            onChangeText={(text) => handleChange('petType', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={formData.description}
            onChangeText={(text) => handleChange('description', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={formData.location}
            onChangeText={(text) => handleChange('location', text)}
          />
        </View>
        <View style={styles.radioContainer}>
          <Text style={styles.pickerLabel}>Select Report Type:</Text>
          <View style={styles.radioButtons}>
            <View style={styles.radioButton}>
              <RadioButton
                value="lostDog"
                status={formData.reportType === 'lostDog' ? 'checked' : 'unchecked'}
                onPress={() => handleChange('reportType', 'lostDog')}
                color="#FF6F61"
              />
              <Text style={styles.radioLabel}>I have lost a dog</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton
                value="foundPet"
                status={formData.reportType === 'foundPet' ? 'checked' : 'unchecked'}
                onPress={() => handleChange('reportType', 'foundPet')}
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
    marginTop: 40,
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
