import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UserProfile = () => {
  const [name] = useState('John Doe'); // Fixed name
  const [username, setUsername] = useState('johndoe');
  const [location] = useState('New York'); // Fixed location
  const [imageUri, setImageUri] = useState(null);
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setPermissionStatus(galleryStatus.status === 'granted');
    })();
  }, []);

  const selectImage = async () => {
    if (permissionStatus) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>User Profile</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.imageContainer}>
          {imageUri ? (
            <Image style={styles.profileImage} source={{ uri: imageUri }} />
          ) : (
            <TouchableOpacity onPress={selectImage}>
              <View style={styles.profileImagePlaceholder}>
                <Text style={styles.imagePlaceholderText}>Select Image</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>{username}</Text>
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.locationLabel}>Location:</Text>
            {isEditingLocation ? (
              <Text style={styles.locationText}>{location}</Text>
            ) : (
              <TouchableOpacity onPress={() => setIsEditingLocation(true)}>
                <Text style={styles.locationText}>{location || 'Add Location'}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.changePasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.changePasswordText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileImagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    color: 'white',
    fontSize: 18,
  },
  userInfoContainer: {
    marginBottom: 20,
  },
  userName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nameText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationLabel: {
    color: 'white',
    fontSize: 16,
    marginRight: 5,
  },
  locationText: {
    color: 'white',
    fontSize: 16,
  },
  changePasswordContainer: {},
  changePasswordText: {
    color: 'white',
    fontSize: 16,
  },
});

export default UserProfile;
