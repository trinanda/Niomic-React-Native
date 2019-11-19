/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.task}> Tugas 3 React Native </Text>
        <Text style={styles.welcome}> {this.props.welcome} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9BAB4E',
  },
  task: {
    textAlign: 'center',
    color: 'white',
  },
  welcome: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 30,
  },
});
