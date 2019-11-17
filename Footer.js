import React from 'react';
import {View, Text} from 'react-native';

const Footer = props => {
  var niomic = '@niomic';
  return (
    <View>
      <Text>
        Footer {niomic} {props.tahun}
      </Text>
    </View>
  );
};

export default Footer;
