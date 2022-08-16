import {View, Text, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import CustomImput from '../../components/CustomImput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ExternoScreen = () => {
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Externos</Text>
      <CustomImput placeholder="Nombre" value={nombre} setValue={setNombre} />
      <CustomImput
        placeholder="Apellido paterno"
        value={apellido1}
        setValue={setApellido1}
      />
      <CustomImput
        placeholder="Apellido materno"
        value={apellido2}
        setValue={setApellido2}
      />
      <CustomButton text="Siguiente" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 50,
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
  },
});

export default ExternoScreen;
