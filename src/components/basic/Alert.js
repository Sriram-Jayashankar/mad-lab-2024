import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert } from '../redux/alertSlice';

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    if (alert.message) {
      showAndHideAlert();
    }
  }, [alert]);

  const showAndHideAlert = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        hideAlert();
      }, 1000);
    });
  };

  const hideAlert = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      dispatch(clearAlert());
    });
  };

  if (!alert.message) {
    return null; // Do not render anything if there is no message
  }

  return (
    <Animated.View
      style={[
        styles.alertContainer,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      <Text style={styles.alertText}>{alert.message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FF6F61',
    paddingVertical: 10,
    alignItems: 'center',
  },
  alertText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Alert;
