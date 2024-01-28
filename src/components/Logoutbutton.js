import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { signOut } from '../../authActions';
import { useNavigation } from '@react-navigation/native';


const LogoutButton = () => {
  const dispatch = useDispatch();
    const navigation=useNavigation();

  const handleLogout = () => {
    // Dispatch the signOut action
    dispatch(signOut());
    navigation.navigate("InitialScreen")
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LogoutButton;
