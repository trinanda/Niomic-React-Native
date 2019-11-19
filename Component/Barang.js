/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Barang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
  }

  handleSum = () => {
    this.setState({amount: this.state.amount + 1});
  };

  handleDistract = () => {
    if (this.state.amount <= 0) {
      Alert.alert("The total can't less than than 0");
    }
    this.setState({amount: this.state.amount - 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'right'}}>{this.state.amount}</Text>
        <Text style={{textAlign: 'center', fontSize: 18}}>
          Please, press these button bellow
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.toucAbleStyle}
            onPress={this.handleSum}>
            <Text style={styles.sum}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toucAbleStyle}
            onPress={this.handleDistract}>
            <Text style={styles.distract}>-</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.amount}>{this.state.amount}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  buttonContainer: {
    flex: 4,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  toucAbleStyle: {
    margin: 30,
    height: 70,
    width: 100,
  },
  amount: {
    fontSize: 100,
    flex: 4,
    textAlign: 'center',
  },
  sum: {
    flex: 2,
    backgroundColor: 'green',
    fontSize: 50,
    textAlign: 'center',
  },
  distract: {
    flex: 2,
    backgroundColor: 'red',
    fontSize: 50,
    textAlign: 'center',
  },
});
