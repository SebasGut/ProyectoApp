/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigation from './src/navigation';
import QrScreen from './src/screens/QrScreen/QrScreen';


const App = () => {
  const Sig = () => {
    console.warn('Sigiente pagina');
  };

  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f3f3ff',
  },
});

export default App;
