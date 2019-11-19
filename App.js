/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import Header from './Header';
import Barang from './Component/Barang';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <Header welcome="WELCOME" />
      <Barang />
    </View>
  );
};

export default App;
