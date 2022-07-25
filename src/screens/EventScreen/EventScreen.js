import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';

const EventScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Evento en curso</Text>
      <Text style={styles.text}>Entrada</Text>
      <Text style={styles.reg}>Estatus</Text>
      <Text style={styles.text}>Salida</Text>
      <Text style={styles.reg}>Estatus</Text>
      <CustomButton text="Registrar" />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 50,
    flex: 1,
  },
  reg: {
    width: '100%',
    backgroundColor: '#d2dffc',
    fontSize: 25,
    color: 'black',
    padding: 15,
    borderColor: '#2265fe',
    borderRadius: 10,
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 30,
  },
  text: {
    fontSize: 30,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 60,
  },
});
export default EventScreen;
