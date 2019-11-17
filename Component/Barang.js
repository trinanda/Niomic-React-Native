import React, {Component} from 'react';
import {View, Text, TextInput, placeholder} from 'react-native';

export default class Barang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      amount: '',
    };
  }

  productName = event => {
    this.setState({productName: event});
  };

  amount = event => {
    this.setState({amount: event});
  };

  render() {
    return (
      <View>
        <TextInput
          onChangeText={this.productName}
          placeholder="Please input the product name"
          value={this.state.productName}
        />
        <TextInput
          onChangeText={this.amount}
          placeholder="The amount of the product"
          value={this.state.amount}
          keyboardType="numeric"
        />
        <Text>{this.props.shoppingName}</Text>
        <Text>Product name: {this.state.productName}</Text>
        <Text>amount: {this.state.amount}</Text>
      </View>
    );
  }
}
