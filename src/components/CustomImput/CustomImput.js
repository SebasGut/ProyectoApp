import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomImput = ({value, setValue, placeholder,secureTextEntry,editable=true}) => {
  
  return (
    <View style={[styles.container,editable ? styles.container : styles.containerInv]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#000a89',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  containerInv: {
    backgroundColor: 'gray',
    width: '100%',
    borderColor: '#000a89',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default CustomImput;
