/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import HeaderContent from './Component/HeaderContent';
import Story from './Component/Story';
import Contents from './Component/Contents';
import Footers from './Component/Footers';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderContent />
      <View style={{height: 100}}>
        <Story />
      </View>
      <Contents />
      <Footers />
    </View>
  );
};

export default App;
