import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';

const NextButton = ({onPress}) => {
  return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>Pantalla siguiente</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000a89',
    padding: 15,
    borderRadius: 10,
    bottom: 5,
    right: '3%',
    position: 'absolute',
  },

  text: {fontWeight: 'bold', color: 'white'},
});

export default NextButton;
