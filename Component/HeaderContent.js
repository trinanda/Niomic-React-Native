import React, {Component} from 'react';
import {View, Header, Left, Icon, Body, Right, Text} from 'native-base';
export default class HeaderContent extends Component {
  render() {
    return (
      <View>
        <Header style={{backgroundColor: 'white'}}>
          <Left>
            <Icon name="camera" />
          </Left>
          <Body>
            <Text style={{marginLeft: 70}}>InstaOne</Text>
          </Body>
          <Right>
            <Icon name="paper-plane" />
          </Right>
        </Header>
      </View>
    );
  }
}
