import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Following extends Component {
  render() {
    return (
      <View>
        <Text>Here is the Following page</Text>
        <Text>Following: {Object.keys(this.props.following).length}</Text>
      </View>
    );
  }
}