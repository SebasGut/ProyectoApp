import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';

const AdminScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Administrador</Text>
      <CustomButton text="Eventos"/>
      <CustomButton text="Crear evento"/>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical:100,
  },
});

export default AdminScreen;
