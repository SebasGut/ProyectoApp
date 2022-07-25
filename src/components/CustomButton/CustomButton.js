import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000a89',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default CustomButton;
