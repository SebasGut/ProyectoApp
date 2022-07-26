import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SingInScreen from '../screens/SingInScreen';
import PointScreen from '../screens/PointsScreen/PointScreen';
import AdminScreen from '../screens/AdminScreen/AdminScreen';
import EventScreen from '../screens/EventScreen/EventScreen';
import AdminLogIn from '../screens/AdminLogIn/AdminLogIn';
import QrScreen from '../screens/QrScreen/QrScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SingInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Registrar QR" component={QrScreen} />
        <Stack.Screen name="Horas" component={PointScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Eventos" component={EventScreen} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="AdminLogIn" component={AdminLogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
