import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SingUpScreen = () => {
  const navigation = useNavigation();

  const AlumnoPressed = () => {
    navigation.navigate('Alumno');
  };
  const ExalumnoPressed = () => {
    navigation.navigate('Exalumno');
  };
  const ComunidadUNAMPressed = () => {
    navigation.navigate('Comunidad UNAM');
  };
  const ExternoPressed = () => {
    navigation.navigate('Externo');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Cual es tu estatus en la UNAM</Text>
      <CustomButton text="Alumno" onPress={AlumnoPressed} />
      <CustomButton text="Exalumno" onPress={ExalumnoPressed} />
      <CustomButton text="Comunidad UNAM" onPress={ComunidadUNAMPressed} />
      <CustomButton text="Externo" onPress={ExternoPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
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

export default SingUpScreen;
