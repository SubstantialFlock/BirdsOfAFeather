import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
const style = require('./../style/styles');

export default class Welcome extends Component {
  render() {
    return (
      <Image style={style.styles.splashBackground} source={require('image!foodaware-splash')}>
        <View style={{backgroundColor: 'rgba(192,192,192,0.3)', flex: 1, alignSelf: 'stretch'}}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text style={style.styles.welcome}>Welcome to FoodAware</Text>
        <Text>{'\n'}</Text>
        <Text style={style.styles.welcome}>{this.props.username}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text style={{color: 'white', fontSize: 40, textAlign: 'center', fontFamily: 'Didot-Italic'}}>Please press start to continue</Text>
        <View style={{alignItems: 'center'}}>
          <Text>{'\n'}</Text>
          <TouchableHighlight style={{borderColor: 'white', borderWidth: 1}} onPress={this.props.onForward}>
            <Text style={style.styles.start}>Start</Text>
          </TouchableHighlight>
        </View>
        </View>
      </Image>
    );
  }
}
