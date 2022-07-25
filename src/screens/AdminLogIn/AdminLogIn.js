import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import Logo from '../../../assets/images/admin.png';
import CustomImput from '../../components/CustomImput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const AdminLogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('AdminScreen');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.Logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <CustomImput
        placeholder="Usuario"
        value={username}
        setValue={setUsername}
      />
      <CustomImput
        placeholder="Contraseña"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomButton text="Iniciar Sesión" onPress={onSignInPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 50,
    flex: 1,
  },
  Logo: {
    width: '60%',
    maxWidth: 300,
    maxHeight: 300,
  },
});

export default AdminLogIn;
