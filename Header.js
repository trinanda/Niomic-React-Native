import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptions: this.props.descriptions,
      inputText: '',
    };
  }

  handleInput = event => {
    this.setState({inputText: event});
  };

  render() {
    return (
      <View>
        <Text> {this.state.descriptions} </Text>
        {/* <TextInput
          onChangeText={this.handleInput}
          placeholder="Input text field"
          value={this.state.inputText}
        />
        <Text>{this.state.inputText}</Text> */}
      </View>
    );
  }
}

export default Header;
