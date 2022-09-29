import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const AdminScreen = () => {
  const navigation = useNavigation();

  const onUserPressed = () => {
    navigation.navigate('Usuarios');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Administrador</Text>
      <CustomButton text="Eventos" />
      <CustomButton text="Crear evento" />
      <CustomButton text="Usuarios" onPress={onUserPressed}/>
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
    marginVertical: 100,
  },
});

export default AdminScreen;
