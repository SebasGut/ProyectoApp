import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const PointScreen = () => {
  const navigation = useNavigation();

  const Evento = () => {
    navigation.navigate('EventScreen');
  };
  const Registrar = () => {
    console.warn('Registrar Evento');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Tus Horas a dia de hoy son:</Text>
      <Text style={styles.puntos}>xxxx Horas</Text>
      <CustomButton text="Evento" onPress={Evento} />
      <CustomButton text="Resgistrar Evento" onPress={Registrar} />
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
  },
  puntos: {
    width: '100%',
    backgroundColor: '#d2dffc',
    fontSize: 25,
    color: 'black',
    padding: 15,
    borderColor: '#2265fe',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 100,
    textAlign: 'center',
  },
});
export default PointScreen;
