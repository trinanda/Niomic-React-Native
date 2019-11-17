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
import Footer from './Footer';
import MenuUtama from './Component/MenuUtama';
import MenuGame from './Component/MenuGame';
import MenuBerita from './Component/MenuBerita';
import MenuHits from './Component/MenuHits';
import Barang from './Component/Barang';

const App: () => React$Node = () => {
  return (
    <View>
      <StatusBar backgroundColor="gray" />
      <Header descriptions="TUGAS 2 REACT NATIVE" />
      <Barang shoppingName="================ Total Belanja ================" />
      <Footer tahun="2019" />
    </View>
  );
};

export default App;
